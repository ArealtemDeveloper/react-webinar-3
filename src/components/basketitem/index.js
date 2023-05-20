import React from "react";
import PropTypes from "prop-types";
import './style.css';

function BasketItem({item, onDeleteItem, basket}){

  return (
    <div className='BasketItem'>
      <div className='BasketItem-desc'>
        <div className='BasketItem-code'>
          {item.code}
        </div>
        <div className='BasketItem-title'>
          {item.title}
        </div>
      </div>
      <div className='BasketItem-info'>
        <div className='BasketItem-info-price'>
            {item.price} ₽
        </div>
        <div className='BasketItem-info-count'>
            {item.count} шт
        </div>
        <div className='Item-actions'>
          <button onClick={() => onDeleteItem(item.code)}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}


export default React.memo(BasketItem);