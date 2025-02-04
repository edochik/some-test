import { useDispatch } from "react-redux";
import { fetchDeleteThunk } from "../../redux/initialData/thunk/fetchDeleteThunk.js";

import s from "./Popup.module.scss";

const Popup = ({ id, setActivePopup }) => {
	const dispatch = useDispatch()
	return <div className={s.Popup}>
		<p className={s.text}>Вы точно хотите удалить?</p>
		<button className={s.confirm_btn}
			onClick={() => dispatch(fetchDeleteThunk(id))}>Да</button>
		<button className={s.cancel_btn} onClick={() => setActivePopup(null)}>Нет</button>
	</div>;
};

export { Popup };