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
              <label htmlFor="">Screen Location</label>
              <select name="" id="" defaultValue={'Default'} >
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="">Flow Type</label>
              <select name="" id="" defaultValue={'Default'}>
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="">Channel Depth</label>
              <select name="" id="" defaultValue={'Default'}>
                <option value="Default" disabled >Select</option>
              </select>
            </div>
            <div className='cell'>
              <label htmlFor="">Channel Width</label>
              <select className="last-select" name="" id="" defaultValue={'Default'}>
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