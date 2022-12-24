import './App.css';
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from "react-redux";

function reducer(currentState, action) {
    const newState = {...currentState}

    if (currentState === undefined) {
        return {number: 1, type: action.type}
    }
    if (action.type === "PLUS") {
        newState.number++;
    }

    return newState;
}
const store = createStore(reducer);

function Left01() {
  return <div>
      <h1>Left01</h1>
      <Left02></Left02>
  </div>
}

function Left02() {
    return <div>
        <h1>Left02</h1>
        <Left03></Left03>
    </div>
}

function Left03() {
    const number = useSelector(state => state.number);

    return <div>
        <h1>Left03 : {number}</h1>
    </div>
}

function Right01() {
    return <div>
        <h1>Right01</h1>
        <Right02></Right02>
    </div>
}

function Right02() {
    return <div>
        <h1>Right02</h1>
        <Right03></Right03>
    </div>
}

function Right03() {
    const dispatch = useDispatch();

    return <div>
        <h1>Right03</h1>
        <input type="button" value="+" onClick={() => {
            dispatch({type: "PLUS"})
        }}/>
    </div>
}

function App() {

  return (
    <div className="App">
        <div className="Grid">
            <Provider store={store}>
              <Left01></Left01>
              <Right01></Right01>
            </Provider>
        </div>
    </div>
  );
}

export default App;
