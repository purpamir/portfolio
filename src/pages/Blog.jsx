import { useState } from "react";
import react19 from "../images/react-19.jpg";
import bootstrapvtailwind from "../images/bootstrap-vs-tailwind.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const Blog = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);
  const showHandler2 = () => {
    setShow2(!show2);
  };
  return (
    <div className="text-slate-300 flex gap-10 flex-col justify-center items-center mt-8">
      <Link to={"/"} className="self-start mx-3 -mt-6 flex items-center gap-2 ">
        <FaArrowLeft />
        Back
      </Link>
      <p className="text-3xl">Blog</p>
      <div className="w-2/3 rounded-xl border-b-2 rounded-br-none rounded-bl-none pb-5">
        <img src={react19} className="rounded-xl" />
        <h1
          onClick={showHandler}
          className=" px-1 mt-4 text-lg flex items-center justify-between"
        >
          React v19 vs. v18
          {!show ? (
            <IoIosArrowDown className="inline ml-4" />
          ) : (
            <IoIosArrowUp className="inline ml-4" />
          )}
        </h1>
        <span className="text-xs text-[#61DBFB] px-1 ">Posted on 2/1/2025</span>

        {show ? (
          <div className=" mt-6 px-1 ">
            <h2>. Current Status of React 19</h2>
            <h2>. New Hooks and APIs</h2>
            <h2>. Performance Optimizations</h2>
            <h2>. Migration Tips</h2>
            <h2>. Using React 19 RC with Vite</h2>
            <h2>. Conclusion</h2>
            <p className="mt-4">Read more +</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="w-2/3 rounded-xl border-b-2 rounded-br-none rounded-bl-none pb-5">
        <img src={bootstrapvtailwind} className="rounded-xl" />
        <h1
          onClick={showHandler2}
          className=" px-1 mt-4 text-lg flex items-center justify-between"
        >
          Bootstrap vs. Tailwind
          {!show2 ? (
            <IoIosArrowDown className="inline ml-4" />
          ) : (
            <IoIosArrowUp className="inline ml-4" />
          )}
        </h1>
        <span className="text-xs text-[#61DBFB] px-1 ">Posted on 2/2/2025</span>

        {show2 ? (
          <div className=" mt-6 px-1 ">
            <h2>. What is Tailwind CSS?</h2>
            <h2>. What is Bootstrap?</h2>
            <h2>. can you use Tailwind CSS with Bootstrap</h2>
            <h2>. Difference Between Tailwind CSS Vs Bootstrap</h2>
            <h2>. Adding Tailwind CSS with Bootstrap</h2>
            <h2>. Conclusion</h2>
            <p className="mt-4">Read more +</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Blog;
