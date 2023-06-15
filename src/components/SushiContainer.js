import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiData, plateSushi, budget }) {
  const [index, setIndex] = useState(0)

  function moreSushi() {
    setIndex(index + 4)
  }

  return (
    <div className="belt">
      {sushiData.slice(index, index + 4).map((sushi) => (
        <Sushi 
          key={sushi.created_at}
          img={sushi.img_url}
          name={sushi.name}
          price={sushi.price}
          plateSushi={plateSushi}
          budget={budget}
        />
      ))}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
