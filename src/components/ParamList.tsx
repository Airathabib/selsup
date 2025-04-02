import React, { useCallback } from 'react';
import Input from './Input';
import { ParamListProps } from '../interfaces/interfaces';

/* <----- Компонент вывода списка параметров -----> */
function ParamList({ items, updateParam, deleteParam }: ParamListProps) {
  const callbacks = {
    logButtonClick: useCallback(() => {
      console.log(items);
    }, [items]),
  };

  return (
    <div className='l-container'>
      <div className='c-list'>
        {items.map((item) => (
          <div className='c-item' key={item.id}>
            <Input
              name={item.name}
              type={item.type}
              value={item.value}
              onChange={(e) => updateParam(item.id, e.target.value)}
            />
            <button
              onClick={() => deleteParam(item.id)}
              className='c-item__button'
            >
              x
            </button>
          </div>
        ))}
      </div>
      <button className='c-log-button' onClick={callbacks.logButtonClick}>
        Просмотреть в консоли
      </button>
    </div>
  );
}

export default ParamList;
