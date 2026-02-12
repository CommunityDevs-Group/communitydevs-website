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
      about: { title: "About Us", who: "Who we are", p1: "Community Devs is a space where developers learn and grow together.", p2: "We are a community for developers. Together we learn, share and grow.", p3: "Open. Friendly. Community-driven." },
      team: { 
        title: "Our Team", 
        subtitle: "Meet the people behind Community Devs",
        roles: {
          tech_lead: "Technical Lead",
          frontend: "Front-end Developer",
          design_lead: "Design Team Lead",
          uiux: "UI/UX Designer",
          graphic: "Graphic Designer",
          motion: "Motion Designer"
        },
        descriptions: {
          fironi: "Leading the team by designing and building reliable, scalable and high-quality software systems.",
          nihat: "Enjoys turning complex problems into simple and elegant solutions.",
          ugur: "Experienced in building reliable and high-performance backend systems.",
          nasraddin: "Focused on building interactive and user-friendly web interfaces.",
          adil: "Passionate about modern frontend technologies and clean UI design.",
          caner: "Leading the design team with a strong focus on UX and product vision.",
          firuze: "Passionate about creating intuitive and beautiful user experiences.",
          said: "Creative designer focused on branding and visual storytelling.",
          emin: "Specialized in motion graphics and dynamic visual experiences."
        }
      },
      footer: { 
        rights: "© 2026 CommunityDevs Group. All rights reserved", 
        terms: "Terms", 
        privacy: "Privacy", 
        contactUs: "Contact Us", 
        pages: "Pages", 
        contact: "Contact", 
        form: { name: "First Name", email: "Email", message: "Message", send: "Send" } 
      },
      cookies: {
        title: "We Love Cookies!",
        description: "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
        accept: "Accept All",
        decline: "Close"
      }
    }
  },
  az: {
    translation: {
      nav: { home: "Ana Səhifə", about: "Haqqımızda", events: "Tədbirlər", team: "Komandamız", join: "Bizə qoşul" },
      hero: { 
        subtitle: "Developerlər üçün icma", 
        title: "Birlikdə öyrənirik, birlikdə böyüyürük!", 
        description: "Öyrənin, paylaşın və birlikdə inkişaf edin.", 
        button: "İcmaya qoşul" 
      },
      about: { title: "Haqqımızda", who: "Biz kimik", p1: "Community Devs tərtibatçıların birlikdə öyrəndiyi məkandır.", p2: "Biz tərtibatçılar üçün bir icmayıq. Birlikdə öyrənirik.", p3: "Açıq. Səmimi. İcma yönümlü." },
      team: { 
        title: "Komandamız", 
        subtitle: "Community Devs komandası ilə tanış olun",
        roles: {
          tech_lead: "Texniki Rəhbər",
          frontend: "Front-end Developer",
          design_lead: "Dizayn Komanda Rəhbəri",
          uiux: "UI/UX Dizayner",
          graphic: "Qrafik Dizayner",
          motion: "Motion Dizayner"
        },
        descriptions: {
          fironi: "Etibarlı, miqyaslana bilən və yüksək keyfiyyətli proqram sistemlərini layihələndirərək komandaya rəhbərlik edir.",
          nihat: "Mürəkkəb problemləri sadə və zərif həllərə çevirməkdən zövq alır.",
          ugur: "Müasir frontend texnologiyaları backend sistemlərinin qurulmasında təcrübəlidir.",
          nasraddin: "İnteraktiv və istifadəçi dostu veb interfeyslərin qurulmasına diqqət yetirir.",
          adil: "Müasir frontend texnologiyaları ilə təmiz UI dizaynına həvəslidir.",
          caner: "UX və məhsul vizyonuna güclü diqqət yetirərək dizayn komandasına rəhbərlik edir.",
          firuze: "İntuitiv və gözəl istifadəçi təcrübələri yaratmağa həvəslidir.",
          said: "Brendinq və vizual hekayəyə fokuslanmış yaradıcı dizayner.",
          emin: "Hərəkətli qrafika ve dinamik vizual təcrübələr üzrə ixtisaslaşıb."
        }
      },
      footer: { 
        rights: "© 2026 CommunityDevs Group. Müəllif hüquqları qorunur", 
        terms: "Şərtlər", 
        privacy: "Məxfilik", 
        contactUs: "Bizə Yazın", 
        pages: "Səhifələr", 
        contact: "Əlaqə", 
        form: { name: "Adınız", email: "Email", message: "Mesaj", send: "Göndər" } 
      },
      cookies: {
        title: "Kukiləri Sevirik!",
        description: "Təcrübənizi təkmilləşdirmək üçün kukilərdən istifadə edirik. Sayta davam edərək kukilərin istifadəsini qəbul edirsiniz.",
        accept: "Hamısını Qəbul Et",
        decline: "Bağla"
      }
    }
  },
  ru: {
    translation: {
      nav: { home: "Главная", about: "О нас", events: "События", team: "Наша команда", join: "Вступить" },
      hero: { subtitle: "Сообщество для разработчиков", title: "Разработчики растут здесь вместе", description: "Учитесь, делитесь и создавайте вместе.", button: "Присоединиться" },
      about: { title: "О нас", who: "Кто мы", p1: "Community Devs — это пространство для разработчиков.", p2: "Мы сообщество, где мы учимся и растем вместе.", p3: "Открыто. Дружелюбно. Сообщество." },
      team: { 
        title: "Наша команда", 
        subtitle: "Познакомьтесь с нашей командой",
        roles: {
          tech_lead: "Технический директор",
          frontend: "Front-end разработчик",
          design_lead: "Руководитель группы дизайна",
          uiux: "UI/UX дизайнер",
          graphic: "Графический дизайнер",
          motion: "Моушн-дизайнер"
        },
        descriptions: {
          fironi: "Руководит командой, проектируя и создавая надежные и масштабируемые программные системы.",
          nihat: "Любит превращать сложные проблемы в простые и элегантные решения.",
          ugur: "Опыт создания надежных и высокопроизводительных серверных систем.",
          nasraddin: "Специализируется на создании интерактивных веб-интерфейсов.",
          adil: "Увлекается современными технологиями фронтенда и чистым UI-дизайном.",
          caner: "Руководит командой дизайнеров, уделяя особое внимание UX и видению продукта.",
          firuze: "Увлекается созданием интуитивно понятных и красивых пользовательских интерфейсов.",
          said: "Творческий дизайнер, специализирующийся на брендинге.",
          emin: "Специализируется на моушн-графике и динамических визуальных эффектах."
        }
      },
      footer: { 
        rights: "© 2026 CommunityDevs Group. Все права защищены", 
        terms: "Условия", 
        privacy: "Политика", 
        contactUs: "Связаться с нами", 
        pages: "Страницы", 
        contact: "Контакты", 
        form: { name: "Имя", email: "Email", message: "Сообщение", send: "Отправить" } 
      },
      cookies: {
        title: "Мы любим файлы cookie!",
        description: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая посещать этот сайт, вы соглашаетесь на использование файлов cookie.",
        accept: "Принять все",
        decline: "Закрыть"
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