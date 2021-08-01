import React from 'react';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';

function Expenses (props) {
  const expenseList = props.expenseList;

  const items = expenseList.map(item => {
    return <div id="expense-list" key={item.id}>
      <div className="item">
        <div className="item-type">{item.type} -</div>

        <input type="number" id={item.id} value={item.amount} onChange={(e) => {
          props.updateExpenseList(item.id, e.currentTarget.value)}}
        />

        <div className="remove">
          <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteFromExpenseList(item.id)
          }} icon="trash" />
        </div>
      </div>
    </div>
  })

  return <div>
    <FlipMove duration={300} easing="ease-in-out">
      {items}
    </FlipMove>
  </div>;
}

export default Expenses;