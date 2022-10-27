import { useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Homepage from './pages/Home'
import StakePage from './pages/Stake'

import AlertBox from "./components_old/AlertBox";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function App() {
  
  const location = useLocation()
  const {rewardType, collection} = location.state
  
  const {account} = useContext(GlobalContext)
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require('ix2').init();
    document.dispatchEvent(new Event('readystatechange'))
  })

  useEffect(() => {
    console.log(account)
  }, [account])

  return (
    <>
      {account ? (<StakePage setError={setError} setErrMsg={setErrMsg} rewardType={rewardType} collection={collection}  />) : (<Homepage setError={setError} setErrMsg={setErrMsg} />)}

      {error && (<AlertBox msg={errMsg} />)}
    </>
  );
}
// 
export default App;
