import DefaultLayout from "../../layout/DefaultLayout"
import logo from "../../images/logo.png"
import service from "../../images/service.jpeg"
import './contact.css'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { setShowNav } from "../../features/settingsSlice"
import { useEffect, useState } from "react"
import { API_URL } from "../../_env"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getServices } from "../../features/serviceSlice"

const showSuccessMsg = (msg: string) => {
  toast.success(msg, {
    position: 'top-right',
  });
};

const showErrorMsg = (msg: string) => {
  toast.error(msg, {
    position: 'top-right',
  });
};

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError({ ...error, name: false });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError({ ...error, email: false });
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setError({ ...error, phone: false });
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setError({ ...error, address: false });
  };

  const handleChangeService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      setError({
        name: !name,
        email: !email,
        phone: !phone,
        address: !address,
      });
      showErrorMsg("يرجى ملئ البيانات");
      return;
    }

    try {
      const res = await axios.post(API_URL + "/api/send-msg", {
        name,
        email,
        phone,
        address,
        service,
        message,
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      if (res.data.status === true) {
        showSuccessMsg("تم ارسال طلبك بنجاح");
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setService('');
        setMessage('');
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      showErrorMsg('Error submitting contact form.');
    }
  };

  const services = useSelector((state: RootState) => state.services.services);
    
  useEffect(() => {
      dispatch(getServices())
      
  }, [dispatch])

  return (
    <DefaultLayout>
      <section className="hero contact-hero">
        <div className="hero_wrapper">
          <div className="nav">
            <img src={logo} alt="" />
            <button onClick={() => {
              dispatch(setShowNav());
            }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 20.75H23.75M10.25 17H23.75M10.25 13.25H23.75" stroke="#FF512F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="17" cy="17" r="16" stroke="#F8F8F8" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div className="hero_content">
            <div className="text">
              <h1>طلب السعر</h1>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={handleOnSubmit} className="contact">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p>نتطلع ان نخوض سويا تحديات تنقلنا لمستوي ابداعي مختلف يحقق نتائج ملموسه .</p>
          <input
            type="text"
            placeholder="الاسم كامل*"
            value={name}
            onChange={handleChangeName}
            className={error.name ? 'error' : ''}
          />
          <input
            type="email"
            placeholder="بريدك الاكتروني*"
            value={email}
            onChange={handleChangeEmail}
            className={error.email ? 'error' : ''}
          />
          <input
            type="text"
            placeholder="رقم الجوال*"
            value={phone}
            onChange={handleChangePhone}
            className={error.phone ? 'error' : ''}
          />
          <input
            type="text"
            placeholder="العنوان*"
            value={address}
            onChange={handleChangeAddress}
            className={error.address ? 'error' : ''}
          />
          <select value={service} onChange={handleChangeService}>
            <option value="">اختر خدمتك</option>
            {
                services  && services.length > 0 && (
                    services.map(ser => (
                        <option value={ser.title}>{ser.title}</option>
                    ))
                )
            }
          </select>
          <textarea
            placeholder="رسالتك"
            value={message}
            onChange={handleChangeMessage}
          ></textarea>
          <button type="submit">
            ارسل الأن
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9999 21L31.4999 4.5M14.9999 21L20.2499 31.5C20.3157 31.6436 20.4213 31.7653 20.5543 31.8506C20.6872 31.936 20.8419 31.9813 20.9999 31.9813C21.1578 31.9813 21.3125 31.936 21.4454 31.8506C21.5784 31.7653 21.6841 31.6436 21.7499 31.5L31.4999 4.5M14.9999 21L4.49986 15.75C4.35625 15.6842 4.23455 15.5785 4.14923 15.4456C4.06391 15.3126 4.01855 15.158 4.01855 15C4.01855 14.842 4.06391 14.6874 4.14923 14.5544C4.23455 14.4215 4.35625 14.3158 4.49986 14.25L31.4999 4.5" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </form>
      <ToastContainer />
    </DefaultLayout>
  );
}

export default Contact;
