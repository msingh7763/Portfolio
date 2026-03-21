import infineonAwardImage from "../components/img2.jpeg";
import gfgCertificate from "../components/gfg.png";
import cloudCertificate from "../components/cloud.png";
import generativeAiCertificate from "../components/generativeAi.png";
import certificateImg3 from "../components/img3.png";
import certificateImg4 from "../components/img4.png";
import certificateImg5 from "../components/img5.png";
import certificateImg6 from "../components/img6.png";
import certificateImg7 from "../components/img7.png";

/* ================= SKILLS ================= */

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];


/* ================= PROJECTS ================= */

export const projects = [
  {
    id: 1,
    title: "Job Application Portal",
    description:
      "Full-stack MERN Job Application Tracker supporting end-to-end CRUD operations with secure JWT authentication and cloud storage.",
    details: [
      "Engineered a full-stack MERN Job Application Tracker supporting end-to-end CRUD operations (creation, updating, deletion, and filtering by status), enabling streamlined job-search management.",
      "Implemented secure authentication using JWT and bcrypt, reducing unauthorized access risk while maintaining stateless, scalable session management.",
      "Integrated Multer and Cloudinary for resume upload and cloud storage, and built a timeline view per job, improving data visibility and user workflow efficiency.",
    ],
    period: "Oct. 2025 – Jan. 2026",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Multer"],
    github: "https://github.com/msingh7763/Job-portal",
    live: "https://job-portal-pearl-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Waste Management Portal",
    description:
      "Responsive web portal enabling users to request waste collection and recycling services with secure database storage and admin dashboard.",
    details: [
      "Developed a responsive and interactive web portal that enables users to sign up, log in, and request waste collection and recycling services with secure MySQL database storage for user requests.",
      "Added a feedback module with email delivery using PHP mail/PHPMailer, enabling users to submit reviews and feedback that are automatically sent to administrators.",
      "Designed a modern, reusable UI using TailwindCSS and implemented core features like waste category selection, recyclables submission form, feedback form, and admin dashboard.",
    ],
    period: "March 2025 - April 2025",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "PHPMailer"],
    github: "https://github.com/msingh7763/waste_management",
    live: "#",
  },
  {
    id: 3,
    title: "Digitize and Showcase Monasteries of Sikkim",
    description:
      "Scalable full-stack application with AI-driven storytelling pipeline and administrative dashboard for monastery content management.",
    details: [
      "Architected a scalable full-stack application following modular, component-based design principles, enabling maintainable and extensible system architecture.",
      "Integrated an AI-driven storytelling pipeline to dynamically generate contextual narratives from structured data, increasing content personalization and user engagement.",
      "Engineered RESTful APIs and an administrative dashboard for streamlined content management, reducing operational overhead and improving system usability and maintainability.",
    ],
    period: "Nov. 2025 – Dec. 2025",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet Maps", "AI/LLM"],
    github: "https://github.com/msingh7763/sikkim_monasteries",
    live: "#",
  },
];


/* ================= ACHIEVEMENTS ================= */

export const achievements = [
  {
    title: "200+ Problems Solved on LeetCode",
  },
  {
    title: "100 Days Coding Challenge Badge",
  },
  {
    title: "3⭐ Java on HackerRank",
  },
  {
    title: "Runner-up - Infineon Technology Hackathon",
    details: [
      "Built an Agentic AI LLM project: Agentic Bug Hunter",
      "Worked on a 3-level Agentic model during the hackathon",
      "Worked in a 4-member team to design and deliver the solution",
      "Received a Rs. 10,000 gift card prize",
    ],
    github: "https://github.com/msingh7763/Agentic-bug-hunter",
    image: infineonAwardImage,
    imageAlt: "Award receiving moment at Infineon Technology Hackathon",
  },
];


/* ================= EDUCATION ================= */

export const education = [
  {
    period: "Aug 2023 – Present",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    institution: "Lovely Professional University, Jalandhar, Punjab",
    grade: "CGPA: 8.35",
  },
  {
    period: "Apr 2021 – Mar 2022",
    degree: "Intermediate (Class XII)",
    institution: "S. Sinha College, Aurangabad, Bihar",
    grade: "78.8%",
  },
  {
    period: "Apr 2019 – Mar 2020",
    degree: "Matriculation (Class X)",
    institution: "Lord Buddha Public School, Aurangabad, Bihar",
    grade: "84%",
  },
];


/* ================= CERTIFICATIONS ================= */

export const certifications = [
  {
    title: "React – GeeksforGeeks",
    issuer: "GeeksforGeeks",
    image: gfgCertificate,
    points: [
      "Developed modern UI components using hooks and context",
      "Completed 8 hands-on projects (SPA, dashboard)",
      "Scored 95% in final assessment",
    ],
  },
  {
    title: "Cloud Computing – NPTEL",
    issuer: "NPTEL",
    image: cloudCertificate,
    points: [
      "Learned AWS fundamentals (EC2, S3)",
      "Implemented serverless functions and storage",
      "Achieved high score in final exam",
    ],
  },
  {
    title: "Generative AI – Microsoft & LinkedIn",
    issuer: "Microsoft & LinkedIn",
    image: generativeAiCertificate,
    points: [
      "Explored generative AI models and prompt engineering techniques",
      "Built applications using OpenAI APIs and LLMs",
      "Learned AI ethics, responsible AI practices, and deployment strategies",
    ],
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "University of Colorado via Coursera",
    image: certificateImg3,
    points: [
      "Focused on advanced TCP/IP networking concepts and deeper protocol-level understanding.",
    ],
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google via Coursera",
    image: certificateImg4,
    points: [
      "Built foundational knowledge of network models, addressing, routing, and internet communication basics.",
    ],
  },
  {
    title: "Computer Communications (Specialization)",
    issuer: "University of Colorado via Coursera",
    image: certificateImg5,
    points: [
      "Completed a multi-course specialization covering core networking principles and modern communication systems.",
    ],
  },
  {
    title: "Packet Switching Networks and Algorithms",
    issuer: "University of Colorado via Coursera",
    image: certificateImg6,
    points: [
      "Learned packet-switching design, forwarding behavior, and algorithmic techniques used in network infrastructures.",
    ],
  },
  {
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "University of Colorado via Coursera",
    image: certificateImg7,
    points: [
      "Studied LAN architectures and peer-to-peer communication protocols for distributed networking environments.",
    ],
  },
];