import { Link } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import logo from "../../images/logo.png"
import about_us_img from "../../images/acdddf27694d06e4baeecfcb338dcb24.jpeg"
import services_img from "../../images/46d95ad34bc5745e6e6fad1073dd7af0.jpeg"
import ourWork_img from "../../images/bcbfb627b531b38c8bda40ab1a51c57c.jpeg"
import sponsor from "../../images/sponsor.png"
import logodark from "../../images/logo-black.png"
import { motion, useTransform, useViewportScroll } from "framer-motion";
import video_main from "../../videos/video.mp4"
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from "swiper/modules";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setShowNav } from "../../features/settingsSlice";

const Home = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    };
    
    const item = {
        hidden: { x: 0, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .4
            }
        }
    };
      
    const item2 = {
        hidden: { 
            scale: 0, 
            opacity: 0,
            rotate: -30
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                duration: .4,
                delay: 1
            }
        }
    };

    const [isElementVisible, setIsElementVisible] = useState(false);
    const [scrollRange, setScrollRange] = useState([0, 0]);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, scrollRange, [1, 5]);

    useEffect(() => {
        if (elementRef.current) {
            const elementTop = elementRef.current.getBoundingClientRect().top + window.scrollY;
            setScrollRange([elementTop, elementTop + 300]);
        }
    }, [elementRef]);

    useEffect(() => {
        return scrollY.onChange((currentScrollY) => {
            if (elementRef.current) {
                const elementTop = elementRef.current.getBoundingClientRect().top;
                const elementBottom = elementRef.current.getBoundingClientRect().bottom;
                setIsElementVisible(elementTop <= 0 && elementBottom >= 0);
            }
        });
    }, [scrollY]);

    const handleScroll = (): void => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const elementBottom = elementRef.current.getBoundingClientRect().bottom; 
        const windowTop = window.pageYOffset;
        setIsElementVisible(elementTop > -10 && elementTop < 30 && windowTop > elementBottom &&(windowTop as any - elementBottom) < (elementBottom / 2) + 100);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <DefaultLayout>
            <section className="hero">
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
                        <motion.div className="text"
                            variants={container}
                            initial="hidden"
                            animate="visible"                        
                        >
                            <motion.svg variants={item2} width="53" height="46" viewBox="0 0 53 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.88087 45.6487C-1.76535 37.0326 1.45289 26.2813 10.069 21.6351L49.9196 0.145784C54.5658 8.76191 51.3476 19.5132 42.7315 24.1594L2.88087 45.6487Z" fill="#FFDD63"/>
                            </motion.svg>
                            <motion.h1 variants={item}>نبدع</motion.h1>
                            <motion.p variants={item}>فنوءثر فنحقق نتائج</motion.p>
                            <motion.a href={"/contact-us"} variants={item} >
                                تواصل معنا الأن
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="establishment">
            <div className="logo">
                {/* <div className="video_wrapper">
                    <video width="100%" height="100%">
                        <source src={video_main} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
            </div>

                <div
                 className="container">
                    <div>
                        <span>وكاله ابداعيه</span>
                        <img src={logodark} alt="" />
                    </div>
                    <div className="text">
                        <div>
                            <h1>يسعدنا ان نكون شريكا في مشروعك</h1>
                            <p>
                            لتعظيم الصورة الذهنيّـة لعملائنا، من خلال حلول تواصلية وتسويقية تخلق رسائل مؤثرة، تلهم الأفعال وتحرك المشاعر لتحقيق مستهدفاتهم.
                            </p>
                        </div>
                        <span>
                        منذ 2017
                        </span>
                    </div>
                </div>
            </section>
            <section className="portfolio">
                <div className="container">
                    <img src={logo} alt="logo" />
                    <p>وكالة ابداعية تقدم خدمات بناء الاستراتيجيات التسويقية وصناعة الحملات والاعلانات الابداعية والتسويق الرقمي.</p>
                    <div className="cards_wrapper">
                        <Link to={""} className="card">
                            <img src={about_us_img} alt="" />
                            <p>من نحن</p>
                        </Link>
                        <Link to={""} className="card">
                            <img src={services_img} alt="" />
                            <p>خدماتنا</p>
                        </Link>
                        <Link to={""} className="card">
                            <img src={ourWork_img} alt="" />
                            <p>اعمالنا</p>
                        </Link>
                    </div>
                    <p>وكالة ابداعية تقدم خدمات بناء الاستراتيجيات التسويقية وصناعة الحملات والاعلانات .</p>
                </div>
            </section>
            <section className="sponsors">
                <div className="">
                    <h1>عـملاؤنــــا</h1>
                    <p>نفخر بثقة أكثر من 100 عميل وشريك قمنا بالعمل معهم لصناعة حملات ومشاريع إبداعيّة</p>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={"auto"}
                        freeMode={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        speed={500}
                        className="mySwiper"
                        modules={[FreeMode, Autoplay]}
                        >
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={sponsor} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Home;