
import {useState} from 'react'
import Header from './components/Header' 
import Videos from './components/Videos' 
import AddVideo from './components/AddVideo' 

function App() {

  const [showAddVideo, setShowAddVideo]  = useState(false)
 
  const [videos, setVideos] = useState(
    [
       {
          id: 1 ,
          titre:'Video Title',
          Channel: 'Channel 1' ,
          category:'category 1',
          date:'1 week ago',
          views:'12K views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
          
        } ,
        {
          id: 2 ,
          titre:'Video Title',
          Channel: 'AB Channel ' ,
          category:'category 2',
          date:'3 weeks ago',
          views:'120K views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
          
        } ,
        {
          id:3 ,
          titre:'Video Title',
          Channel: 'Channel 6' ,
          category:'category 3',
          date:'2 days ago',
          views:'90K views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
          
        } ,
        {
          id: 4 ,
          titre:'Video Title',
          Channel: 'BBC Channel ' ,
          category:'category 4',
          date:'1 year ago',
          views:'1.2M views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
          
        } ,
        {
          id: 5 ,
          titre:'Video Title',
          Channel: 'CNN Channel' ,
          category:'category 6',
          date:'1 week ago',
          views:'12K views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
        } ,
        {
          id: 6 ,
          titre:'Video Title',
          Channel: 'TEDTalks Channel' ,
          category:'category 5',
          date:'1 Month ago',
          views:'100K views',
          image:'http://unsplash.it/250/150?gravity=center',
          ProfileImage:'http://unsplash.it/36/36?gravity=center',
                } 
        
        ]
        
) 

// Delete video 
const deleteVideo = (id) => {
setVideos(videos.filter((task) => task.id !== id )) 
}


//Add video 
const addVideo=(task) =>{
  //on crée un id aléatoire
  const id = Math.floor(Math.random()*10000)+1
  
  const image='http://unsplash.it/250/150?gravity=center';
  const ProfileImage='http://unsplash.it/36/36?gravity=center';
  const date='1 second ago';
  const views='0 views';
  const newTask={id,image,ProfileImage,date,views, ...task}
  setVideos([...videos, newTask])
}

  return (
    
    <div className='container'>
      <Header videos={videos} onAdd={()=>setShowAddVideo(!showAddVideo)}
      showAdd={showAddVideo}
      onDelete={deleteVideo}/>
      {showAddVideo && <AddVideo onAdd={addVideo} />}
      
     { videos.length > 0 ? <Videos tasks={videos} 
     onDelete={deleteVideo}/>
     :'No videos to show'} 
    </div>

  );
}
 export default App
