import { useState } from "react";
import { Card } from "../Card/";
import s from "./Cards.module.scss";
import {  useSelector } from "react-redux";

const Cards = () => {
	const { seminars, loadingSeminars } = useSelector(state => state.seminars);
	const [activePopup, setActivePopup] = useState(null);

	if (loadingSeminars === 'pending') {
		return <span className={s.loader}></span>
	}

	return <ul className={s.Cards}>
		{seminars.map(seminar => (
			<Card key={seminar.id} {...seminar}
				activePopup={activePopup}
				setActivePopup={setActivePopup} />
		))}
	</ul>;
};

export { Cards };