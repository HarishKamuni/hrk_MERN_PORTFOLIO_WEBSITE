import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/rootSlice';
import axios from 'axios';
import SummaryApi from '../../summaryApi/ApiCollections';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const [intros, setIntros] = useState({
    welcomeText: '',
    firstName: '',
    lastName: '',
    caption: '',
    desc: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntros((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(intros);

    try {
      // dispatch(showLoading());
      const res = await axios.put(SummaryApi.updateIntro.url, {
        ...intros,
        _id: intros._id,
      });
      const data = await res.data;
      // dispatch(hideLoading());
      console.log(data.data);
      if (data.success) {
        toast('Wow so easy !');
        toast.success(data.message);
        // navigate('/');
      }
      if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      // dispatch(hideLoading());
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (portfolioData) {
      setIntros(portfolioData.Intros);
      // console.log(intros);
    }
  }, [portfolioData]);

  return (
    <div className="px-4 pb-6 ">
      <section className="p-4 border shadow-md mt-5">
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="welcomeText" className="text-md">
              Welcome Text :
            </label>
            <input
              type="text"
              id="welcomeText"
              placeholder="Welcome Text"
              name="welcomeText"
              value={intros.welcomeText}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="firstName" className="text-md">
              First Name :
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              value={intros.firstName}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="lastName" className="text-md">
              Last Name :
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              value={intros.lastName}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="caption" className="text-md">
              caption :
            </label>
            <input
              type="text"
              id="caption"
              placeholder="Caption"
              name="caption"
              value={intros.caption}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="desc" className="text-md">
              Description :
            </label>
            <textarea
              type="text"
              id="desc"
              placeholder="desc"
              name="desc"
              value={intros.desc}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 h-[100px]"
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <Link to="/" className=" text-lg border py-2 px-4">
              Home
            </Link>

            <button
              type="submit"
              className="border py-2 px-5 text-lg  bg-blue-400 text-white hover:bg-blue-100 hover:text-blue-500 rounded-md "
            >
              save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminIntro;
