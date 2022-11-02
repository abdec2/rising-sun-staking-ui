import { ethers } from "ethers";
import { useEffect, useState } from "react";
import CONFIG from './../abi/config.json'
import ABI from './../abi/nft.json'

const useFetchNFT = (account, fetchNFTs, setFetchNFTs, rewardType, collection) => {
    const [nft, setNFT] = useState(null)
    const fetchWalletNFTs = async (account) => {
        try {
            if(account) {
                const endpoint = process.env.REACT_APP_ALCHEMY_ENDPOINT
                const nfts = await fetch(`${endpoint}/getNFTs?owner=${account}&contractAddresses[]=${CONFIG.NFT_CONTRACT[collection.toUpperCase()]}&withMetadata=false` ,{
                    method: 'GET', 
                    headers: {accept: 'application/json'}
                })
                const response = await nfts.json();
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const contract = new ethers.Contract(CONFIG.NFT_CONTRACT[collection.toUpperCase()], ABI, provider)
                let baseUri = await contract.baseURI()
                if (baseUri.startsWith('ipfs://')) {
                    baseUri = `https://ipfs.io/ipfs/${baseUri.split('ipfs://')[1]}`
                }
                const metadata = await Promise.all(response.ownedNfts.map(async item => {
                    let res = await fetch(`${baseUri.trim()+parseInt(item.id.tokenId, 16)}.json`)
                    let results = await res.json()
                    return {...results, tokenId: parseInt(item.id.tokenId, 16)}
                }))
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