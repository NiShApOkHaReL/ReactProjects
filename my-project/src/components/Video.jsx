import React from 'react'

function Video({title, name=Nisha,views,years}) {
   
   
   
  return (
    <div>
        <img src='https://picsum.photos/seed/picsum/160/90' alt='Image of nature' />
    <div style={{backgroundColor:'red'}}>{title}</div>
    <div className='channel'>{name}</div>
    <div>{views} views <span>.</span>{years}</div>
    </div>
  )
}

function Thumb() {
    return (
      <div>Thumb</div>
    )
  }




export {Video,Thumb};