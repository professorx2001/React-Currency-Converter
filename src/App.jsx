import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./customHooks/useCurrencyInfo";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrencyType, setFromCurrencyType] = useState("usd");
  const [toAmount, setToAmount] = useState(0);
  const [toCurrencyType, setToCurrencyType] = useState("inr");

  const allCurrencyInfo = useCurrencyInfo(fromCurrencyType);
  const currencyOptions = Object.keys(allCurrencyInfo);

  function swap() {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurrencyType(toCurrencyType);
    setToCurrencyType(fromCurrencyType);
  }

  function convert() {
    setToAmount(fromAmount * allCurrencyInfo[toCurrencyType]);
  }

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex justify-center items-center flex-col gap-6 px-4">
      {/* Heading */}
      <h1 className="text-[#D8F3DC] text-5xl font-bold px-6 py-3 rounded-md shadow-lg ">
        Currency Converter
      </h1>

      {/* Input Box Section */}
      <div className="flex flex-col gap-6 bg-white/20 px-6 py-4 rounded-2xl shadow-md backdrop-blur-md w-full max-w-sm position-relative">
        <InputBox
          label="From"
          amountReadOnly={false}
          currencyOptions={currencyOptions}
          currentAmount={fromAmount}
          currentCurrencyType={fromCurrencyType}
          setAmountChange={setFromAmount}
          setCurrencyTypeChange={setFromCurrencyType}
        />

        {/* Swap Button */}
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-blue-800 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 border-2 border-white"
          onClick={swap}
        >
          🔄 Swap
        </button>

        <InputBox
          label="To"
          amountReadOnly={true}
          currencyOptions={currencyOptions}
          currentAmount={toAmount}
          currentCurrencyType={toCurrencyType}
          setAmountChange={setToAmount}
          setCurrencyTypeChange={setToCurrencyType}
        />
      </div>

      {/* Convert Button */}
      <button
        className="bg-green-600 text-white text-lg px-8 py-3 rounded-lg shadow-md border border-green-700 transition-all duration-300 hover:scale-110 hover:bg-green-800"
        onClick={convert}
      >
        Convert {fromCurrencyType.toUpperCase()} to {toCurrencyType.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
