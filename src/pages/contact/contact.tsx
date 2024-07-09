import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import service from "../../images/service.jpeg"
import './contact.css'
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { setShowNav } from "../../features/settingsSlice"

const Contact = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <DefaultLayout>
        <section className="hero contact-hero">
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
                        <h1 >طلب السعر</h1>
                    </div>
                </div>
            </div>
        </section>
        <form action="" className="contact">
            <div className="container">
                <h1>تواصل معنا</h1>
                <p>نتطلع ان نخوض سويا تحديات تنقلنا لمستوي ابداعي مختلف يحقق نتائج ملموسه .</p>
                <input type="text" name="" id="" placeholder="الاسم كامل*"/>
                <input type="text" name="" id="" placeholder="بريدك الاكتروني*"/>
                <input type="text" name="" id="" placeholder="رقم الجوال*"/>
                <input type="text" name="" id="" placeholder="العنوان*"/>
                <select name="" id="">
                    <option value="">اختر خدمتك</option>
                </select>
                <textarea name="" id="" placeholder="رسالتك"></textarea>
                <button type="submit">
                    ارسل الأن
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9999 21L31.4999 4.5M14.9999 21L20.2499 31.5C20.3157 31.6436 20.4213 31.7653 20.5543 31.8506C20.6872 31.936 20.8419 31.9813 20.9999 31.9813C21.1578 31.9813 21.3125 31.936 21.4454 31.8506C21.5784 31.7653 21.6841 31.6436 21.7499 31.5L31.4999 4.5M14.9999 21L4.49986 15.75C4.35625 15.6842 4.23455 15.5785 4.14923 15.4456C4.06391 15.3126 4.01855 15.158 4.01855 15C4.01855 14.842 4.06391 14.6874 4.14923 14.5544C4.23455 14.4215 4.35625 14.3158 4.49986 14.25L31.4999 4.5" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </form>
        </DefaultLayout>
    )
}

export default Contact;