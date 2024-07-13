import { Link } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import logo from "../../images/logo.png";
import about_us_img from "../../images/acdddf27694d06e4baeecfcb338dcb24.jpeg";
import services_img from "../../images/46d95ad34bc5745e6e6fad1073dd7af0.jpeg";
import ourWork_img from "../../images/bcbfb627b531b38c8bda40ab1a51c57c.jpeg";
import video_main from "../../videos/video.mp4";
import bg from "../../images/es_bg.svg";
import logodark from "../../images/logo-black.png";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getSettings, setShowNav } from "../../features/settingsSlice";
import { API_URL } from "../../_env";

const Home = () => {
  const [aboutUsRef, aboutUsInView] = useInView({
    rootMargin: "-50% 0px",
    triggerOnce: false,
  });
  const [servicesRef, servicesInView] = useInView({
    rootMargin: "-50% 0px",
    triggerOnce: false,
  });
  const [portfolioRef, portfolioInView] = useInView({
    rootMargin: "-50% 0px",
    triggerOnce: false,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const item2 = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: 1,
      },
    },
  };

  const [isElementVisible, setIsElementVisible] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isStop, setStop] = useState(false);
  const [scrollRange, setScrollRange] = useState([0, 0]);
  const elementBottom = useRef<HTMLButtonElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRefCont = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useViewportScroll();
  const scrollTop = useMotionValue(0);

  const scale = useTransform(scrollTop, [150, 600], [1, 60]);
  const move = useTransform(scrollTop, [0, 150], [1, 0]);
  const opacity = useTransform(scrollTop, [150, 200], [1, 0]);

  useEffect(() => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top + window.scrollY;
      setScrollRange([elementTop, elementTop + 300]);
    }
  }, [elementRef]);

  const [buttonLeft, setButtonLeft] = useState(0);
  const [buttonTop, setButtonTop] = useState(0);

  useEffect(() => {
    return scrollY.onChange((currentScrollY) => {
      if (elementBottom.current) {
        const left = elementBottom.current.offsetLeft;
        setButtonLeft(left as any);
        const elementTop = elementBottom.current.getBoundingClientRect().top;
        if (elementTop < 10 && !isNavSticky) setIsNavSticky(true);

        if (elementTop > 0 && isNavSticky) setIsNavSticky(false);
      }
    });
  }, [scrollY, isNavSticky]);

  const stopRef = useRef(isStop);
  useEffect(() => {
    stopRef.current = isStop;
  }, [isStop]);

  const [isPass, setIsPass] = useState(false);
  const isPassRef = useRef(isPass);
  useEffect(() => {
    isPassRef.current = isPass;
  }, [isPass]);

  const showElmentRef = useRef(isElementVisible);
  useEffect(() => {
    showElmentRef.current = isElementVisible;
  }, [isElementVisible]);

  const handleScroll = (): void => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      scrollTop.set(window.scrollY);
        if (elementTop <= 0 && !isPassRef.current && !showElmentRef.current) {
            console.log("change");
            
            setIsElementVisible(true);
        }

      if (elementTop >= 100 && isPassRef.current) {
        setIsPass(false);
        setStop(false);
      }
    }
    if (elementRefCont.current) {
      const windowTop = window.pageYOffset;

      if (windowTop < window.innerHeight - 200) {
        setIsPass(false);
        setStop(false);
        setIsElementVisible(false);
      }

      if (elementRefCont.current.getBoundingClientRect().top > 0 && stopRef.current) {
        setIsElementVisible(true);
        setStop(false);
      }

      if (elementRefCont.current.getBoundingClientRect().bottom < -300 && !stopRef.current) {
          
          setStop(true);
          setIsPass(true);
          window.scrollTo(0, elementRefCont.current.offsetTop);
      }

      scrollTop.set(elementRefCont.current.getBoundingClientRect().top * -1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings.settings);

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);
  type sponsortype = {
    image_path: string
  }
  const [sponsors, setSponsors] = useState<sponsortype[]>([])
  useEffect(() => {
    // Define the URL of the API endpoint
    const url = API_URL + "/api/sponsors/get-top";

    // Use the fetch function to make a request to the API
    fetch(url)
      .then(response => {
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON from the response
        return response.json()
      })
      .then(data => {
        // Log the data to the console
        setSponsors(data.data);
        
        // You can also manipulate the data here
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
      });

  }, [])

  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.controls = false;
      video.play().catch(error => {
        console.error('Autoplay was prevented:', error);
        setAutoplayBlocked(true);
      });
    }
  }, [settings]);

  const handlePlay = () => {
    const video = document.querySelector('video');
    if (video) {
      video.play().then(() => {
        setAutoplayBlocked(false);
      }).catch(error => {
        console.error('Error attempting to play:', error);
      });
    }
  };
  

  return (
    <DefaultLayout>
      <section className="hero"  style={{backgroundImage: "url(" + API_URL + settings?.hero_img + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="hero_wrapper">
          <div className="nav">
            <img src={logo} alt="" />
            <button onClick={() => dispatch(setShowNav())}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 20.75H23.75M10.25 17H23.75M10.25 13.25H23.75"
                  stroke="#FF512F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="#F8F8F8"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <div className="hero_content">
            <motion.div
              className="text"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.svg
                variants={item2}
                width="53"
                height="46"
                viewBox="0 0 53 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88087 45.6487C-1.76535 37.0326 1.45289 26.2813 10.069 21.6351L49.9196 0.145784C54.5658 8.76191 51.3476 19.5132 42.7315 24.1594L2.88087 45.6487Z"
                  fill="#FFDD63"
                />
              </motion.svg>
              <motion.h1 variants={item}>
                {settings?.hero_title || "نبدع"}
              </motion.h1>
              <motion.p variants={item}>
                {settings?.hero_sub_title || "فنوءثر فنحقق نتائج"}
              </motion.p>
              <motion.a href={"/contact-us"} variants={item}>
                تواصل معنا الأن
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="establishment_wrapper" ref={elementRefCont} onScroll={handleScroll}>
        <section
          className="establishment"
          ref={elementRef}
          onScroll={handleScroll}
          style={{ position: isElementVisible && !isStop ? "fixed" : "absolute" }}
        >
            {
                scrollY.get() < 1000 && (
                    <div style={{visibility: isStop ? "hidden" : "visible"}}>
                        <motion.div className="back" style={{ opacity }}></motion.div>
                        <motion.div className="container" style={{ scale }}>
                        <motion.div className={move.get() < 1 ? "moveTop" : ""}>
                            <span>{settings?.establishment_span || ""}</span>
                            <img src={logodark} />
                        </motion.div>
                        <div className="text">
                            <motion.div className={move.get() < 1 ? "moveRight" : ""}>
                            <h1>{settings?.establishment_title || ""}</h1>
                            <p>{settings?.establishment_description || ""}</p>
                            </motion.div>
                            <motion.span className={move.get() < 1 ? "moveLeft" : ""}>
                            {settings?.establishment_date || ""}
                            </motion.span>
                        </div>
                        </motion.div>
                    </div>
                )
            }
          <div className="video_container">
            {
              (API_URL + settings?.video).endsWith('.mp4') ? (
                <video width="100%" src={API_URL + settings?.video} height="100%" autoPlay muted loop>
                  <source src={API_URL + settings?.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={API_URL + settings?.video}  className="im" />
              )
            }
          </div>
        </section>
      </div>
      <section className="portfolio" style={{backgroundImage: "url(" + API_URL + settings?.third_bg + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="container">
          <img src={logo} alt="logo" />
          <p>{settings?.preview_title || ""}</p>
          <div className="cards_wrapper">
            <Link
              to="/about-us"
              className={`card ${aboutUsInView ? "active" : ""}`}
              ref={aboutUsRef}
            >
              <img src={API_URL + settings?.third_bg_about} alt="About Us" />
              <p>من نحن</p>
              <div className="desc">
                استكشف من هم شركه Trio , ما هدفهم وما هو مبدأهم .
              </div>
            </Link>
            <Link
              to="/services"
              className={`card ${servicesInView ? "active" : ""}`}
              ref={servicesRef}
            >
              <img src={API_URL + settings?.third_bg_services} alt="Services" />
              <p>خدماتنا</p>
              <div className="desc">
                لدينا العديد والكثير من الخدمات التي تجعلنا متميزين
                في عملنا واستطاعه ارضاء عملائنا .
              </div>
            </Link>
            <Link
              to="/portfolio"
              className={`card ${portfolioInView ? "active" : ""}`}
              ref={portfolioRef}
            >
              <img src={API_URL + settings?.third_bg_work} alt="Portfolio" />
              <p>اعمالنا</p>
              <div className="desc">
                بعض من اعمال شركتنا .
              </div>
            </Link>
          </div>
          <p>{settings?.preview_title2 || ""}</p>
        </div>
      </section>
      <section className="sponsors">
        <div className="">
          <h1>عـملاؤنــــا</h1>
          <p>{settings?.sponsor_description || ""}</p>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            freeMode={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
            speed={350}
            className="mySwiper"
            modules={[FreeMode, Autoplay]}
          >
            {
              (sponsors && sponsors.length > 0) && (                
                sponsors.map(sponsor => (
                <SwiperSlide>
                  <img src={API_URL + sponsor.image_path} alt="" />
                </SwiperSlide>
                ))
              )
            }
          </Swiper>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
