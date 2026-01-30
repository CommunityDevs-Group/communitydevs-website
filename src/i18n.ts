import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", about: "About Us", events: "Events", team: "Our Team", join: "Join Us" },
      hero: {
        subtitle: "Community for developers",
        title: "Developers grow together here",
        description: "Learn, share and build with people like you.",
        button: "Join the Community"
      },
      about: {
        title: "About Us",
        who: "Who we are",
        p1: "Community Devs is a space where developers learn and grow together.",
        p2: "We are a community for developers. Together we learn, share and grow. No one is alone here.",
        p3: "Open. Friendly. Community-driven."
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the people behind Community Devs"
      },
      footer: {
        rights: "© 2025 Biccas Inc. Copyright and rights reserved",
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
        pages: "Pages",
        contact: "Contact",
        contactUs: "Contact Us",
        form: { name: "First Name", email: "Email", message: "Message", send: "Send" }
      }
    }
  },
  az: {
    translation: {
      nav: { home: "Ana Səhifə", about: "Haqqımızda", events: "Tədbirlər", team: "Komandamız", join: "Bizə qoşul" },
      hero: {
        subtitle: "Tərtibatçılar üçün icma",
        title: "Tərtibatçılar burada birlikdə böyüyür",
        description: "Sizin kimi insanlarla öyrənin, paylaşın və qurun.",
        button: "İcmaya qoşul"
      },
      about: {
        title: "Haqqımızda",
        who: "Biz kimik",
        p1: "Community Devs tərtibatçıların birlikdə öyrəndiyi və böyüdüyü bir məkandır.",
        p2: "Biz tərtibatçılar üçün bir icmayıq. Birlikdə öyrənirik, paylaşırıq və böyüyürük. Burada kimsə tək deyil.",
        p3: "Açıq. Səmimi. İcma yönümlü."
      },
      team: {
        title: "Komandamız",
        subtitle: "Community Devs-in arxasındakı insanlarla tanış olun"
      },
      footer: {
        rights: "© 2025 Biccas Inc. Müəllif hüquqları qorunur",
        terms: "Şərtlər və Qaydalar",
        privacy: "Məxfilik Siyasəti",
        pages: "Səhifələr",
        contact: "Əlaqə",
        contactUs: "Bizə Yazın",
        form: { name: "Adınız", email: "Email", message: "Mesaj", send: "Göndər" }
      }
    }
  },
  ru: {
    translation: {
      nav: { home: "Главная", about: "О нас", events: "События", team: "Наша команда", join: "Вступить" },
      hero: {
        subtitle: "Сообщество для разработчиков",
        title: "Разработчики растут здесь вместе",
        description: "Учитесь, делитесь и создавайте вместе с такими же, как вы.",
        button: "Присоединиться к сообществу"
      },
      about: {
        title: "О нас",
        who: "Кто мы",
        p1: "Community Devs — это пространство, где разработчики учатся и растут вместе.",
        p2: "Мы — сообщество разработчиков. Вместе мы учимся, делимся и растем. Здесь никто не одинок.",
        p3: "Открыто. Дружелюбно. Движимо сообществом."
      },
      team: {
        title: "Наша команда",
        subtitle: "Познакомьтесь с людьми, стоящими за Community Devs"
      },
      footer: {
        rights: "© 2025 Biccas Inc. Все права защищены",
        terms: "Условия использования",
        privacy: "Политика конфиденциальности",
        pages: "Страницы",
        contact: "Контакты",
        contactUs: "Связаться с нами",
        form: { name: "Имя", email: "Email", message: "Сообщение", send: "Отправить" }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;