import { useState } from 'react'

const AddVideo = ({ onAdd }) => {
  const [titre, setText] = useState('')
  const [Channel, setChannel] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!titre) {
      alert('Please add a video')
      return
    }

    onAdd({ titre, Channel,category})
    
   //clear the form
    setText('')
    setChannel('')
    setCategory('')
    
  }

  return (
<div className='container-form'>
    													
    <form className='add-form' onSubmit={onSubmit}>
      	
      <div className='form-control'>
        <label>Video title</label>
        <input
          type='text'
          placeholder='Add Video'
          value={titre}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label> Channel Name </label>
        <input
          type='text'
          placeholder=' Channel Name '
          value={Channel}
          onChange={(e) => setChannel(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label> category </label>
        <input
          type='text'
          placeholder=' category '
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Video' className='btn btn-block' />
    </form>
    </div>
  )
}

export default AddVideo