import React from 'react';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';

function Income (props) {
  const incomeList = props.incomeList;

  const items = incomeList.map(item => {
    return <div id="income-list" key={item.id}>
      <div className="item">
        <div className="item-type">{item.type} -</div>

        <input type="number" id={item.id} value={item.amount} onChange={(e) => {
          props.updateIncomeList(item.id, e.currentTarget.value)}}
        />

        <div className="remove">
          <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteFromIncomeList(item.id)
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

export default Income;