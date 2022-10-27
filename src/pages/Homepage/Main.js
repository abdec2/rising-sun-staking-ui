import { Link } from "react-router-dom"
const styleobj = {
  WebkitTransform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
  msTransform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
  transform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
  opacity: 0
}

const Main = ({ setError, setErrMsg }) => {

  return (
    <section className="stake-and-earn wf-section">
      <h2 data-w-id="dd94e943-0d2f-0166-be77-07d29f9437fd" style={styleobj} className="main-title stake-title main-h2-customStyle">STAKE and earn</h2>
      <div className="stake-content">
        
        <Link to={'/collections/bnb'} data-w-id="50077320-d150-c3b1-99d4-af4e6fb8fa39" style={{ opacity: 0 }} className="primary-button w-button">Earn BNB</Link>
        <Link to={'/collections/sun'} data-w-id="50077320-d150-c3b1-99d4-af4e6fb8fa39" style={{ opacity: 0 }} className="primary-button w-button">Earn SUN TOKEN</Link>
      </div>

    </section>
  )
}

export default Main