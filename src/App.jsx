import { BrowserRouter, Routes, Route } from "react-router-dom";
import Joblist from "./pages/Joblist";
import AddJob from "./pages/AddJob";
import Header from "./components/Header.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, setError, setJobs } from "./redux/slices/jobSlice.js";

const App = () => {
  //api isteği atıp cevabı store'a bildirir
  const dispatch = useDispatch();

  const getJobs = () => {
    //slice'taki yükleniyoru true'ya çek
    dispatch(setLoading());

    //api isteği at
    axios
      .get("http://localhost:3001/jobs")

      //slice'daki veriyi güncelle
      .then((res) => dispatch(setJobs(res.data)))

      //slice'daki error'u güncelle
      .catch((err) => dispatch(setError(err.message)));
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Joblist getJobs={getJobs} />} />
          <Route path="/add" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
