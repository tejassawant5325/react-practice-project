import './App.css'

function App()
{


  return (
    <>
      <div>
        <input onChange={function (e)
        {
          console.log(e.target.value);
        }} type="text" />
      </div>
    </>
  )
}

export default App
