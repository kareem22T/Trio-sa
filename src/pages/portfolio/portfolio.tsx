import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import './portfolio.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getSettings, setShowNav } from "../../features/settingsSlice";
import { fetchWorks } from "../../features/worksSlice";
import { useEffect } from "react";
import { API_URL } from "../../_env";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Portfolio = () => {

    const dispatch = useDispatch<AppDispatch>();
    const works = useSelector((state: RootState) => state.works.works);
    const totalPages = useSelector((state: RootState) => state.works.totalPages);
    const currentPage = useSelector((state: RootState) => state.works.pageNumber);
    const settings = useSelector((state: RootState) => state.settings.settings);
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      dispatch(fetchWorks({ page: value, pageSize: 20}));
    };

    useEffect(() => {
        dispatch(fetchWorks({page: 1, pageSize: 20}));
        dispatch(getSettings())
      }, [dispatch]);
    
    return (
        <DefaultLayout>
        <section className="hero portfolio-hero"  style={{backgroundImage: "url(" + API_URL + settings?.our_work + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="hero_wrapper">
                <div className="nav">
                    <a href="/"><img src={API_URL + settings?.logo_main} alt="" /></a>
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
                {
                    (works && works.length > 0) && (
                        works.map((work => (
                            <div className="portfolio_card">
                                <img src={API_URL + work.photo_path} alt="" />
                                <h2>{work.title }</h2>
                                <p>
                                    {work.description}
                                </p>
                            </div>
                        )))
                    )
                }
            </div>
        </section>
            <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
                  {totalPages  && totalPages > 1 ? (
                    <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
                      <Pagination count={totalPages} page={currentPage} onChange={handleChange} variant="outlined" color='primary' shape="rounded" />
                    </Stack>
                  ) : (
                    <></>
                  )}
            </div>
        </DefaultLayout>
    )
}

export default Portfolio;