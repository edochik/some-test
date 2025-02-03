import s from "./List.module.scss";

import { useSelector } from "react-redux";

const List = () => {
	const { seminars, loading } = useSelector(state => state.seminars)

	if (loading === 'pending') {
		return <span className={s.loader}></span>
	}
	return <ul className={s.List}>
		{seminars.map(seminar => (<li key={seminar.id}>{seminar.title}</li>))}
	</ul>;
};

export { List };