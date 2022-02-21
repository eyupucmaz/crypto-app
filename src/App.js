import styles from "./App.module.css";
import Coin from "./components/Coin/Coin";
import Header from "./components/Header/Header";
import { useCoin } from "./Context/CoinContext";
import { VscLoading } from "react-icons/vsc";
import { useEffect } from "react";

function App() {
	const { error, loading, filteredList } = useCoin();
	// Keep updating while filteredList has been changed
	useEffect(() => {}, [filteredList]);

	return (
		<div className={styles.container}>
			<Header />
			{error && `${error}`}
			{loading && (
				<span className={styles.loading}>
					<VscLoading />
				</span>
			)}
			<section className={styles.coins}>
				{!loading &&
					filteredList?.current?.map((coin) => {
						return <Coin key={coin.rank} data={coin} />;
					})}
			</section>
		</div>
	);
}

export default App;
