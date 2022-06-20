import { useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import useFetchNFT from "../../hooks/useFetchNFT"

const style1 = {
    WebkitTransform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
    MozTransform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
    msTransform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)",
    transform: "translate3d(0, 100px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(3deg) skew(0, 0)", 
    opacity: 0
}

const style2 = {
    WebkitTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    MozTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    msTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)", 
    transformStyle: "preserve-3d",
    opacity: 1
}

const style3 = {
    WebkitTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    MozTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    msTransform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)",
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0deg) rotateZ(0) skew(0, 0)", 
    transformStyle: "preserve-3d",
    opacity: 0
}

const Stake = () => {
    const {account} = useContext(GlobalContext)
    const nfts = useFetchNFT(account)
    console.log(nfts)
    useEffect(()=>{

    }, [nfts])
    return (
        <>
            <section className="stake-and-earn-connected wf-section">
                <h2 data-w-id="638e3a75-1253-8367-0636-0a1cb9fe5d04" style={style1} className="main-title connected">STAKE and earn</h2>
                <div data-w-id="584c57f4-5178-0bf2-1a84-17853597b257" style={{opacity: 0}} className="tabs-holder">
                    <div data-w-id="002cffd5-e811-2ac9-941c-bdffec8f43b8" className="stake-tabs mynfts">my nfts</div>
                    <div data-w-id="d91d0851-0831-1435-1930-c2284add1765" className="stake-tabs stakes-tab">staked</div>
                </div>
                <div className="stake-nfts">
                    { nfts && nfts.ownedNfts.map((nft, i) => {
                        if(i < nfts.ownedNfts.length - 1) {
                            return (
                                <div key={i} className="nft-row">
                                    <div className="check-box-holder">
                                        <img src="images/tick.svg" alt="" className="image-tick"/>
                                    </div>
                                    <div className="nft-image">
                                        <img src={nft.media[0].gateway} style={style2} alt="" className="image-nft-stake"/>
                                    </div>
                                    <div className="nft-id">{nft.title}</div>
                                    <div className="white-detail-line"></div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="nft-row last">
                                    <div className="check-box-holder">
                                        <img src="images/tick.svg" alt="" className="image-tick"/>
                                    </div>
                                    <div className="nft-image">
                                        <img src={nft.media[0].gateway} width="76" alt=""/>
                                    </div>
                                    <div className="nft-id">{nft.title}</div>
                                    <div className="white-detail-line"></div>
                                    <div className="white-detail-line bottom"></div>
                                </div>
                            )
                        }
                    })}
                    {/* <div className="nft-row">
                        <div className="check-box-holder">
                            <img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/>
                        </div>
                        <div data-w-id="53fe16d8-ef1f-9785-4265-b01dfddb28f7" className="nft-image">
                            <img src="images/image-mint-placeholder.jpg" loading="lazy" style={style2} alt="" className="image-nft-stake"/>
                            <img src="images/image-stake-coffin.png" loading="lazy" style={style3} alt="" className="image-coffin" />
                        </div>
                        <div className="nft-id">#7480</div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row">
                        <div className="check-box-holder">
                            <img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/>
                        </div>
                        <div className="nft-image">
                            <img src="images/image-mint-placeholder.jpg" loading="lazy" width="76" alt=""/>
                        </div>
                        <div className="nft-id">#7480</div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row last">
                        <div className="check-box-holder">
                            <img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/>
                        </div>
                        <div className="nft-image">
                            <img src="images/image-mint-placeholder.jpg" loading="lazy" width="76" alt=""/>
                        </div>
                        <div className="nft-id">#7480</div>
                        <div className="white-detail-line"></div>
                        <div className="white-detail-line bottom"></div>
                    </div> */}
                </div>
                <div className="staked">
                    <div className="nft-row">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt="" className="image-16"/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt=""/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt=""/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt=""/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt=""/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                    </div>
                    <div className="nft-row last">
                        <div className="check-box-holder"><img src="images/tick.svg" loading="lazy" alt="" className="image-tick"/></div>
                        <div className="nft-image"><img src="images/coffen.png" loading="lazy" width="55" alt=""/></div>
                        <div className="nft-id">#7480</div>
                        <div className="staked-info">
                            <div className="staked-for">STAKED FOR 30 days</div>
                            <div className="earning">earning 5%</div>
                        </div>
                        <div className="white-detail-line"></div>
                        <div className="white-detail-line bottom"></div>
                    </div>
                </div>
            </section>
            <footer data-w-id="1c6363c1-60a3-5681-8671-51603099bdca" style={{opacity: 0}} className="footer stake wf-section">
                <div className="stake-period-holder">
                    <div className="hero-line left"></div>
                    <div className="typo-stake-period">choose staking period in days</div>
                    <div className="button-days-holder">
                        <div className="button-nav-small days">
                            <div className="typo-days">30</div>
                        </div>
                        <div className="button-nav-small days">
                            <div className="typo-days">60</div>
                        </div>
                        <div className="button-nav-small days active">
                            <div className="typo-days">90</div>
                        </div>
                        <div className="button-nav-small days">
                            <div className="typo-days">120</div>
                        </div>
                    </div>
                    <a data-w-id="e2b7a820-35a6-06f6-ec66-f0b4a902d6fc" style={{opacity: 0}} href="#" className="button-stake w-button">STAKE MY NFTs</a>
                    <a data-w-id="a320d48d-3cfa-a880-0e58-e1b68e7768dc" style={{opacity: 0}} href="#" className="button-unstake w-button">unstake</a>
                    <div className="hero-line"></div>
                </div>
                <div className="container footer-mobile w-container">
                    <div className="footer-madeby mobile">
                        <p className="typo-footer dark">Website by</p>
                        <a href="http://www.brdigitech.com/" className="typo-footer footer-link">brdigitech</a>
                    </div>
                    <div className="footer-copyright">
                        <p className="typo-footer hidden">PRIVACY POLICY — TERMS OF USE</p>
                        <p className="typo-footer dark">©2022 - Rising Sun.<br/>All rights reserved.</p>
                    </div>
                    <div className="footer-links">
                        <p className="typo-footer dark">FOLLOW US AND JOIN THE CLUB</p>
                        <div className="footer-link-holder">
                            <a href="https://twitter.com/RisingSunCoin" className="footer-link typo-footer">TWITTER</a>
                            <div className="text-block">-</div>
                            <a href="https://instagram.com/RisingSunCoin" className="footer-link typo-footer">INSTAGRAM</a>
                            <div className="text-block">-</div>
                            <a href="https://Facebook.com/RisingSunCoin" className="footer-link typo-footer">FACEBOOK</a>
                            <div className="text-block">-</div>
                            <a href="https://opensea.io/David907" className="footer-link typo-footer">OPENSEA</a>
                            <div className="text-block">-</div>
                            <a href="https://t.me/RISINGSUNCOIN" className="footer-link typo-footer">TELEGRAM</a>
                            <div className="text-block">-</div>
                            <a href="https://docs.google.com/forms/d/1wDtI0fs7tfZjWGVoO790_Xk7FiFhDMEGXvW-GqSMhhw/viewform?edit_requested=true" className="footer-link typo-footer">Refer a friend</a>
                        </div>
                    </div>
                    <div className="footer-madeby">
                        <p className="typo-footer dark">Website by</p>
                        <a href="http://www.brdigitech.com/" target="_blank" className="footer-link typo-footer">brdigitech</a>
                    </div>
                </div>
            </footer>
            <div className="stake-period-holder mobile">
                <div className="hero-line left"></div>
                <div className="typo-stake-period">choose staking period in days</div>
                <div className="button-days-holder">
                    <div className="button-nav-small days">
                        <div className="typo-days">30</div>
                    </div>
                    <div className="button-nav-small days">
                        <div className="typo-days">60</div>
                    </div>
                    <div className="button-nav-small days active">
                        <div className="typo-days">90</div>
                    </div>
                    <div className="button-nav-small days">
                        <div className="typo-days">120</div>
                    </div>
                </div>
                <a data-w-id="e7892a29-86dd-8960-fe68-2193ff2d4865" style={{opacity: 0}} href="#" className="button-stake w-button">STAKE MY NFTs</a>
                <a data-w-id="d1f62f78-ab19-2899-d55d-9a0983a461a4" style={{opacity: 0}} href="#" className="button-unstake w-button">unstake</a>
                <div className="hero-line"></div>
            </div>
            <div className="footer-madeby mobile">
                <p className="typo-footer dark">Website by</p>
                <a href="http://www.brdigitech.com/" className="typo-footer footer-link">brdigitech</a>
            </div>
        </>
    )
}

export default Stake