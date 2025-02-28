import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY; // Secure API key

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!API_KEY) {
            setError("API key is missing");
            return;
        }
        if (!baseCurrency) {
            setError("Base currency is required");
            return;
        }

        setLoading(true);
        setError(null);

        const url = baseCurrency.toUpperCase() === "USD"
            ? `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=INR,EUR`
            : `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${baseCurrency.toUpperCase()}&currencies=USD,INR,EUR`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                console.log("API Response:", res); // Debugging
                if (res.data) {
                    setData(res.data);
                } else {
                    throw new Error("Invalid API response format");
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setError(error.message);
                setData({});
            })
            .finally(() => setLoading(false));
    }, [baseCurrency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
