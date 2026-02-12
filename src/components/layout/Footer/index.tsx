import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { X, Send, Instagram, Linkedin } from "lucide-react"; 
import logoImg from "../../../assets/images/Logo.png";

const StyledModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);

  .login-box {
    position: relative;
    width: 400px;
    padding: 40px;
    background: linear-gradient(135deg, #6868f4 0%, #4a3aff 100%);
    box-shadow: 0 20px 50px rgba(74, 58, 255, 0.4);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    &:hover { opacity: 1; transform: rotate(90deg); }
  }

  .login-box p:first-of-type {
    margin: 0 0 30px;
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .login-box .user-box { position: relative; }

  .login-box .user-box input {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    outline: none;
    background: transparent;
    transition: 0.3s;
    &:focus { border-bottom-color: #fff; }
  }

  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    pointer-events: none;
    transition: .5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -25px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }

  .login-box form a {
    position: relative;
    display: block;
    text-align: center;
    padding: 12px 20px;
    color: #4a3aff;
    background: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 20px;
    letter-spacing: 3px;
    font-weight: 800;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .login-box a:hover {
    background: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  .login-box a span { position: absolute; display: block; }
  .login-box a span:nth-child(1) { top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #fff); animation: btn-anim1 2s linear infinite; }
  @keyframes btn-anim1 { 0% { left: -100%; } 50%,100% { left: 100%; } }
  .login-box a span:nth-child(2) { top: -100%; right: 0; width: 2px; height: 100%; background: linear-gradient(180deg, transparent, #fff); animation: btn-anim2 2s linear infinite; animation-delay: .5s }
  @keyframes btn-anim2 { 0% { top: -100%; } 50%,100% { top: 100%; } }
  .login-box a span:nth-child(3) { bottom: 0; right: -100%; width: 100%; height: 2px; background: linear-gradient(270deg, transparent, #fff); animation: btn-anim3 2s linear infinite; animation-delay: 1s }
  @keyframes btn-anim3 { 0% { right: -100%; } 50%,100% { right: 100%; } }
  .login-box a span:nth-child(4) { bottom: -100%; left: 0; width: 2px; height: 100%; background: linear-gradient(360deg, transparent, #fff); animation: btn-anim4 2s linear infinite; animation-delay: 1.5s }
  @keyframes btn-anim4 { 0% { bottom: -100%; } 50%,100% { bottom: 100%; } }
`;

const Footer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#6868f4] to-[#4a3aff] text-white py-6 mt-10 px-6 md:px-[60px] lg:px-[84px] font-Inter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <img src={logoImg} alt="Logo" className="w-8 h-auto" />
          <p className="text-[10px] opacity-70 tracking-tight text-center md:text-left">
  © 2026 CommunityDevs Group. All rights reserved. | {t('footer.terms')} • {t('footer.privacy')}
</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-[11px] font-medium uppercase tracking-widest opacity-90">
          <li onClick={() => handleScroll('home')} className="cursor-pointer hover:text-indigo-200 transition-all">{t('nav.home')}</li>
          <li onClick={() => handleScroll('about')} className="cursor-pointer hover:text-indigo-200 transition-all">{t('nav.about')}</li>
          <li onClick={() => handleScroll('team')} className="cursor-pointer hover:text-indigo-200 transition-all">{t('nav.team')}</li>
          <li onClick={() => handleScroll('events')} className="cursor-pointer hover:text-indigo-200 transition-all">{t('nav.events')}</li>
        </ul>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-5">
            <a href="https://t.me/+3VP4bRzeRwU2ODhi" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Send size={18} /></a>
            <a href="https://www.instagram.com/communitydevs.group" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/company/communitydevs-group/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Linkedin size={18} /></a>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#4a3aff] px-5 py-1.5 rounded-full text-[11px] font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t('footer.contactUs')}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <StyledModalWrapper>
          <div className="login-box">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <p>{t('footer.contactUs')}</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="user-box">
                <input required type="text" />
                <label>{t('footer.form.name')}</label>
              </div>
              <div className="user-box">
                <input required type="email" />
                <label>{t('footer.form.email')}</label>
              </div>
              <div className="user-box">
                <input required type="text" />
                <label>{t('footer.form.message')}</label>
              </div>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <span /><span /><span /><span />
                {t('footer.form.send')}
              </a>
            </form>
          </div>
        </StyledModalWrapper>
      )}
    </footer>
  );
};

export default Footer;