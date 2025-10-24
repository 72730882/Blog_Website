import { assets, blog_data } from "@/Assets/assets";
import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import { useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-dm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Work")}
          className={
            menu === "Work"
              ? "bg-black text-white py-1 px-4 rounded-dm"
              : ""
          }
        >
          Work
        </button>
        <button
          onClick={() => setMenu("Religion")}
          className={
            menu === "Religion" ? "bg-black text-white py-1 px-4 rounded-dm" : ""
          }
        >
          Religion
        </button>
        <button
          onClick={() => setMenu("LifeStyle")}
          className={
            menu === "LifeStyle"
              ? "bg-black text-white py-1 px-4 rounded-dm"
              : ""
          }
        >
          LifeStyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item._id}
                category={item.category}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
