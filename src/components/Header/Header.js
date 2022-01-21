import { useContext } from "react";
import { CoinContext } from "../../Context/CoinContext";
import styles from "./Header.module.css";
import { VscGithubAlt } from "react-icons/vsc";

const Header = () => {
	const { searchInput, setSearchInput, setCurrency } = useContext(CoinContext);

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	return (
		<>
			<main className={styles.container}>
				<nav>
					{/* CURRENCY SELECTION */}
					<select
						className={styles.currency}
						name="currency"
						onChange={(e) => setCurrency(e.target.value)}
					>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="TRY">TRY</option>
						<option value="GBP">GBP</option>
					</select>
					{/* LINKS */}
					<a
						href="https://github.com/eyupucmaz/crypto-app"
						className={styles.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						<VscGithubAlt />
					</a>
				</nav>

				{/* SEARCH BAR AND HEADER */}
				<h1 className={styles.container__title}> Crypto Coin Stats</h1>
				<div className={styles.search}>
					<input
						type="text"
						name="currency"
						className={styles.search__input}
						value={searchInput}
						onChange={handleChange}
						placeholder="Search for Coins"
					/>
				</div>
			</main>
		</>
	);
};

export default Header;
