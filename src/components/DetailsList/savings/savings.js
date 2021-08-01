import React from 'react';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css';

function Savings (props) {
  const savingsList = props.savingsList;

  const items = savingsList.map(item => {
    return <div id="savings-list" key={item.id}>
      <div className="item">
        <div className="item-type">{item.type} -</div>

        <input type="number" id={item.id} value={item.amount} onChange={(e) => {
          props.updateSavingsList(item.id, e.currentTarget.value)}}
        />

        <div className="remove">
          <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteFromSavingsList(item.id)
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

export default Savings;