import { useState } from 'react'

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({videos,title, onAdd, showAdd,onDelete}) => {
    
    return (
        <header className='header' >
            <h1 >Filter Video</h1> 
            { videos.length > 0 ?
          <select name="category" required> Select category
           
  {  videos.map((video)=>(
      <option  value={video.category} onChange={()=>onDelete(video.id)}
      >
       {video.category} 
       </option>)
        )
  }
    </select>	
    :''} 	
           <h1 >{title}</h1> 
           <Button  onClick= {onAdd}
           color ={showAdd ?'red' :
           'green'} text ={showAdd ?'Close' :
        'Add new video'}/>
        </header>
    )
}

Header.defaultProps = { title: 'Add New Video '}
export default Header
