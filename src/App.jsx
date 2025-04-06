import React from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navbar'

function App() {
  return (
    <div>
      <Navigation/>
      <div className="max-w-xl mx-auto my-10 p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center">Currency Converter</h1>
      <p>Convert your currency easily and quickly!</p>

      <ConvertArea />
    </div>
      
      <CustomerExperience />

      <Footer/>
    </div>
  )
}

export default App