import React from 'react'

function ProductAdvisor() {
  return (
    <div className='product-advisor'>
        <h2>Product Advisor</h2>
        <p>Find your project's perfect fit.</p>
        <hr />
        <div className='dropdowns'>
          <form action="submit">
            <label htmlFor="">Product Type</label>
            <select className="first-select" name="" id="">
              <option value="" disabled selected>Select</option>
            </select>
            <label htmlFor="">Screen Location</label>
            <select name="" id="">
              <option value="" disabled selected>Select</option>
            </select>
            <label htmlFor="">Flow Type</label>
            <select name="" id="">
              <option value="" disabled selected>Select</option>
            </select>
            <label htmlFor="">Channel Depth</label>
            <select name="" id="">
              <option value="" disabled selected>Select</option>
            </select>
            <label htmlFor="">Channel Width</label>
            <select name="" id="">
              <option value="" disabled selected>Select</option>
            </select>
            <button>Find my product</button>
          </form>
        </div>
    </div>
  )
}

export default ProductAdvisor