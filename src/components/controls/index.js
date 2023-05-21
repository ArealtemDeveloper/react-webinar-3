import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import './style.css';
import { getTotalPrice } from "../../utils";
import { plural } from "../../utils";

function Controls({onModalOpen, basket}){

  useEffect(() => {
    console.log('render')
  },[basket])

  return (
    <div className='Controls'>
      <div className='basket-desc'>
          {
          basket.length === 0 
          ? 
          <p>В корзине: <b>пусто</b></p>
          : 
          <p>
            В корзине: 
            <b>{`${basket.length}  ${plural(basket.length, {one: 'товар', few: 'товара', many: 'товаров'})}`}  / {getTotalPrice(basket.map(item => item.price * item.count)).toLocaleString('ru')} ₽</b>
            </p>
          }
      </div>
      <button className='basket-btn' onClick={() => onModalOpen()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default Controls;
