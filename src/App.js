import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementHandler,
  decrementHandler,
} from "./Components/Action/Actions";

function App() {
  const myState = useSelector((state) => {
    return state.changeHandler;
  });

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="main__container">
        <h3>Increment & Decrement Counter using Redux</h3>
        <h1>{myState}</h1>
        <button
          className="increment"
          onClick={() => dispatch(incrementHandler())}
        >
          CLICK TO INCREMENT
        </button>
        <button
          className="decrement"
          onClick={() => dispatch(decrementHandler())}
        >
          {" "}
          CLICK TO DECREMENT
        </button>
      </div>
    </div>
  );
}

export default App;
