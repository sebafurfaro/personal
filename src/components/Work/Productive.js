import React, {useState, useRef} from "react";
import gsap from 'gsap';

const Productive = ( items ) => {

  const [ isHover, setIsHover ] = useState(null)
  const [ mouseX, setMouseX ] = useState(0)
  const [ mouseY, setMouseY ] = useState(0)
  const imgRef = useRef(null)

  const followCursor = e => {
    setMouseX(e.clientX / 5)
    setMouseY(e.clientY / 5)
  }

  const revealImage = id => {
    gsap.to(`#mask-${id}`, {
      opacity: isHover === id ? 0 : 1,
      duration: 0.5,
      ease: "power1.inOut"
    })

    setIsHover(isHover === id ? null : id)
  }
  
  return(
    <div className="flex flex-col items-center">
      {items.items.map((item) => (
        <a
          rel="noreferrer"
          target="_blank"
          key={item.id}
          href={item.url}
          onMouseEnter={() => revealImage(item.id)}
          onMouseLeave={() => revealImage(item.id)}
          onMouseMove={followCursor}
          className="font-monumentBold uppercase lg:text-8xl md:text-5xl max-md:text-3xl text-light-color relative lh:min-h-[300px] flex items-center justify-center p-8 lg:m-20 max-md:mb-5 link-outlined">
            <h1 className="relative text-center" style={{ zIndex: 1 }}>{item.title}</h1>
            <div
              id={`mask-${item.id}`}
              ref={imgRef}
              style={{ opacity: 0, transform: `translate(${mouseX}px, -${mouseY}px)` }}
              className="absolute top-0 right-0 bottom-0 left-0 m-auto z-0 max-md:hidden">
              <img src={`${item.img}`} alt={item.title} />
            </div>
        </a>
      ))}
    </div>
  )
}

export default Productive;