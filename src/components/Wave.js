import React from 'react'

function Wave({source, description}) {
  return (
    <div className="wave-container">
        <img src={source} alt={description} />
      </div>
  )
}

export default Wave