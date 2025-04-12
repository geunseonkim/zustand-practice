// import { useState } from "react";
import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./store/countStore";

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase, increaseBy, decrease, decreaseBy } = counterStore();
  return (
    <div className="count-container">
      <h2>count: {count}</h2>
      <CountBox count={count} />
      <p>1씩 증가</p>
      <button onClick={increase}>increase+1</button>
      <p>10씩 증가</p>
      <button onClick={increaseBy(10)}>increase+10</button>
      <p>1씩 감소</p>
      <button onClick={decrease}>decrease-1</button>
      <p>10씩 감소</p>
      <button onClick={decreaseBy(10)}>decrease-10</button>
    </div>
  );
}

export default App;
