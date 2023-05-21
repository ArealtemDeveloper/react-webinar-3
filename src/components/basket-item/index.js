import React from "react";
import PropTypes from "prop-types";
import './style.css';

function BasketItem({item, onDeleteItem}){

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
            {item.price.toLocaleString('ru')} ₽
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

BasketItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  }).isRequired,
  onDeleteItem: PropTypes.func,
};

BasketItem.defaultProps = {
  onDeleteItem: () => {},
}


export default React.memo(BasketItem);