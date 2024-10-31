import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SummaryApi from '../../summaryApi/ApiCollections';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import SingleProject from '../../components/SingleProject';

const AdminProject = () => {
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: '',
    desc: '',
    image: '',
    link: '',
    teckStack: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(projects);
    setProjects((prev) => {
      return [...prev, project];
    });
    try {
      // dispatch(showLoading());
      const res = await axios.put(SummaryApi.updateProject.url, {
        ...projects,
        _id: projects._id,
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
      setProjects(portfolioData.Projects);
      // console.log(projects);
    }
  }, [portfolioData]);
  console.log(projects);

  return (
    <div className="px-4 pb-6 flex flex-col gap-4 ">
      {projects.map((item, i) => (
        <SingleProject
          item={item}
          i={i}
          handleSubmit={handleSubmit}
          setProject={setProject}
        />
      ))}
    </div>
  );
};

export default AdminProject;
