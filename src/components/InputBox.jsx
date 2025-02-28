import React from "react";

function InputBox({
    label,
    amountReadOnly = false,
    currencyOptions = [],
    currentAmount = 0,
    currentCurrencyType = "inr",
    setAmountChange,
    setCurrencyTypeChange
}) {
    return (
        <div className="border-2 px-6 py-4 bg-white rounded-lg shadow-md flex items-center justify-between w-full max-w-md">
            
            {/* Amount Input Section */}
            <div className="flex flex-col w-2/3">
                <label htmlFor={label} className="text-gray-700 font-semibold">{label}</label>
                <input
                    className="text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 max-w-1/2"
                    id={label} 
                    type="number" 
                    name="amount" 
                    placeholder="Enter amount"
                    readOnly={amountReadOnly}
                    value={currentAmount}
                    onChange={(event)=> {
                        let value = event.target.value;
                        setAmountChange(value);
                    }}
                />
            </div>

            {/* Currency Type Dropdown */}
            <div className="flex flex-col w-1/3">
                <label htmlFor="currencyType" className="text-gray-700 font-semibold">Currency</label>
                <select 
                    name="currency" 
                    id="currencyType"
                    value={currentCurrencyType}
                    onChange={(event)=>{setCurrencyTypeChange(event.target.value)}}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-gray-100 text-black"
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
