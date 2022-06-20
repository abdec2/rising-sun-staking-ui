import HeaderComponent from "./components/Header";
import Main from './components/Main'
// import Presale from "./components/Presale";
import FooterComponent from './components/Footer';
import { useEffect, useState } from "react";
import { GlobalProvider } from "./context/GlobalContext";

import AlertBox from "./components_old/AlertBox";

function App() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(()=>{
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require('ix2').init();
    document.dispatchEvent(new Event('readystatechange'))
  })

  return (
    <GlobalProvider>
      <HeaderComponent />
      <Main setError={setError} setErrMsg={setErrMsg} />
      <FooterComponent />
      {/* <div className="tw-container tw-mx-auto tw-px-10 tw-max-w-7xl">
          <Presale setError={setError} setErrMsg={setErrMsg} />
      </div> */}
      {error && (<AlertBox  msg={errMsg}/>)}
    </GlobalProvider>
  );
}
// 
export default App;
