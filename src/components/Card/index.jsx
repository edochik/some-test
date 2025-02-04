import { Link, useLocation } from "react-router-dom";
import { Popup } from "../Popup/index.jsx";
import s from "./Card.module.scss";

const Card = ({ id, title, photo, activePopup, setActivePopup }) => {
	const location = useLocation();

	return <li key={id} className={s.Card}>
		<h3 className={s.title}>{title}</h3>
		<img className={s.image} src={photo} alt="Фото ..." />
		<button
			className={s.delete_btn}
			onClick={() => setActivePopup(prev => prev === id ? null : id)}>
			Удалит
		</button>
		<Link to={`/seminar/${id}`} className={s.edit_btn} state={{ background: location }}>
			Редактировать
		</Link>
		{id === activePopup && <Popup id={id} setActivePopup={setActivePopup} />}
	</li>;
};

export { Card };