import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SummaryApi from '../../summaryApi/ApiCollections';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminAbout = () => {
  const { portfolioData } = useSelector((state) => state.root);
  // console.log(portfolioData);
  const [abouts, setAbouts] = useState({
    lottieUrl: '',
    desc1: '',
    desc2: '',
    skills: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbouts((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(abouts);
    try {
      // dispatch(showLoading());
      const res = await axios.put(SummaryApi.updateAbout.url, {
        ...abouts,
        _id: abouts._id,
      });
      console.log(res);
      const data = await res.data;
      // dispatch(hideLoading());
      console.log(data);
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
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (portfolioData) {
      setAbouts(portfolioData.Abouts);
      // console.log(abouts);
    }
  }, [portfolioData]);
  // console.log(abouts);

  return (
    <div className="px-4 pb-6  ">
      <section className="p-4 border shadow-md ">
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="lottieUrl" className="text-md">
              Upload Image :
            </label>
            <input
              type="text"
              id="lottieUrl"
              placeholder="Choose file"
              name="lottieUrl"
              value={abouts.lottieUrl}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="desc1" className="text-md">
              First Description :
            </label>
            <textarea
              type="text"
              id="desc1"
              placeholder="First Description"
              name="desc1"
              value={abouts.desc1}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 h-[100px]"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="desc2" className="text-md">
              Second Description :
            </label>
            <textarea
              type="text"
              id="desc2"
              placeholder="Second Description"
              name="desc2"
              value={abouts.desc2}
              onChange={handleChange}
              className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 h-[100px]"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="skills" className="text-md">
              Skills :
            </label>
            <div className="mt-5 flex gap-2 items-center flex-wrap w-full">
              {abouts.skills.map((item, i) => (
                <span
                  onChange={handleChange}
                  key={i}
                  className="py-2 whitespace-nowrap px-3 outline-1 outline-slate-400 border mt-3 "
                >
                  {item}
                  <span className="ml-4 cursor-pointer hover:text-red-500">
                    X
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-10">
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

export default AdminAbout;
