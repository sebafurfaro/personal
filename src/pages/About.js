import React from "react";
import data from '../data/work.json';

const About = () => {

  const about = data.about[0];

  return(
    <section className="min-h-screen md:p-20 px-4 py-20 relative">
      <div className="container-fluid mx-auto px-5">
        <h1 className="font-monumentRegular text-center text-light-color mb:text-7xl text-5xl mb-20">{about.title}</h1>
        <div className="border-solid border-slate-600 bg-slate-400/5 p-6 shadow-md mx-auto  w-full md:max-w-4xl flex flex-col items-center text-light-color">
          <div className="flex items-center max-lg:flex-col">
            <div className="lg:w-1/3">
              <div className="rounded-full overflow-hidden w-[250px] h-[250px] max-sm:mb-3">
                <img src={`${about.image}`} alt='furfa' />
              </div>
            </div>
            <div className="px-3 lg:w-2/3">
              <h3 className="md:text-3xl text-2xl mb-3">{about.summary}</h3>
              <h4 className="text-1xl">{about.experience}</h4>
            </div>
          </div>
          <div className="flex w-full">
            <div className="lg:w-1/3"></div>
            <div className="px-3 lg:w-2/3 mt-3">
              <>
                <h3 className="text-2xl uppercase mb-3">Educación</h3>
                <div className="grid grid-cols-4 gap-x-2 items-center">
                  {about.education.map((ed, index) => (
                    <img src={ed.school} alt={ed.title} key={index} className="w-[100px] grayscale" />
                  ))}
                </div>   
              </>
              <div className="bg-dark-color/50 w-full h-px my-10"></div>
              <>
                <h3 className="text-2xl uppercase mb-3">Lenguajes</h3>
                <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-2 gap-y-2 items-center text-center">
                  {about.programmingLanguajes.map((pl, index) => (
                    <div className="flex items-end" key={index}>
                      <p className="mr-1">{pl.title}</p>
                      <small className="text-green-500">{pl.level}</small>
                    </div>
                  ))}
                </div>
              </>
              <div className="bg-dark-color/50 w-full h-px my-10"></div>
              <>
                <h3 className="text-2xl uppercase mb-3">Herramientas</h3>
                <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-4 gap-y-4 items-center text-center">
                  {about.tools.map((t, index) => (
                    <div className="flex items-end" key={index}>
                      <p className="mr-1">{t.title}</p>
                      <small className="text-green-500">{t.level}</small>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
          <h2 className="text-3xl text-center mt-20 mb-10 font-inter">{about.slogan}</h2>
          <a href={about.cv} download="sebafurfaro_cv" className="border-solid border-2 border-light-color py-3 px-6 mx-auto cursor-pointer">Descargar CV</a>
        </div>
      </div>
    </section>
  )
}

export default About;