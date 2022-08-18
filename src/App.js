import { useEffect, useState } from 'react'
import KeepItem from './Components/KeepItem';

function App() {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [keeps, setKeeps] = useState([])



  const addKeep = () => {

    if(title === '' || body === ''){
      alert("Fields cannot be empty")
    }else{
    const keep = {
      id: keeps.length,
      title: title,
      body: body,
    }

    setKeeps([...keeps, keep])

  }
    setTitle('')
    setBody('')
  }


  const deleteKeep = (id) => {
    setKeeps(keeps.filter((keep) => keep.id !== id))
  }


  return (
    <div className="App">
      <div className='max-w-sm mx-auto'>

        <h1 className='text-center my-8 text-2xl font-medium'>Google Keep</h1>

        <div className='grid grid-cols-1 gap-4 p-8 bg-yellow-200 rounded-xl'>
          <div className='flex flex-row justify-between gap-4'>
            <input type="text" placeholder='Title' className='w-full p-2 border rounded'
              onChange={(event) => setTitle((event.target.value))} value={title}
            />
            <button className='p-4 bg-blue-300 rounded-xl text-white' onClick={addKeep}>Add</button>
          </div>
          <textarea
            className='h-40 w-full border rounded p-2' placeholder='Content'
            onChange={(event) => setBody((event.target.value))} value={body}
          />
        </div>

      </div>

      <h2 className='my-4 ml-4 text-xl'>Notes</h2>


      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-4 w-full md:p-4' >
        {
          keeps.map((keep) => {
            return (
              <KeepItem
                key={keep.id}
                id={keep.id}
                title={keep.title}
                content={keep.body}
                deleteKeep={deleteKeep}
              />
            )
          })
        }

      </div>

    </div>
  );
}

export default App;
