import React from "react";
import data from '../data/work.json';
import { Link } from 'react-scroll'
import { CustomNav } from "../components/customNav/CustomNav";
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {

  const home = data.heros[0];
  
  return(
    <section className="relative">
      <div className="container-fluid mx-auto px-5 text-light-color uppercase">
        <div className="hero w-full flex md:items-center max-md:pt-40 min-h-screen relative">
          <div className="md:w-3/4 relative z-10">
            <h1 className="font-monumentBold md:text-9xl text-5xl">{home.display1 + ' ' + home.display2}</h1>
            <h4 className="font-inter lg:text-3xl md:w-2/3 mt-5 mb-12">{home.summary}</h4>
            <Link
              activeClass="active"
              to="contact"
              className="text-light-color border-solid border-light-color border-2 w-fit px-10 py-3 cursor-pointer"
              smooth={true}>{home.button}</Link>
          </div>
          <div className="md:w-1/4" />
            <Player
              autoplay
              loop
              src={home.lottie}
              className="absolute md:-right-20 right-0 top-0 bottom-0 md:w-[50vw] md:h-[50vw] max-md:top-1/4 w-full h-full"
            />
        </div>
        <div className="w-full flex flex-col justify-center min-h-screen">
          <h2 className="text-2xl mb-12">Te puede interesar</h2>
          <CustomNav />
        </div>
      </div>
    </section>
  )
}

export default Home;