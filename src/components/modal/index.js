import React, { useState } from "react";
import './style.css';

function Modal({modalOpen, setModalOpen}){

  return (
    <div className='Modal-wrapper'>
        <div className='Modal'>
            <div className='Modal-header'>
                <h2>Корзина</h2>
                <button className='Modal-close-btn' onClick={() => setModalOpen(false)}>
                    Закрыть
                </button>
            </div>
            <div className='Modal-main'>
                dsfsdfsdfsdfsdfsd
            </div>
        </div>
    </div>
  )
}

export default Modal;