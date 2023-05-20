import React, { useState } from "react";
import './style.css';
import Basketitem from "../basketitem";
import { getTotalPrice } from "../../utils";

function Modal({setModalOpen,basket, onDeleteItem}){

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
                {basket.map(item => {
                    return (
                       <Basketitem key={item.code} basket={basket} onDeleteItem={onDeleteItem} item={item}/>
                    )
                })}
                <div className='Modal-total'>
                    <b>Итого</b>
                    <b className='Modal-total-sum'>
                        {basket.length > 0 ? getTotalPrice(basket.map(item => item.price * item.count)) : 0} ₽
                    </b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal;