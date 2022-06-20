import { createContext, useReducer } from "react";
import { AppReducer } from './AppReducer'
import { ethers } from "ethers";
import CONFIG from "./../abi/config.json"
import nftAbi from "./../abi/nft.json"
import contractAbi from './../abi/abi.json'


const initialState = {
    account: null, 
    bnbBalance: null, 
    tokenBalance: null, 
    rate: null,
    web3Provider: null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const delAccount = () => {
        dispatch({
            type: 'DELETE_ACCOUNT'
        })
    }

    const addAccount = (account) => {
        dispatch({
            type: 'ADD_ACCOUNT',
            payload: account.id
        })
    }

    const updateTokenBalance = (balance) => {
        dispatch({
            type: 'UPDATE_TOKEN_BALANCE',
            payload: balance
        })
    }

    const updateBNBBalance = (balance) => {
        dispatch({
            type: 'UPDATE_BNB_BALANCE',
            payload: balance
        })
    }

    const updateRate = (rate) => {
        dispatch({
            type: 'UPDATE_ICO_RATE',
            payload: rate
        })
    }

    const updateProvider = (provider) => {
        dispatch({
            type: 'UPDATE_PROVIDER',
            payload: provider
        })
    }

    const fetchAccountData = async () => {
        try {
            // const provider = state.web3Provider;
            // const signer = provider.getSigner();
            // const address = await signer.getAddress();

            // const tokenContract = new ethers.Contract(CONFIG.USDT_ADDRESS, tokenABI, signer)
            // const balanceOf = await tokenContract.balanceOf(address)
            // updateBNBBalance(ethers.utils.formatUnits(balanceOf, CONFIG.USDT_DECIMAL))

            // const contract = new ethers.Contract(CONFIG.ICO_CONTRACT_ADDRESS, icoAbi, signer)
            // const rate = await contract.rate()
            // const dyopsBalance = await contract.userPurchases(address) 
            // updateTokenBalance(ethers.utils.formatUnits(dyopsBalance, CONFIG.TOKEN_DECIMAL))
            // updateRate(rate.toString())
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <GlobalContext.Provider value={
            {
                ...state,
                delAccount, 
                addAccount,
                updateTokenBalance,
                updateBNBBalance,
                updateRate,
                updateProvider,
                fetchAccountData
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}