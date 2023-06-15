import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([])
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setSushiData(data))
  }, [])

  function plateSushi(price) {
    setPlates([...plates, price])
    setBudget(budget - price)
  }

  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} plateSushi={plateSushi} budget={budget}/>
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;
