import { useState } from 'react';
import './App.css'

function App()
{
  const [name, setName] = useState('');

  const onFormSubmit = (e) =>
  {
    e.preventDefault();
    console.log("Form Submitted");
    setName('');
  }

  const nameChanged = (name) =>
  {
    console.log(name)
    setName(name)
  }

  return (
    <>
      <form action="" onSubmit={(e) =>
      {
        onFormSubmit(e);
      }}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) =>
        {
          nameChanged(e.target.value)
        }} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
