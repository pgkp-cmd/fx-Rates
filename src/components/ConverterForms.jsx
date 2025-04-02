import React from 'react'

function Converter() {
  return (
    <div className="currency">
      <h2 className="title">Currency Converter</h2>
      <form className="form">
        <div>
            <label className="form-label"> Enter Amount </label>
            <input type="number" className="forms-input" />
        </div>
      </form>
    </div>
  )
}

export default Converter