import React from 'react'

function ProductAdvisor() {
  return (
    <div className='product-advisor'>
      <h2>Product Advisor</h2>
      <p>Find your project's perfect fit.</p>
      <hr />
      <div className='dropdowns'>
        <form action="submit">
          <div className='grid-dropdowns'>
            <div className='cell'>
              <label htmlFor="">Product Type</label>
              <select className="first-select" name="" id="" defaultValue={'Default'} >
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="location">Screen Location</label>
              <select name="location" id="location" defaultValue={'Default'} >
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="flow">Flow Type</label>
              <select name="flow" id="flow" defaultValue={'Default'}>
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="channel-depth">Channel Depth</label>
              <select name="channel-depth" id="channel-depth" defaultValue={'Default'}>
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="channel-width">Channel Width</label>
              <select className="last-select" name="channel-width" id="channel-width" defaultValue={'Default'}>
                <option value='Default' disabled >Select</option>
              </select>
            </div>
          </div>
          <button>Find my product</button>
        </form>
      </div>
    </div>
  )
}

export default ProductAdvisor