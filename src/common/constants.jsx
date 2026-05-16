import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const CONSTANTS = {
    NAME: "Krunal Karanjekar",
    EMAIL_ADDRESS: "krunalsk2000@gmail.com",
    PHONE_NUMBER: "+91 7385160068",
    GITHUB_LINK: "https://github.com/krunalsk-21",
    LINKEDIN_LINK: "https://www.linkedin.com/in/krunal-karanjekar-b03081170",
    INSTAGRAM_LINK: "https://www.instagram.com/krunal_21__",
};

export const EXPERIENCE = [
    {
        title: "Software Engineer",
        company: "23Ventures",
        period: "Jan 2026 - Present",
        description:
            "Working on a React-based healthcare web application for managing patient treatment workflows. Developed dynamic questionnaires to capture patient data efficiently and improve assessment flow. Built customizable prescription templates to streamline doctor prescriptions and reduce manual effort. Contributing to integration of the web view inside a React Native application for seamless cross-platform access. Focused on improving usability, scalability, and performance of the overall system.",
    },
    {
        title: "Software Engineer",
        company: "Netwin Infosolutions",
        period: "Aug 2023 - Dec 2025",
        description:
            "Developed and deployed multiple cross-platform mobile applications using React Native and Flutter. Built scalable features including authentication flows, payment integration, push notifications, and real-time data handling. Worked with REST APIs, Firebase, and SQLite for efficient backend and offline-first solutions. Delivered production-ready apps published on Play Store and App Store. Collaborated with cross-functional teams to design user-friendly interfaces and high-performance systems. Continuously improved app stability, features, and user experience through updates and enhancements.",
    },
    {
        title: "Intern",
        company: "Netwin Infosolutions",
        period: "Feb 2023 - Jul 2023",
        description:
            "Contributed to web applications using modern frontend technologies and MySQL integration. Collaborated with cross-functional teams to deliver features and improve system performance while maintaining clear technical documentation.",
    }
];

export const EDUCATION = [
    {
        degree: "MCA  - Master's of Computer Applications",
        institution: "K.K Wagh Institute of Engineering Education and Research, Nashik",
        period: "2023",
    },
    {
        degree: "BCA - Bachelor's of Computer Applications",
        institution: "MES Abasaheb Garware College, Pune",
        period: "2021",
    },
    {
        degree: "HSC",
        institution: "Maharashtra State Board",
        period: "2018",
    },
    {
        degree: "SSC",
        institution: "Maharashtra State Board",
        period: "2016",
    },
];

export const SOCIALS = [
    { name: 'GitHub', icon: <FaGithub />, key: 'GITHUB_LINK' },
    { name: 'LinkedIn', icon: <FaLinkedin />, key: 'LINKEDIN_LINK' },
    { name: 'Instagram', icon: <FaInstagram />, key: 'INSTAGRAM_LINK' },
];

export const SKILLS = [
    {
        category: 'Mobile Development',
        skills: [
            'React Native',
            'Flutter',
            'REST API Integration',
            'Push Notifications',
            'App Deployment (Play Store/App Store)',
        ],
    },
    {
        category: 'Web Development',
        skills: [
            'React JS',
            'JavaScript',
            'HTML5',
            'CSS3'
        ],
    },
    // {
    //     category: 'Backend',
    //     skills: [
    //         'Node.js',
    //         'Express.js'
    //     ],
    // },
    // {
    //     category: 'API & Architecture',
    //     skills: [
    //         'REST API Development',
    //         'MVC Architecture',
    //         'Microservices Basics',
    //         'JWT Authentication'
    //     ],
    // },
    {
        category: 'Development tools',
        skills: [
            'Git',
            'Visual Studio Code',
            'Android Studio',
            'Xcode'
        ],
    },
    {
        category: 'AI Integration',
        skills: [
            'OpenAI (GPT)',
            'Claude AI',
            'Gemini AI',
        ],
    }
];

export const Strings = {
    HOME_SCREEN_DESC: "A passionate developer building mobile and web apps using React Native, React JS, Flutter, Node.js, and AI technologies.\nExperienced in handling complete projects from scratch to deployment with clean and efficient code.\nFocused on creating smart, user-friendly, and scalable digital solutions.",
    ABOUT_SCREEN_DESC1: "A passionate developer focused on building modern mobile, web, and AI-driven applications using React Native, React JS, Flutter, Node.js, and emerging technologies.I specialize in taking ideas from concept to complete execution, handling everything from architecture and development to deployment and optimization.",
    ABOUT_SCREEN_DESC2: "With a strong interest in AI integration and scalable system design, I aim to create intelligent, high-performance, and user-friendly digital products that solve real-world problems.",
    FOOTER_JOB_DESC: "Crafting modern, high-performance user experiences using cutting-edge technologies."
};

export const EMAIL_SEVICE_ID = "service_7h691hp";
export const EMAIL_TEMPLATE_ID = "template_f6745a9";
export const EMAIL_PUBLIC_KEY = "5QQWzIOPy1c8-vT-6";