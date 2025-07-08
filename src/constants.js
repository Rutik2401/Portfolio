import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import iwexeLogo from './assets/company_logo/iwexeLogo.png';
// Education Section Logo's
import mesLogo from './assets/education_logo/mesLogo.png';
import sscLogo from './assets/education_logo/sscLogo.png';
import hscLogo from './assets/education_logo/hscLogo.png';

// Project Section Logo's
import cinemaExplorerLogo from './assets/work_logo/cinemaExplorerLogo.png';
import movieSystemLogo from './assets/work_logo/movieSystemLogo.png';
import aiCoachLogo from './assets/work_logo/aiCoachLogo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: iwexeLogo,
    role: "Software Developer",
    company: "IWEXE",
    date: "June 2024 – July 2025",
    desc: "Developed a Psychometric Test Application using Angular 19 and Spring Boot. Handled both frontend and backend tasks including custom question generation, role-based login, responsive UI, and automated email notifications. Collaborated in an agile environment to enhance application performance and user experience.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Angular 19",
      "Java",
      "Spring Boot",
      "Bootstrap",
      "Postman",
      "Docker",
      "GIT",
      "Git Hub",
      "REST API",
      "SQL",
    ],
  }
];

export const education = [
  {
    id: 0,
    img: mesLogo,
    school: "Modern Education Society College of Engineering, Pune",
    date: "Jul 2019 - May 2023",
    grade: "8.23 (CGPA)",
    desc: "I completed my Bachelor's degree (B.E.) in Computer Engineering from MESCOE, Pune. During this time, I developed a strong foundation in programming, data structures, and full stack development. I also worked on major academic projects including a Movie Recommendation System using Spring MVC .",
    degree: "Bachelor of Engineering - B.E. (Computer Engineering)",
  },
  {
    id: 1,
    img: hscLogo,
    school: "Shri Chhatrapati Shivaji Mahavidyalaya, Shrigonda",
    date: "Jun 2018 - Apr 2019",
    grade: "60%",
    desc: "I completed my Higher Secondary (HSC) education in the Science stream with a focus on core subjects like Physics, Biology, Chemistry, and Mathematics. This laid the academic foundation for my technical and engineering education.",
    degree: "HSC (Science) - Maharashtra State Board",
  },
  {
    id: 2,
    img: sscLogo,
    school: "Shri Aranyeshwar Vidyalaya, Arangoan",
    date: "Jun 2016 - Apr 2017",
    grade: "85%",
    desc: "I completed my Secondary School (SSC) education with a Semi-English medium background. My interest in computers and problem-solving began here, leading me toward a career in software engineering.",
    degree: "SSC - Semi-English Medium (Maharashtra Board)",
  }
];
export const projects = [
  {
    id: 0,
    title: "AI Interview Coach",
    description:
      "An AI-powered interview practice tool built with Angular and Google Gemini API. Users can simulate real interview sessions by speaking into their mic — the app converts voice to text using `SpeechRecognition` and sends it to Gemini for a smart AI-driven response. Ideal for freshers and experienced professionals preparing for technical interviews.",
    image: aiCoachLogo,
    tags: ["Angular", "Google Gemini API", "SpeechRecognition", "HTML5", "CSS3","JavaScript", "TypeScript"],
    github: "https://github.com/Rutik2401/ai-interview-coach", 
    webapp: "https://ai-interview-coach-zeta.vercel.app/",
  },
  {
    id: 1,
    title: "Movie Recommendation System",
    description:
      "A Java + Spring MVC based movie recommendation platform that suggests movies based on user ratings and preferences. Features include personalized suggestions, secure login/logout, MVC architecture for better flow, and a responsive UI that ensures accessibility across devices.",
    image: movieSystemLogo,
    tags: ["HTML5", "CSS3", "JavaScript", "Java", "Spring MVC", "Bootstrap", "JDBC"],
    github: "https://github.com/Rutik2401/Movie-Recommendation-System-Web",
    webapp: "https://primetechies.in",
  },
  {
    id: 2,
    title: "Cinema Explorer",
    description:
      "A responsive React-based web app that lets users explore popular, top-rated, and upcoming movies using data from the TMDB API. Features include real-time search, navigation using React Router, and optimized load times using React Hooks and Axios.",
    image: cinemaExplorerLogo,
    tags: ["React JS", "Axios", "React Hooks", "HTML5", "CSS3", "Bootstrap 5.2", "JavaScript"],
    github: "https://github.com/Rutik2401/Nimap-Task",
    webapp: "https://moviebyprime.netlify.app/",
  },

];
