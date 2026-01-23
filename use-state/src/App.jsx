import { useState } from 'react'
import './App.css'

function App()
{
  const [count, setCount] = useState(0)
  const [num, setNum] = useState({ name: 'Tejas', age: 26 });

  function increaseCount()
  {
    setCount(count + 1);
  }

  const decreaeCount = () =>
  {
    setCount(count - 1);
  }

  const increaseBy5 = () =>
  {
    setCount(count + 5);
  }

  const changeUser = () =>
  {
    let newNum = { ...num };
    newNum.name = 'Purva';
    newNum.age = '25';
    setNum(newNum);
    console.log(newNum);
    console.log(num);

    setNum(prev => ({ ...prev, age: 50 }));
  }

  return (
    <>
      <div className="main">
        <div className="count">
          <h3>{count}</h3>
        </div>
        <div className="buttons">
          <button type="button" className='btn' onClick={increaseCount}>Increase</button>
          <button type="button" className='btn' onClick={decreaeCount}>Decrease</button>
          <button type="button" className='btn' onClick={increaseBy5}>Increase By 5</button>
        </div>

        <div className="state">
          <div>{num.name}, {num.age}</div>
          <button type="submit" className='btn' onClick={changeUser}>Change User</button>
        </div>
      </div>
    </>
  )
}

export default App
