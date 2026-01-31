import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App()
{
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const getImages = async () =>
  {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    //console.log(response.data);
    setImages(response.data);
    console.log(page);
  }

  // const getImagesOnScroll = async () =>
  // {
  //   const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
  //   //console.log(response.data);
  //   setImages(response.data);
  //   console.log(page);
  // }

  useEffect(() =>
  {
    getImages();
  }, [page])

  return (
    <>
      <div
        className='h-full mt-5'>
        <h2 className='text-center font-medium text-3xl mb-3'>Photo Gallery</h2>
        {/* <button
          className='bg-blue-400 p-2 m-2 rounded active:scale-95 transition duration-150 ease-in-out transform' type="button"
          onClick={getImages}>
          Get Images
        </button> */}

        <div className='flex flex-wrap gap-4 justify-center align-middle'>
          {images.map((image, index) =>
          {
            return <div key={index} >
              <img src={image.download_url} className='h-50 object-cover rounded-2xl' />
              <h3 className='font-bold text-xl italic text-center mt-1'>{image.author}</h3>
            </div>
          })}
        </div>

        <div className='flex gap-3 justify-center align-middle mt-2 mb-2'>
          <button style={{ opacity: page == 1 ? '0.5' : '1' }} type="button" className='bg-blue-500 text-xl px-3 py-1 rounded text-amber-50 active:scale-95 transition duration-150 ease-in-out'
            onClick={() =>
            {
              if (page > 1)
              {
                setPage(page - 1)
              }
            }}
          >
            Prev
          </button>
          <span className='font-medium mt-1'>Page {page}</span>
          <button type="button" className='bg-blue-500 text-xl px-3 py-1 rounded text-amber-50 active:scale-95 transition duration-150 ease-in-out'
            onClick={() =>
            {
              setPage(page + 1)
            }}
          >
            Next
          </button>
        </div>
      </div >
    </>
  )
}

export default App
