import { FaTimes} from 'react-icons/fa' 
 import { AiFillDelete} from 'react-icons/ai' 
import {  MdThumbUp } from 'react-icons/md' 
import {  MdThumbDown } from 'react-icons/md' 


const Video = ({task: video,onDelete}) => {
    return (
        <article className={`video-container ${video.reminder ? 
        'reminder' : ''}`}  
        >
            <>      
           
            <a href="#" class="thumbnail" data-duration="12:24">
              <img
                class="thumbnail-image"
                src= {video.image}
              />
            </a>
            <div class="video-bottom-section">
              <a href="#">
                <img
                  class="channel-icon"
                  src={video.ProfileImage} 
                />
              </a>
              <div class="video-details">
                <a href="#" class="video-title">
                  {video.titre}
                  <a href="#" >
                <MdThumbUp class='Like' />
                </a>
                <a href="#" >
                <MdThumbDown  />
                </a>
                </a>

                <a href="#" class="video-channel-name">
                  {video.Channel}
                </a>
                <p href="#" class="video-metadata">
                  {video.category}
                </p>
                <div class="video-metadata">
                  <span>{video.date}</span> • <span>{video.views}</span>
                </div>
              </div>
            </div>
   
            <AiFillDelete onClick={()=>onDelete(video.id)}
             style={{color:'black',
            cursor:'pointer'}}> </AiFillDelete> <p style={{color:'black',
            cursor:'pointer'}}  onClick={()=>onDelete(video.id)} className='delete'> delete </p>
            </>
            
        </article>
    )
}

export default Video
