import HeaderComponent from './Header'
import Main from './Main'
import FooterComponent from './Footer'
import { useEffect } from "react";

const Homepage = ({setError, setErrMsg}) => {

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require('ix2').init();
    document.dispatchEvent(new Event('readystatechange'))
  })
  
  return (
    <div>
      <HeaderComponent />
      <Main setError={setError} setErrMsg={setErrMsg} />
      <FooterComponent />
    </div>
  )
}

export default Homepage