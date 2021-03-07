import Video from './Video'



const Videos = ({tasks: videos, onDelete}) => {
    
    return (
        
      <div class="videos">
      <section class="video-section">
        {videos.map((task)=>(
      <Video  className="videos"
      key= {task.id} task={task} 
      onDelete={onDelete} 
       />)
        )}    
        </section>
        </div>
    )
}

export default Videos
