import React from 'react';

function CoffeeCard({ data }) {
  const handleHeartBtn = e => {
    const { classList } = e.target;
    if (classList.contains('btnOff')) {
      classList.replace('btnOff', 'btnOn');
      classList.replace('fa-regular', 'fa-solid');
    } else {
      classList.replace('btnOn', 'btnOff');
      classList.replace('fa-solid', 'fa-regular');
    }
  };

  return (
    <div className="gridWrap" key={data.key}>
      <div className="overflow" onClick={() => {}}>
        <img className="coffeeImg" src={data.imgURL} alt={data.name} />
      </div>
      <p className="coffeeName">{data.name}</p>
      <i className="fa-regular fa-heart btnOff" onClick={handleHeartBtn} />
    </div>
  );
}

export default CoffeeCard;
