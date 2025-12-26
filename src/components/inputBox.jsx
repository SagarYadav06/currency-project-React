import React, {useId} from 'react'

function InputBox({
 label,
 amount,
 onAmountChange,
 onCurrencyChange,
 currencyOptions = [],
 selectCurrency = "usd",
 amountDisable = false,
 currencyDisable = false,
 className = "",

}) {
  const amountInput = usedId()



  return(
    <div className={`bg-white p-3 rounded-lg trxt-sm
    flex ${className} `}>
      <div className="w-1/2">
   <label htmlFor={amountInputId} 
   className="text-black/40 mb-2
   inline-block">
    {label}
   </label>
   <input
   id={amountInput}
    className="outline-none w-full
    bg-transparent py-1.5"
    type="number"
    placeholder="Amount"
    disabled={amountDisable}
    value={amount}
    onChange={(e) => onAmountChange &&
      onAmountChange(Number(e.target.value))
    }
      />
    </div>
     <div className="w-1/2 flex flex-wrap
     justify-end text-right">
      <p className="trxt-black/40 mb-2 w-full
      ">Currency Type</p>
      <select
      className="rounded-lg px-1 bg-gray-100
      cursor-poinbter
      outline"
      value={selectCurrency}
      onChange={(e) => onCurrencyChange &&
        onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
  <option key={currency} value={currency}>
    {currency}
  </option>
))}
    
      </select>

      </div>
     </div>

  );
}

export default InputBox;