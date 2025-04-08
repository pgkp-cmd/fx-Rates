import React,{useState, useEffect} from 'react'
import CurrencySelect from './CurrencySelect'

const ConvertArea = () => {
const [amount, setAmount] = useState(1); // Default amount is set to 0
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('KES');
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


//function to handle swap of currencies from their positions
const handleCurrencySwap = () => {
  const temp = fromCurrency;
  setFromCurrency(toCurrency);
  setToCurrency(temp);
}

//Fetching exchange rates when the component mounts or when currencies change
const exchangeRates = async () => {
  setLoading(true);
  setError(null);
  try {
    const API_URL_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_URL_KEY}/pair/${fromCurrency}/${toCurrency}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        'There was an error fetching the exchange rates. Please try again later.'
      );
    }

    const data = await response.json();
    if (data.result === 'success') {
      const exchangeRate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${exchangeRate} ${toCurrency}`);
    } else {
      throw new Error(data['error-type'] || "API error");
    }
  } catch (err) {
    setError(err.message);
    setResult('');
  } finally {
    setLoading(false);
  }
};

useEffect( () => {
  exchangeRates();
}
, []);


// State to handle form submission and fetch exchange rates when the amount or currencies change
const handleSubmitButton = (e) => {
  e.preventDefault();
  exchangeRates();
  
  }

  return (
    <>
     <form className="mt-9" onSubmit={handleSubmitButton}>
        <div className="flex mb-30 flex-col">
        <div>
        <label className="block text-md font-medium text-gray-700" htmlFor="amount">Amount:</label>
        <input className="w-full p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-1" type="number" id="amount" name="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        
      <div className="sm-md flex flex-row items-center justify-evenly mt-2">
        <div className="flex items-center space-x-4 mt-4 mr-5">
        <label className="text-xl" htmlFor="from-currency">From:</label>
        
        <CurrencySelect 

        props={fromCurrency}
        
        handleCurrencyChange={e => setFromCurrency(e.target.value)}
        />
        </div>

        <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 text-xl text-gray-700 mt-0">
        <svg onClick={handleCurrencySwap} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
    </div>


        <div className="flex items-center space-x-4 mt-4 ml-6">
        <label className="text-xl" htmlFor="to-currency">To:</label>
       
        <CurrencySelect 

        props={toCurrency}

        handleCurrencyChange={e => setToCurrency(e.target.value)}
        />
        </div>
        </div>
        
        <div className="text-center mt-4">
        <button type="submit" className="px-5 py-2 bg-indigo-500 text-white  rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">Convert</button>
            
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-800">Error: {error}</p>}

        <p className="mt-5"><span className="text-green-300">Amount Converted</span>: {result}</p>
        </div>

        </div>
      </form> 
    </>
  )
}

export default ConvertArea