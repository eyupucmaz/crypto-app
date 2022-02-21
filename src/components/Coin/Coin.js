import { useCoin } from "../../Context/CoinContext";
import styles from "./Coin.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Coin = ({ data }) => {
	const { currency } = useCoin();

	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.card__top}>
						<img
							className={styles.icon}
							src={data.icon}
							alt={`Icon of ${data.name}`}
						/>

						<div className={styles.coin__info}>
							<p className={styles.coin__name}>{data.name}</p>
							<p className={styles.coin__price}>
								<strong>
									{data.price < 1
										? data.price.toFixed(8)
										: data.price.toFixed(3)}
								</strong>
								<span className={styles.coin__price__currency}>
									{` ${data.symbol}/${currency}`}
								</span>
							</p>
							<p className={styles.coin__changes}>
								{data.priceChange1d < 0 ? (
									<span className={styles.price_down}>
										<AiFillCaretDown />
										{data.priceChange1d}
									</span>
								) : (
									<span className={styles.price_up}>
										<AiFillCaretUp />
										{data.priceChange1d}
									</span>
								)}
							</p>
						</div>
					</div>
					<div className={styles.card__bottom}>
						<p className={styles.coin__market}>
							<span className={styles.coin__market__text}>Market Cap: </span>
							{`${data.marketCap} ${currency}`}{" "}
						</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={data.websiteUrl}
							className={styles.coin__website}
						>
							Official Web Site
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Coin;
