import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useEffect } from 'react';
import SummaryApi from './summaryApi/ApiCollections';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setPortfolioData, showLoading } from './redux/rootSlice';
import Admin from './pages/Admin';

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  const dispatch = useDispatch();
  const getAllPortfolioData = async () => {
    try {
      dispatch(showLoading());
      setTimeout(async () => {
        const res = await axios.get(SummaryApi.getAllPortfolioData.url);
        const { data } = res.data;

        console.log(data);
        dispatch(setPortfolioData(data));
      }, 1000);
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getAllPortfolioData();
  }, []);
  useEffect(() => {
    console.log(portfolioData);

    if (!portfolioData) {
      getAllPortfolioData();
    } else {
      getAllPortfolioData();
    }
  }, []);
  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
