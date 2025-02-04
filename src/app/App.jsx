import { Route, Routes, useLocation } from "react-router-dom";
import { Cards } from "../components/Cards/";
import { Modal } from "../components/Modal/";
//маршрутизация через react-router-dom
const App = () => {
  const location = useLocation();
  const background = location.state?.background || null;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Cards />} />
        <Route path="/seminar/:id" element={<Modal />} />
      </Routes>
      {background &&
        <Routes>
          <Route path="/seminar/:id" element={<Modal />} />
        </Routes>
      }
    </>
  );
};

export default App;
