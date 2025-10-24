import { assets } from "@/Assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";


const Header = () => {

  const [ email, setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail(""); // cleare the input field after the form submission
    }
    else{
      toast.error("Error")
    }
  }


  return (
    <div className="py-5 px-5 md:px-12  lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={200}
          alt=""
          className="w-[130px] sm:w-auto"
        />
       
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium text-center">Faiza's Blogs</h1>
<p className="mt-10 max-w-[740px] mx-auto text-center text-gray-600 text-xs sm:text-base leading-relaxed">
  Discover stories and reflections on life, faith, and work — written to inspire and share real experiences from my journey.
</p>
        <form onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_7px_#000000]"
          action=""
        >
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button type="submit" className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
