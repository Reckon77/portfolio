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
        link: "https://pythonbootcamp.com",
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