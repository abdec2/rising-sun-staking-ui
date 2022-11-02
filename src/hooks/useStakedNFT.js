import { ethers } from "ethers"
import { useEffect } from "react"
import CONFIG from './../abi/config.json'
import { useState } from "react"
import { ABI } from './../abi/abis'

const useStakedNFT = (provider, account, fetchNFTs, setFetchNfts, rewardType, collection) => {
    const [stakedTokens, setStakedTokens] = useState([])
    const loadStakedNFT = async() => {
            const signer = provider.getSigner()
            const stakingContract = new ethers.Contract(CONFIG.STAKING_CONTRACT[`${collection.toUpperCase()}_${rewardType.toUpperCase()}`], JSON.parse(ABI[`${collection.toUpperCase()}_${rewardType.toUpperCase()}`]), signer)
            const staked_Tokens = await stakingContract.getUserStakedTokens(account)
            const tokenArray = await Promise.all(staked_Tokens.map(async item => {
                const tokenObject = await stakingContract.vault(item.toString())
                return tokenObject
            }))
            
            setStakedTokens(tokenArray)
            setFetchNfts(false)
    }
 
    useEffect(()=>{
        if(fetchNFTs) {
            loadStakedNFT()
        }
        
    }, [account, fetchNFTs])

    return stakedTokens

}

export default useStakedNFT