import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Coin from "./components/Coin/Coin";
import Header from "./components/Header/Header";
import { CoinContext } from "./Context/CoinContext";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";

const API_URL =
	"https://api.coinstats.app/public/v1/coins?skip=0&limit=1000&currency=";
function App() {
	const [searchInput, setSearchInput] = useState("");
	const [coinData, setCoinData] = useState([]);
	const [currency, setCurrency] = useState("USD");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

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

	const filteredList = coinData.filter((coin) => {
		return coin.name.toLowerCase().includes(searchInput.toLowerCase());
	});

	return (
		<div className={styles.container}>
			<CoinContext.Provider
				value={{ searchInput, setSearchInput, coinData, setCurrency, currency }}
			>
				<Header />

				{error && `${error}`}
				{loading && (
					<span className={styles.loading}>
						<VscLoading />
					</span>
				)}
				<section className={styles.coins}>
					{filteredList.map((coin) => {
						return <Coin key={coin.rank} data={coin} />;
					})}
				</section>
			</CoinContext.Provider>
		</div>
	);
}

export default App;
