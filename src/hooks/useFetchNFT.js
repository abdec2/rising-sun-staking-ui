import { ethers } from "ethers";
import { useEffect, useState } from "react";
import CONFIG from './../abi/config.json'
import ABI from './../abi/nft.json'

const useFetchNFT = (account, fetchNFTs, setFetchNFTs, rewardType, collection) => {
    const [nft, setNFT] = useState(null)
    const fetchWalletNFTs = async (account) => {
        try {
            if(account) {
                // const endpoint = process.env.REACT_APP_ALCHEMY_ENDPOINT
                // const nfts = await fetch(`${endpoint}/getNFTs?owner=${account}&contractAddresses[]=${CONFIG.NFT_CONTRACT}` ,{
                //     method: 'GET', 
                //     headers: {accept: 'application/json'}
                // })
                // const response = await nfts.json();
                // setNFT(response)
                // setFetchNFTs(false)
                const nftContractKey = `${collection.toUpperCase()}_${rewardType.toUpperCase()}`;
                console.log(nftContractKey) 
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const contract = new ethers.Contract(CONFIG.NFT_CONTRACT[collection.toUpperCase()], ABI, provider)
                const nfts = await contract.walletOfOwner(account)
                let baseUri = await contract.baseURI()
                if (baseUri.startsWith('ipfs://')) {
                    baseUri = `https://gateway.pinata.cloud/ipfs/${baseUri.split('ipfs://')[1]}`
                }
                console.log(baseUri)
                const metadata = await Promise.all(nfts.map(async item => {
                    console.log(item.toString())
                    let res = await fetch(`${baseUri.trim()+item.toString()}.json`)
                    let results = await res.json()
                    return {...results, tokenId: item.toString()}
                }))
                console.log(metadata)
                setNFT(metadata)
                setFetchNFTs(false)
            }
          
        } catch(e) {
            console.log(e)
            setFetchNFTs(false)
        }
    }

    useEffect(()=>{
        if (fetchNFTs) {
            fetchWalletNFTs(account)
        }
    }, [account, fetchNFTs])

    return nft

}

export default useFetchNFT