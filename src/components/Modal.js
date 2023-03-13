import React from "react";

export const Modal = ({ data, hideModal }) => {

  return(
    <div className="modal fixed top-0 left-0 w-full h-full bg-dark-color/30 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="modal-dialog shadow-lg relative lg:max-w-5xl max-w-[95vw] mx-auto bg-dark-color text-light-color lg:h-fit h-[98vh] px-5 py-8">
        <div className="modal-header flex items-center justify-center h-10">
          <h2 className="text-center self-center font-bold lg:text-3xl text-2xl lg:mb-10 mb-5">Details {data.title}</h2>
          <button className="absolute right-2 top-2" onClick={hideModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-light-color" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 items-center">
          <div className="gallery-img bg-slate-300 lg:max-w-[620px] lg:max-h-[670px] h-full w-full lg:block hidden">
            <img src={`${data.img}`} alt={data.title} />
          </div>
          <div className="project-info">
            <div className="border-b border-solid border-slate-400 pb-4">
              <h3 className="font-bold lg:text-2xl text-xl">Project info</h3>
              <p>{data.summary}</p>
            </div>
            <h3 className="font-bold lg:mt-10 mt-5 lg:text-2xl text-xl">Project Deatils</h3>
            <ul>
              <li className="border-b border-solid border-slate-400 flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-light-color" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                </p>
                <p className="font-light">{data.techno}</p>
              </li>
              <li className="flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-light-color" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                  </svg>
                </p>
                <p className="lg:bg-pink-500 lg:text-slate-900 text-pink-500 font-bold flex items-center lg:p-2 cursor-pointer">{data.url}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}