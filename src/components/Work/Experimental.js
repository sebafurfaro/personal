import React, { useState } from "react";
import { Modal } from "../Modal";

const Experimental = (items) => {

  const [ showModal, setShowModal ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState(null)

  const handleOpen = (item) => {
    document.body.style.overflowY = ('hidden');
    setShowModal(true)
    setSelectedItem(item)
  }

  const handleClose = () => {
    document.body.style.overflowY = ('auto');
    setShowModal(false)
  }

  return(
    <>
      <div className="experimental grid md:grid-cols-4 md:gap-x-4 sm:gap-y-4 max-sm:gap-y-8 w-full mx-auto max-md:mb-20">
        {items.items.map((item, index) => (
          <button
            onClick={() => handleOpen(item)}
            className="relative overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-3"
            key={index}>
              <img src={`${item.img}`} alt={item.title} />
          </button>
        ))}
      </div>
      {showModal && (
        <Modal hideModal={handleClose} data={selectedItem} />
      )}
    </>
  )
}

export default Experimental;