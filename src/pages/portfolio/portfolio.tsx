import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import './portfolio.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setShowNav } from "../../features/settingsSlice";
const Portfolio = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <DefaultLayout>
        <section className="hero portfolio-hero">
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
                        <h1 >أعمالنا</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="portfolio_cards">
            <div className="container">
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
                <div className="portfolio_card">
                    <img src="" alt="" />
                    <h2>نخبه معادن</h2>
                    <p>لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية .</p>
                </div>
            </div>
        </section>
        </DefaultLayout>
    )
}

export default Portfolio;