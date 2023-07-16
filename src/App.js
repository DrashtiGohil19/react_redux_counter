import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Counter } from './features/counter';
import Btncomp from './features/btncomp';

function App() {

  const count = useSelector(state => state.counter.value)
  const count1 = useSelector(state => state.counter.text)


  return (
    <>
    <div className='App'>
      <h1>{count}</h1>
      <Btncomp/>
    </div>
    </>
  );
}

export default App;
