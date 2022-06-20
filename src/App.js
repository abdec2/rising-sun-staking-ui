import { useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Homepage from './pages/Home'
import StakePage from './pages/Stake'

import AlertBox from "./components_old/AlertBox";
import { useContext } from "react";

function App() {
  const {account} = useContext(GlobalContext)
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-wf-page','626bab4ccdd51fc2c2800bf5')
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
      {account ? (<StakePage setError={setError} setErrMsg={setErrMsg} />) : (<Homepage setError={setError} setErrMsg={setErrMsg} />)}

      {error && (<AlertBox msg={errMsg} />)}
    </>
  );
}
// 
export default App;
