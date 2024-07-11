import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import about from "../../images/about.png"
import testmain from "../../images/testmain.png"
import test1 from "../../images/test1.png"
import test2 from "../../images/test2.png"
import './about.css'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { getSettings, setShowNav } from "../../features/settingsSlice"
import { useEffect } from "react"
import { API_URL } from "../../_env"

const About = () => {
    const dispatch = useDispatch<AppDispatch>();
    const showNav = useSelector((state: RootState) => state.settings.showNav);
    const settings = useSelector((state: RootState) => state.settings.settings);
    
    useEffect(() => {
        dispatch(getSettings())
        
    }, [dispatch])

    return (
        <DefaultLayout>
        <section className="hero about-hero" style={{backgroundImage: "url(" + API_URL + settings?.about_us + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="hero_wrapper">
                <div className="nav">
                    <img src={logo} alt="" />
                    <button  onClick={() => {
                            dispatch(setShowNav());
                        }}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.25 20.75H23.75M10.25 17H23.75M10.25 13.25H23.75" stroke="#FF512F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="17" cy="17" r="16" stroke="#F8F8F8" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
                <div className="hero_content">
                    <div className="text"
                    >
                        <h1 >من نحن</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="container">
            <div className="text">
                    <h1>
                        من هم <span>Trio</span> ؟
                    </h1>
                    <p dangerouslySetInnerHTML={{ __html: settings?.who_trio || "" }}>
                    </p>
                </div>

                <div className="img">
                    <svg width="1013" height="736" viewBox="0 0 1013 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.7378 734.578L8.80057 735.865L10.0884 727.803L2.0256 726.515L0.7378 734.578ZM1012.09 1.8026L1004.03 0.514834L1002.74 8.57764L1010.8 9.86541L1012.09 1.8026ZM5.99982 732L1008 5.9999L1006.83 4.38034L4.82636 730.38L5.99982 732Z" fill="#FF512F" fill-opacity="0.46"/>
                    </svg>
                    <svg width="1013" height="736" viewBox="0 0 1013 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.7378 734.578L8.80057 735.865L10.0884 727.803L2.0256 726.515L0.7378 734.578ZM1012.09 1.8026L1004.03 0.514834L1002.74 8.57764L1010.8 9.86541L1012.09 1.8026ZM5.99982 732L1008 5.9999L1006.83 4.38034L4.82636 730.38L5.99982 732Z" fill="#FF512F" fill-opacity="0.46"/>
                    </svg>
                    <svg width="1013" height="736" viewBox="0 0 1013 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.7378 734.578L8.80057 735.865L10.0884 727.803L2.0256 726.515L0.7378 734.578ZM1012.09 1.8026L1004.03 0.514834L1002.74 8.57764L1010.8 9.86541L1012.09 1.8026ZM5.99982 732L1008 5.9999L1006.83 4.38034L4.82636 730.38L5.99982 732Z" fill="#FF512F" fill-opacity="0.46"/>
                    </svg>

                    <img src={API_URL + settings?.about_us_main} alt="" />
                </div>
            </div>
        </section>
        <section className="testemonials" style={{backgroundImage: "url(" + API_URL + settings?.about_us_bg + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="container">
                <div className="text">
                    <h2>هدفنا</h2>
                    <img src={API_URL + settings?.about_us_large} alt="" />
                </div>
                <div className="images">
                    <img src={API_URL + settings?.about_us_first} alt="" />
                    <img src={API_URL + settings?.about_us_second} alt="" />
                </div>
            </div>
        </section>
        <section className="our-bliefs">
            <div className="container">
                <h1>مبدأنا</h1>
                <div className="cards_wrappers_b">
                    <div>
                    {settings?.our_principle_1 as any || ""}
                    </div>
                    <div>
                    {settings?.our_principle_2 as any || ""}
                    </div>
                    <div>
                    {settings?.our_principle_3 as any || ""}
                    </div>
                </div>
            </div>
        </section>
        </DefaultLayout>
    )
}

export default About;