import { useState } from "react"
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import useCurrencyInfo from "./hooks/useCurrencyinfo"

function App() {
   
 const [amount, setAmount] = useState(0)
 const [from, setFrom] = useState("usd")
 const [to, setTo] = useState("inr")
 const [convertedAmount, setConvertedAmount] = useState
 (0)

   const CurrencyInfo = useCurrencyInfo(from)

 const optioons = object.keys(CurrencyInfo)

 const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }
 
 const convert = () => {
  setConvertedAmount(amount * CurrencyInfo[to])
 }

 return(
  <div className="w-full h-screen flex flex-wrap
  justify-center items-center bg-cover bg-no-repeat"
  style={{
    backgroundImage=`url('https://images.unsplash.com/photo-1766155072316-7e3aa18710ed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
  >
    <div className="w-full max-w-md mx-auto
    border border-gray-60 rounded-lg p-5
    backdrop-blur-sm bg-white/30">
    <from
    onsubmit={(e)} => {

     e.preventDefault();
     convert()
    }}
    </>
      <div className="w-full mb-1">
        <InputBox
           label="From"
           amount={amount}
           currencyOptions={options}
           onCurrencyChange={=(currency)
            => (setAmount) }
            selectCurrency={from} 
        />
      </div>

     <div className="relative w-full h-0.5">

         <button
         type="button"
         className="absolute left-1/2
         -trabslate-x-1/2 
         -translate-y-1/2 border-2
         border-white rounded-md
         bg-blue-600 text-white px-2
         py-0.5"
         onClick={swap}  >
             swap
         </button>
         </div>
       <div className="w-full mt-1 mb-4">
        <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency)
          => setAmount(currency)}
          selectCurrency={from}
          amountDisable
        />

        </div>
        <buttom type="submit"
        className="w-full bg-blue-600
        text-white px-4 py-3rounded-lg">
         Convert {from.toUpperCase()} to
         {to.toUpperCase()}
        </buttom>
        </from>
        />
  
        )

export default App
