import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPlaystation,
  faSnapchat,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBook,
  faCode,
  faCoffee,
  faGlasses,
  faSoccerBall,
} from '@fortawesome/free-solid-svg-icons';

export const translations = {
    // =================================ENGLISH LANGUAGE=================================START
    en: {
      pages: {
        hero: "Home",
        aboutMe: "About Me",
        skills: "My Skills",
        service: "Service",
        projects: "Projects",
        contact: "Contacts"
      },
      NavLinks: [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'about' },
        { title: 'Services', id: 'service' },
        { title: 'Projects', id: 'projects' },
        { title: 'Contact', id: 'contact' },
      ],
  
      hero: {
        myName: 'Mohammed Noor',
        mySpecialty: 'Web Developer',
        myIntro1: 'Welcome to your ideal destination for web design and development!',
        myIntro2: 'I work to transform your ideas into distinctive digital experiences.',
      },
  
      aboutMe: {
        intro: 'Hello, my name is Mohammed Noor, a young man in my twenties, living in Mecca. I speak Arabic (Gulf) and Hausa (native language) and I am learning English. I am interested in developing my programming skills, especially in the Front-end field, and I seek to improve my level in React and Tailwind CSS. I love working on projects related to web development, and I am always looking for ways to develop myself, whether in programming or languages.',
        contactInfo: {
          name: "Name:",
          mySpecialty: "My Specialty:",
          jobType: "Job Type:",
          address: "Address:",
          email: "Email:",
          phone: "Phone:",
          hobbies: "My Hobbies"
        },
        contactValues: {
          name: "Mohammed Noor Mohammed",
          mySpecialty: "Front-End Development",
          jobType: "Freelancer",
          address: "KSA / Makkah",
          email: "alhwsawyner@gmail.com",
          phone: "+966 54 535 4380",
          hobbies: [
            { title: 'football', theIcon: faSoccerBall },
            { title: 'coffee', theIcon: faCoffee },
            { title: 'books', theIcon: faBook },
            { title: 'PS', theIcon: faPlaystation },
            { title: 'coding', theIcon: faCode },
            { title: 'learn', theIcon: faGlasses },
          ],
        },
      },
  
      myService: 'I offer website design and development services.',
      featuresTitle: 'Features',
      Features: [
        {
          id: '1',
          feature: 'Commitment to Satisfaction: I work diligently to ensure the satisfaction of both the client and the success of the project.',
        },
        {
          id: '2',
          feature: 'Competitive Pricing: I offer affordable prices as I’m new to the market, while ensuring high-quality services that reflect my dedication.',
        },
        {
          id: '3',
          feature: "Passion for Your Success: Your project's success is my success, and I’m committed to helping you achieve your goals.",
        },
        {
          id: '4',
          feature: 'Speed with Quality: I complete projects as quickly as possible without compromising on quality.',
        },
        {
          id: '5',
          feature: 'Exceptional Experience: Your satisfaction is my ultimate goal, and I strive to deliver a service that leaves you delighted with the experience.',
        },
      ],
  
      myAccounts: [
        {
          theTitle: 'Facebook',
          theIcon: faFacebook
        },
        {
          theTitle: 'Instagram',
          theIcon: faInstagram
        },
        {
          theTitle: 'Linkedin',
          theIcon: faLinkedin
        },
        {
          theTitle: 'Snapchat',
          theIcon: faSnapchat
        },
      ],
  
      myProjects: [
      {
        projectName: 'no name1',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
  
      {
        projectName: 'no name2',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
  
      {
        projectName: 'no name3',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
  
      {
        projectName: 'no name4',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
  
      {
        projectName: 'no name5',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
  
      {
        projectName: 'no name6',
        projectInfo: 'no Info',
        projectImage: './src/assets/images/web-development.jpg',
      },
    ],
  contact: {
    whatsapp: {
      theName: "Whatsapp",
      theAccount: "+966 54 535 4380"
    },
    email: {
      theName: "Email",
      theAccount: "alhwsawynwr@gmail.com"
    }
  },
  footer: "© 2025 copyright all right reserved"
  
  },
  
  // =================================ARABIC LANGUAGE=================================START
    ar: {

      pages: {
        hero: "الرئيسية",
        aboutMe: "من أنا",
        skills: "مهاراتي",
        service: "الخدمات",
        projects: "المشاريع",
        contact: "اتصل بي"
      },

      NavLinks: [
        { title: 'الرئيسية', id: 'home' },
        { title: 'من أنا', id: 'about' },
        { title: 'الخدمات', id: 'service' },
        { title: 'المشاريع', id: 'projects' },
        { title: 'اتصل بي', id: 'contact' },
      ],
  
  
      hero: {
        myName: 'محمدنور',
        mySpecialty: 'مطور ويب',
        myIntro1: `مرحبًا بك في وجهتك المثالية لتصميم وتطوير المواقع!`,
        myIntro2: ` أعمل على تحويل أفكارك إلى تجارب رقمية مميزة.`,
      },
  
      aboutMe: {
        intro: 'مرحبًا، اسمي محمدنور، شاب في العشرينات من عمري، أعيش في مكة. أتحدث العربية (الخليجية) والهوسا (لغتي الأم) وأتعلم الإنجليزية. أنا مهتم بتطوير مهاراتي البرمجية، خاصة في مجال الواجهة الأمامية، وأسعى لتحسين مستواي في React وTailwind CSS. أحب العمل على مشاريع تتعلق بتطوير الويب، وأبحث دائمًا عن طرق لتطوير نفسي سواء في البرمجة أو اللغات.',
        contactInfo: {
          name: "الاسم :",
          mySpecialty: "التخصص :",
          jobType: "نوع الوظيفة :",
          address: "العنوان :",
          email: "البريد الإلكتروني :",
          phone: "رقم الهاتف :",
          hobbies: "هواياتي :"
        },
        contactValues: {
          name: "محمد نور محمد",
          mySpecialty: "تطوير الواجهات الأمامية",
          jobType: "مستقل",
          address: "السعودية / مكة",
          email: "alhwsawyner@gmail.com",
          phone: "+966545354380",
          hobbies: [
            { title: 'كرة القدم', theIcon: faSoccerBall },
            { title: 'القهوة', theIcon: faCoffee },
            { title: 'الكتب', theIcon: faBook },
            { title: 'بلاي ستيشن', theIcon: faPlaystation },
            { title: 'البرمجة', theIcon: faCode },
            { title: 'التعلم', theIcon: faGlasses },
          ]
        },
      },
  
      myService: 'أقدم خدمات تصميم وتطوير المواقع.',
      featuresTitle: 'مميزات الخدمة',
      Features: [
        {
          id: '1',
          feature: 'الالتزام بالرضا: أعمل بجد لضمان رضا العميل ونجاح المشروع.',
        },
        {
          id: '2',
          feature: 'أسعار تنافسية: أقدم أسعارًا معقولة كوني جديدًا في السوق، مع ضمان خدمات عالية الجودة تعكس التفاني.',
        },
        {
          id: '3',
          feature: "الشغف بنجاحك: نجاح مشروعك هو نجاحي، وأنا ملتزم بمساعدتك في تحقيق أهدافك.",
        },
        {
          id: '4',
          feature: 'السرعة مع الجودة: أكمل المشاريع بأسرع ما يمكن دون المساس بالجودة.',
        },
        {
          id: '5',
          feature: 'تجربة استثنائية: رضاك هو هدفي النهائي، وأسعى لتقديم خدمة تتركك راضيًا عن التجربة.',
        },
      ],
  
  
      myAccounts: [
        {
          theTitle: 'فيسبوك',
          theIcon: faFacebook
        },
        {
          theTitle: 'إنستقرام',
          theIcon: faInstagram
        },
        {
          theTitle: 'لينكدن',
          theIcon: faLinkedin
        },
        {
          theTitle: 'سناب شات',
          theIcon: faSnapchat
        },
      ],
  
  
      myProjects: [
        {
          projectName: 'لايوجد اسم للمشروع1',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
    
        {
          projectName: 'لايوجد اسم للمشروع2',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
    
        {
          projectName: 'لايوجد اسم للمشروع3',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
    
        {
          projectName: 'لايوجد اسم للمشروع4',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
    
        {
          projectName: 'لايوجد اسم للمشروع5',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
    
        {
          projectName: 'لايوجد اسم للمشروع6',
          projectInfo: 'لايوجد تفاصيل',
          projectImage: './src/assets/images/web-development.jpg',
        },
      ],
      contact: {
        whatsapp: {
          theName: "واتساب",
          theAccount: "+966 54 535 4380"
        },
        email: {
          theName: "البريد الإلكتروني",
          theAccount: "alhwsawynwr@gmail.com"
        }
      },
      footer: "جميع الحقوق محفوظة © 2025"
    },
  };