import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({ handleSubmit, item, i }) => {
  const [project, setProject] = useState(item);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(project);
  return (
    <section key={i} className="p-4 border shadow-md ">
      <form action="" onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="title" className="text-md">
            Title :
          </label>
          <input
            type="text"
            id="title"
            placeholder="title"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
          />
        </div>
        <div className="mt-3">
          <label htmlFor="desc" className="text-md">
            Project Description :
          </label>
          <textarea
            type="text"
            id="desc"
            placeholder="Description"
            name="desc"
            value={project.desc}
            onChange={handleChange}
            className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 h-[100px]"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="image" className="text-md">
            Project Image :
          </label>
          <input
            type="text"
            id="image"
            placeholder="Choose file"
            name="image"
            value={project.image}
            onChange={handleChange}
            className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 "
          />
        </div>

        <div className="mt-3">
          <label htmlFor="link" className="text-md">
            Link :
          </label>
          <textarea
            type="text"
            id="link"
            placeholder="link"
            name="link"
            value={project.link}
            onChange={handleChange}
            className="py-2 w-full px-3 outline-1 outline-slate-400 border mt-3 h-[100px]"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="skills" className="text-md">
            TeckStack :
          </label>
          <div className="mt-5 flex gap-2 items-center flex-wrap w-full">
            {project.techStack.map((item, i) => (
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
  );
};

export default SingleProject;
