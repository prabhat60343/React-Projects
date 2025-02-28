import { useState } from "react";
import InputBox from "./components/InputBox";
import Loader from "./components/Loader";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { data: currencyInfo, loading, error } = useCurrencyInfo(from);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        if (!currencyInfo || !currencyInfo[to]) {
            console.error("Conversion rate not available for", to);
            setConvertedAmount(0);
            return;
        }

        const rate = currencyInfo[to]?.value;

        if (from === "inr") {
            setConvertedAmount((amount / rate).toFixed(2));
        } else {
            setConvertedAmount((amount * rate).toFixed(2));
        }
    };

    return (
        <div
            className="w-full h-screen flex justify-center items-center"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1728338304559-b1ea168794a4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay for better readability */}
            <div className="w-full h-full flex justify-center items-center bg-white/80">
                <div className="w-full max-w-md bg-white text-black shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
                        Currency Converter 💰
                    </h1>

                    {loading && <Loader />}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {!loading && !error && (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                        >
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={Object.keys(currencyInfo)}
                                onCurrencyChange={setFrom}
                                selectCurrency={from}
                                onAmountChange={setAmount}
                            />

                            <div className="flex justify-center my-3">
                                <button
                                    type="button"
                                    className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow"
                                    onClick={swap}
                                >
                                    Swap 🔄
                                </button>
                            </div>

                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={Object.keys(currencyInfo)}
                                onCurrencyChange={setTo}
                                selectCurrency={to}
                                amountDisable
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
                            >
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
