import React from 'react'
import {FaGithub,FaLinkedinIn,FaDownload} from 'react-icons/fa';
import Me from '../Assets/me.png'
import Resume from "../Assets/CV_RECKON_MAZUMDAR.docx (4).pdf"
const About = () => {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reckon.
            <br className="hidden lg:inline-block" />I love to build apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am currently a computer science undergraduate student who is currently preparing for jobs in SDE roles. My interests include frontend, backend, and AI/ML.
          </p>
          <div className="flex justify-around flex-col w-9/12 md:flex-row items-center">
            <div className="flex justify-evenly w-full md:w-2/5 my-5 md:my-0">
            <a
              href="https://github.com/Reckon77"
            >
              <FaGithub className="text-5xl"/>
            </a>
            <a
              href="https://www.linkedin.com/in/reckon-mazumdar-49b8a7193/"
              >
              <FaLinkedinIn className="text-5xl"/>
            </a>
            </div>
           
            <a href={Resume} class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" download>
             My resume<FaDownload className="inline-flex ml-2"/>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Me}
          />
        </div>
      </div>
    </section>
    )
}

export default About
