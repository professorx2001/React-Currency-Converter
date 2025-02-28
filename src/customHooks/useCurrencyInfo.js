import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lowerCaseCurrency = currency.toLowerCase();
                const res = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerCaseCurrency}.json`
                );
                const currencyJsonData = await res.json();
                setData(currencyJsonData[lowerCaseCurrency]);
            } catch (err) {
                console.error("Fetching currency data went wrong", err);
            }
        };

        fetchData();

    }, [currency]); 

    return data;
}

export default useCurrencyInfo;
