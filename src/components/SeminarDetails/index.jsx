import { useDispatch, useSelector } from "react-redux";
import s from "./SeminarDetails.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUpdateSeminarThunk } from "../../redux/initialData/thunk/fetchUpdateSeminarThunk.js";

const SeminarDetails = () => {
  const { seminars, loadingUpdate } = useSelector((state) => state.seminars);
  const dispatch = useDispatch()
  const { id } = useParams();
  const seminarData = seminars.find((seminar) => seminar.id === id);
  const [seminar, setSeminar] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setSeminar(prev => ({ ...prev, [name]: value }))
  }
  // получаем данные и их устанавливаем в useState
  useEffect(() => {
    if (seminarData !== undefined) {
      setSeminar(seminarData)
    }
  }, [seminarData]);

  if (seminarData == undefined) {
    return <span className={s.loader}></span>;
  }

  const onClickUpdateSeminar = () => {
    dispatch(fetchUpdateSeminarThunk(seminar))
  }

  return <div className={s.SeminarDetails}>
    <ol className={s.list}>
      {Object.entries(seminar).map(([key, value], index) => {
        if (index !== 0) {
          return <li key={index} className={s.item}>
            {isEditing
              ? <input type="text" name={key} value={value} onChange={(e) => handleChangeValue(e)} size={value.length} />
              : <span>{value}</span>}
          </li>
        }
        return null
      })}
    </ol>
    <div className={s.wrapper}>
      <button onClick={() => setIsEditing(true)}>Редактировать</button>
      <button onClick={() => setIsEditing(false)}>Завершить</button>
    </div>
    <button
      className={s.button}
      disabled={isEditing || loadingUpdate === 'pending'}
      onClick={() => onClickUpdateSeminar()}>Применить изменения</button>
  </div>
};
export { SeminarDetails };
