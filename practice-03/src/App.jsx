import './App.css'

function App()
{
  const changeName = (name) =>
  {
    console.log(name);
  }

  return (
    <>
      <div>
        <input onChange={function (e)
        {
          changeName(e.target.value)
        }}
          type="text" placeholder='Enter name' />

        <button type="submit" onClick={(e) =>
        {
          console.log(e.target);
        }} >Click Me</button>
      </div>

      <div className="box" onMouseMove={(e) =>
      {
        console.log(e.pageX);

      }}>

      </div>
    </>
  )
}

export default App
