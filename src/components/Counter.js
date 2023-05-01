import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const show = useSelector(state => state.showCounter)

  console.log(show)

  const increamentHandler = () => {
    dispatch({ type: 'increament' })
  }
  const decreamentHandler = () => {
    dispatch({ type: 'decreament' })

  }

  const increaseby5Handler = () => {
    dispatch({ type: 'increaseby5', amount: 5 })

  }
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={increaseby5Handler}>increase by 5</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
