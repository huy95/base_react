import { useState } from "react";
const order = [100, 200, 300];

function AppUseSate() {

  const [counter, setHandle] = useState(() => {
    return order.reduce((total, cur) => total + cur);
  });
  const [info, setInfo] = useState({
    name: 'nguyen van a',
    age: 18,
    address: ' hn, vn'
  })
  const handleUpdate = () => {
    //set với call back
    setHandle((prev) => prev + 1);
    setInfo({
      ...info,
      bio: 'HN'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <h2>{JSON.stringify(info)}</h2>
        <button onClick={handleUpdate}>Increase</button>
      </header>
    </div>
  );
}

export default AppUseSate;
