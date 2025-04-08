import ConvertArea from "./components/ConverterArea.jsx.jsx"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navigation from "./components/Navbar"

const App =() => {
  return (
    <>
    <Navigation/>
     <Home/>

    <div className="max-w-xl mx-auto my-10 p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center">Currency Converter</h1>
      <p>Convert your currency easily and quickly!</p>

      <ConvertArea />
    </div>
     {/* <CustomerExperience/> */}

    <Footer/>
    </>
  )
}

export default App