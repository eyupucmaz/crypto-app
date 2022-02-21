import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";
// CREATING A CONTEXT
const CoinContext = createContext({});
// API URL
const API_URL =
	"https://api.coinstats.app/public/v1/coins?skip=0&limit=1000&currency=";

// Creating a CoinProvider instaed of using CoinContext.Provider
export const CoinProvider = ({ children }) => {
	// Moving all states in Provider
	const [searchInput, setSearchInput] = useState("");
	const [coinData, setCoinData] = useState([]);
	const [currency, setCurrency] = useState("USD");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const filteredList =useRef();

  useEffect(() => {
    filteredList.current = coinData.filter((coin) => {
      return coin.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [searchInput,coinData])
  

	// Creating an object to pass as a values of provider
	const values = {
		searchInput,
		setSearchInput,
		coinData,
		setCoinData,
		currency,
		setCurrency,
		error,
		setError,
		loading,
		setLoading,
    filteredList
	};
    
	// API CALL
	useEffect(() => {
		axios
			.get(`${API_URL}${currency}`)
			.then((res) => {
				setCoinData(res.data.coins);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [currency]);

	return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

export const useCoin = () => useContext(CoinContext);
