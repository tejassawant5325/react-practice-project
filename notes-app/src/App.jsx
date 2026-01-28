import { useState } from 'react'
import './App.css'

function App()
{
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const formSubmit = (e) =>
  {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (id) =>
  {
    const deleteTask = [...task];
    deleteTask.splice(id, 1);
    setTask(deleteTask);
  }

  return (
    <>
      <div className='h-screen lg:flex bg-black text-white'>
        <form className='flex gap-4 lg:w-1/2 flex-col items-start px-5 py-5' onSubmit={(e) =>
        {
          formSubmit(e)
        }}>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input type="text"
            placeholder='Enter Title'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) =>
            {
              setTitle(e.target.value);
            }}
          />
          <textarea type='text'
            className='px-5 w-full font-medium h-30 py-2 border-2 outline-none rounded'
            placeholder="Enter Details"
            value={details}
            onChange={(e) =>
            {
              setDetails(e.target.value);
            }}
          />
          <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>
            Add Note
          </button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-3xl font-bold'>Your Notes</h1>
          <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]'>
            {task.map((element, index) =>
            {
              return <div key={index} className="relative h-52 w-40 rounded-2xl text-black px-5 py-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div className='flex flex-col items-start'>
                  <h3 className='text-2xl font-bold leading-tight'>{element.title}</h3>
                  <p className='font-medium text-gray-700 mt-2 leading-tight'>{element.details}</p>
                </div>
                <button className='bg-red-700 px-2 py-1 rounded absolute bottom-5 text-white' onClick={() =>
                {
                  deleteNote(index)
                }}>
                  Delete
                </button>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
