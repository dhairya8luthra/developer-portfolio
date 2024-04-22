import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Credit Card Fraud Detection",
    description:
      "This project involved utilizing outlier detection and classification algorithms for credit card fraud detection. Developed as part of the CS451 Data Mining course at BITS Pilani.",
    tools: ["Data Preprocessing", "Principal Component Analysis"],
    role: "Data Scientist",
    code: "GitHub - dhairya8luthra/CSF451_Data_Mining_Project_notebooks",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Learning Management System",
    description:
      "Developed a learning management system using Next.js, Prisma, Mux, and Razorpay integration.",
    tools: ["React.js", "Next.js"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },
  {
    id: 3,
    name: "BITSBids",
    description:
      "Created a bidding platform for BITS Pilani students using React.js and Spring Boot. This was a second-year OOPS project.",
    tools: ["Java", "Spring Boot", "MySQL", "Amazon S3", "React.js"],
    role: "Full Stack Developer",
    code: "GitHub - dhairya8luthra/BitsBidsbackendv2",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Red Letter App",
    description:
      "Developed a gifting web app during Unfold 2023 Hackathon using Solidity and WAGMI.js.",
    tools: ["Solidity", "WAGMI.js"],
    role: "Full Stack Developer",
    code: "GitHub - dhairya8luthra/red-envelope-nextjs-main",
    demo: "",
    image: ayla,
  },
  {
    id: 5,
    name: "AI Chatbot",
    description:
      "Built a chatbot app using Flutter and OpenAI API for response and image generation.",
    tools: ["Flutter", "OpenAI API"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 6,
    name: "Computational Model for Predicting Metastatic Breast Cancer",
    description:
      "Working on enhancing the performance of current models through deep learning, hyperparameter tuning, and meta-heuristic techniques. Associated with Birla Institute of Technology and Science, Pilani.",
    tools: [
      "Deep Learning",
      "Hyperparameter Tuning",
      "Meta-heuristic Techniques",
    ],
    role: "Data Scientist",
    code: "",
    demo: "",
    image: crefin,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
