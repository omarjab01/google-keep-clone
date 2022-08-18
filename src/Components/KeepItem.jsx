import React from 'react'

const KeepItem = (props) => {
  return (
    <div className='bg-blue-300 p-4 rounded-xl flex flex-col justify-between'>
        <div>
            <h3 className='text-xl font-medium'>{props.title}</h3>
            <p className='my-4'>
                {props.content}
            </p>
        </div>
        <button className='mt-2 mb-1 ml-auto' onClick={() => props.deleteKeep(props.id)} >Delete Note</button>
    </div>
  )
}

export default KeepItem