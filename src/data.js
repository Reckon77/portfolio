import Taskman from './Assets/projects/task-man.jpg'
import NoNokol from './Assets/projects/nonokol.jpg'
import NLP from './Assets/projects/AssameseClassifier.jpg'
import Notes from "./Assets/projects/notes.png"
import Weather from "./Assets/projects/WeatherEngine.jpg"
import ImageProcessor from "./Assets/projects/ImageProcessor.jpg"
export const projects = [
    {
      title: "No Nokol",
      subtitle: "Flask, Beautiful Soup, NLTK,etc.",
      description:
        "A web application to check if a document contents are plagiarised with multiple options availaible based upon the requirements.",
      image: NoNokol,
      link: "https://no-nokol.herokuapp.com/",
    },
    {
        title: "Assamese song reviews classifier",
        subtitle: "Python, NLP, Scikit learn, Streamlit",
        description:
          "A Text Sentiment Analysis App for Assamese Langauge. The dataset used to train the model is manually collected from Youtube comments.",
        image: NLP,
        link: "https://assamese-sentiment-analyzer.herokuapp.com/",
      },
    {
      title: "Task man",
      subtitle: "NodeJS, MongoDB",
      description:"Task man is a REST api to keep track of your day to day task.One can login and create, update, delete task and also set profile picture.",
      image: Taskman,
      link: "https://recks-task-man.herokuapp.com/",
    },
    
    {
      title: "Project Notes",
      subtitle: "NodeJS, NPM",
      description:
        "Project notes is a command-line interface npm package that lets you maintain quick notes about your project right from your terminal.",
      image: Notes,
      link: "https://www.npmjs.com/package/project-notes",
    },
    {
        title: "Weather Engine",
        subtitle: "HTML, CSS, JS, NodeJS",
        description:
          "A simple web application to get the current weather data of a location. It also auto detects your location using gelocation API and shows the weather data.",
        image: Weather,
        link: "https://recks-weather-engine.herokuapp.com/",
      },
      {
        title: "Image Processor",
        subtitle: "NodeJS, Clarifai API, Pixabay API",
        description:
          "The application takes image/image URL as an input and returns you the labels detected in your image along with related (similar) images.",
        image: ImageProcessor,
        link: "https://recks-image-processor.herokuapp.com/",
      }
  ];

  export const skills=['C','C++','Python','React','NodeJS','HTML','CSS','Flask','ML','DSA','OOPS','MongoDB','MySQL','Git & Github']

  export const achievements=[
    {
      organization:"IIT Indore",
      role:"Summer Intern",
      description:"Made an ML/NLP project on sentimental analysis of Assamese language song reviews.",
      tenure:"Jun 2021 - Aug 2021",
      isAchievement:false

    },{
      organization:"JEC Hackathon",
      role:"2nd runner up",
      description:"Developed an application to detect plagiarism in assignments, homework, research papers, and other academic documents which helped us to win the 3rd position among the different engineering colleges of North East India.",
      tenure:"Oct 2021",
      isAchievement:true
    },
    {
      organization:"GDSC-AEC",
      tenure:"Sep 2021 - Present",
      role:"Web Development Lead",
      description:"GDSCs are a part of Google's initiative to strengthen the coding, development, and research culture of universities and engineering colleges. I am currently a core member of the GDSC of our campus. As a part of GDSC, I have taken various sessions to teach my juniors new technologies related to web, open source, etc.",
      isAchievement:false
    },{
      organization:"CodeChef",
      role:"3 star coder",
      description:"Participated in different contests in CodeChef which is one of the most popular competitive coding site and was successful to secure the highest rating of 1626. ",
      isAchievement:true
    },{
      organization:"AEC coding club",
      role:"Technical Head",
      description:"AEC coding club is one of the technical clubs of our college related to programming. As a technical head of this club I have carried out different sessions on different technologies like web, ML, etc., organized hackathons, supervised and contributed to different projects, along with my team.",
      isAchievement:false,
      tenure:"Jul 2021 - Present"
    },{
      organization:"GFG",
      role:"#3 institute rank",
      description:"Solved hundreds of problems related to DSA on GeeksForGeeks and secured a #3 institute rank with an overall coding score of 568.",
      isAchievement:true,
      
    }
  ]