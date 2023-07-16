import { useState } from "react";
import { increment,decrement, incrementByAmount } from "./counterslice";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Btncomp = () => {

    const [val,setval] = useState('');
    const dispatch = useDispatch();

    return(
        <>
            <button className="btn btn-primary" onClick={()=>{dispatch(increment())}}>+</button>
            <br></br>
            <input type="text" value={val} onChange={(e)=>setval(e.target.value)}></input>
            <input type="button" className="mt-3 mb-3 ms-2" value={'Add amount'} onClick={()=>{dispatch(incrementByAmount(+val))}}></input>
            <br></br>
            <button className="btn btn-primary" onClick={()=>{dispatch(decrement())}}>-</button>

        </>
    )
}
export default Btncomp;