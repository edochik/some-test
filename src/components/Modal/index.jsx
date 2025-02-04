import { Link, useNavigate } from "react-router-dom";
import s from "./Modal.module.scss";
import { useEffect } from "react";
import { SeminarDetails } from "../SeminarDetails/";


const Modal = () => {
	const navigate = useNavigate();
	// закрываем модальное окно
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				navigate("/");
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [navigate]);


	return <div className={s.overlay} onClick={() => navigate("/")}>
		<div className={s.modal} onClick={(e) => e.stopPropagation()}>
			<SeminarDetails />
			<Link to="/" className={s.close}></Link>
		</div>
	</div>;
};

export { Modal };