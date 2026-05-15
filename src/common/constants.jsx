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
            "Leading development of scalable React applications and Node.js backends. Contributing to architecture decisions and mentoring junior developers to improve code quality and delivery speed.",
    },
    {
        title: "Software Engineer",
        company: "Netwin Infosolutions",
        period: "Aug 2023 - Dec 2025",
        description:
            "Developed and maintained scalable web applications using React, Express, and MongoDB for multiple clients, focusing on performance, usability, and clean architecture.",
    },
    {
        title: "Intern",
        company: "Netwin Infosolutions",
        period: "Feb 2023 - Jul 2023",
        description:
            "Built responsive web interfaces and gained hands-on experience with modern frontend and backend technologies, establishing a strong foundation in full-stack development.",
    },
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
        category: 'Frontend',
        skills: ['React JS', 'React Native', 'Flutter'],
    },
    {
        category: 'Backend',
        skills: ['Node.js'],
    },
    {
        category: 'Tools',
        skills: ['Git', 'Visual Studio Code', 'Android Studio', 'XCode'],
    },
];

export const Strings = {
    HOME_SCREEN_DESC: "A passionate developer building mobile and web apps using React Native, Flutter, Node.js, and AI technologies.\nExperienced in handling complete projects from scratch to deployment with clean and efficient code.\nFocused on creating smart, user-friendly, and scalable digital solutions.",
    ABOUT_SCREEN_DESC1: "A passionate developer focused on building modern mobile, web, and AI-driven applications using React Native, Flutter, Node.js, and emerging technologies.I specialize in taking ideas from concept to complete execution, handling everything from architecture and development to deployment and optimization.",
    ABOUT_SCREEN_DESC2: "With a strong interest in AI integration and scalable system design, I aim to create intelligent, high-performance, and user-friendly digital products that solve real-world problems.",
    FOOTER_JOB_DESC: "Crafting modern, high-performance user experiences using cutting-edge technologies."
};

export const EMAIL_SEVICE_ID = "service_7h691hp";
export const EMAIL_TEMPLATE_ID = "template_f6745a9";
export const EMAIL_PUBLIC_KEY = "5QQWzIOPy1c8-vT-6";