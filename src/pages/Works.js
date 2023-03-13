import React, { useState } from "react";
import Productive from '../components/Work/Productive';
import Experimental from '../components/Work/Experimental';
import data from '../data/work.json';

const Works = () => {

  const [ isProd, setIsProd ] = useState(true);
  const [ isExperimental, setIsExperimental ] = useState(false);
  const productive = data.projects;
  const experimental = data.works;

  const activeExperimental = () => {
    setIsExperimental(true)
    setIsProd(false)
  }

  const activeProd = () => {
    setIsProd(true)
    setIsExperimental(false)
  }

  return(
    <section className="relative text-light-color min-h-screen pt-20 mb-10">
      <div className="container-fluid mx-auto px-5">
        <h1 className="md:text-6xl text-5xl font-monumentBold text-center">[Selected] Work</h1>
        <div className="flex max-sm:flex-col items-center w-fit max-sm:w-full mx-auto my-10 hidden">
          <button className="max-sm:w-full border-solid border-2 border-light-color uppercase cursor-pointer px-4 py-3 sm:mr-2 max-sm:mb-3" onClick={activeProd}>Productive Works</button>
          <button className="max-sm:w-full border-solid border-2 border-light-color uppercase cursor-pointer px-4 py-3" onClick={activeExperimental}>Experimental Projects</button>
        </div>
        <div className="mt-20">
          {isProd  && <Productive items={productive} />}
          {isExperimental && <Experimental items={experimental} />}
        </div>
      </div>
    </section>
  )
}

export default Works