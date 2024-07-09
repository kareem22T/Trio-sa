import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import service from "../../images/service.jpeg"
import './services.css'
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { setShowNav } from "../../features/settingsSlice"

const Services = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <DefaultLayout>
        <section className="hero services-hero">
            <div className="hero_wrapper">
                <div className="nav">
                    <img src={logo} alt="" />
                    <button onClick={() => {
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
                        <h1 >خدماتنا</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="services_cards">
            <div className="container">
                <h1>ماذا نقدم؟</h1>
                <div className="cards_wrapper">
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="text">
                            <h2>استراتبجيه الخطط التسويقيه</h2>
                            <ul>
                                <li>تحليل SOWT</li>
                                <li>المزيج التسويقي</li>
                                <li>الفئه المستهدفه</li>
                                <li>الخطه الزمنيه</li>
                                <li>الأفكار التسويقيه</li>
                                <li>تحليل المنافسين</li>
                            </ul>
                        </div>
                        <div className="img">
                            <img src={service} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </DefaultLayout>
    )
}

export default Services;