import React, { useId } from "react";

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
    const amountInputId = useId();

    return (
        <div className={`bg-gray-100 p-3 rounded-lg flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-500 mb-2 inline-block">
                    {label}
                </label>
                <input
    id={amountInputId}
    className="outline-none w-full bg-transparent py-1.5"
    type="number"
    placeholder="Amount"
    disabled={amountDisable}
    value={amount || ""}
    onChange={(e) => {
        const value = e.target.value.trim() === "" ? 0 : Number(e.target.value);
        onAmountChange(value);
    }}
/>

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-500 mb-2 w-full">Currency</p>
                <select
                    className="rounded-lg px-2 py-1 bg-white cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
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
