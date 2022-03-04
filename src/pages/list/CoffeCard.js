import React from 'react';

function CoffeeCard({ data }) {
  return (
    <div className="gridWrap" key={data.key}>
      <div className="overflow" onClick={() => {}}>
        <img className="coffeeImg" src={data.imgURL} alt={data.name} />
      </div>
      <p className="coffeeName">{data.name}</p>
      <i className="fa-regular fa-heart btnOff" />
    </div>
  );
}

export default CoffeeCard;
