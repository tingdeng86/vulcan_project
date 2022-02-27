import React from 'react'

function Video() {
  return (
    <section className='video-container'>
        <div className='embeded-container'>
            <iframe src="https://player.vimeo.com/video/183929811" frameBorder="0" allowFullScreen></iframe>
        </div>
    </section>
  )
}

export default Video