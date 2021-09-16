import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ListItem() {
  // hooks
  const list = useSelector((state) => state.addItemReducer.data);
  const dispatch = useDispatch();

  // methods
  const action = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      data: item,
    });
  };

  // handles
  const handleAddItem = (item) => {
    action(item);
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button type="button" onClick={() => handleAddItem('new item')}>
        adicionar
      </button>
    </div>
  );
}
