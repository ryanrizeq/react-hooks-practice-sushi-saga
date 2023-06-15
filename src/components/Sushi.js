import React, { useState } from "react";

function Sushi({ img, name, price, plateSushi, budget }) {

  const [isEaten, setIsEaten] = useState(false)

  function eatSushi() {
    if (price <= budget) {
      setIsEaten(!isEaten)
      plateSushi(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {isEaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
