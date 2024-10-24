import { useState } from 'react'
import './app.css'

function App() {

  const [num , setNum] = useState('');
  const clear = () => {
    try {setNum('') } catch (error) {alert('error')}
  };
  const calculate = () => {
    try {setNum(eval(num))} catch (error) {alert('error')}
  };






  
  return (
    <>
      <div className="border p-5 w-25 m-5 mx-auto shadow">
        <input placeholder="0" type="text" className="p-5 w-100" value={num}/>
        <div className="row p-3 align-items-center justify-content-between d-flex flex">
        <button className="ac col-2 py-3" onClick={() => clear ()} value={'C'}>AC</button>
         <button className="plusminus  col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'+'}>+/-</button>
         <button className="percentage col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'%'}>%</button>
         <button className="divide col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'/'}>÷</button>
        </div>

        <div className="row p-3 align-items-center justify-content-between d-flex flex">
        <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={1}>1</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={2}>2</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={3}>3</button>
         <button className="multiply col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'*'}>X</button>
        </div>

        <div className="row p-3 align-items-center justify-content-between d-flex flex">
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={4}>4</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={5}>5</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={6}>6</button>
         <button className="minus col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'-'}>-</button>
        </div>

        <div className="row p-3 align-items-center justify-content-between d-flex flex">
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={7}>7</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={8}>8</button>
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={9}>9</button>
         <button className="plus col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'+'}>+</button>
        </div>

        <div className="row p-3 align-items-center justify-content-between d-flex flex">
         <button className="col-6 py-3 zero" onClick={(e) => setNum(num + e.target.value)} value={1}>0</button>
         {/* <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={1}>0</button> */}
         <button className="col-2 py-3" onClick={(e) => setNum(num + e.target.value)} value={'.'}>.</button>
         <button className="equal col-2 py-3" onClick={() => calculate()} value={'='}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
