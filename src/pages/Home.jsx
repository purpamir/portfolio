import Layout from "../components/Layout";
import pattern from "../images/pattern.webp";
const Home = () => {
  return (
    <Layout>
      <div className="text-slate-300 mt-12 transition-all">
        <p className="text-center mb-6 tracking-widest text-sm text-[#61DBFB]">
          Designer & Developer
        </p>
        <h1 className="text-2xl leading-11 uppercase text-center">
          Hi, i am a react developer
          <br /> who creates uniqe and
          <br /> minimal designs.
        </h1>
        <img src={pattern} className="h-36 mt-12 mx-auto" />
        <h2 className="mt-20 text-left px-2 text-2xl mb-6">My Top Skills</h2>
        <ul className="px-3">
          <li className="text-[#61dbfb] mb-1 text-lg">HTML 5 :</li>
          <span className="text-sm mb-4 block leading-8">
            Seamntic HTML, Customized fonts, Browser tab logo
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">CSS 3</li>
          <span className="text-sm mb-4 block leading-8">
            Flexbox, Grid, Shadows, Colors based on content, Optimizing Images
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">Javascript</li>
          <span className="text-sm mb-4 block leading-8">
            ES6 (Arrow function, Conditional Rendering, Template String), Map,
            Find, work with Browser Inspect
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">Tailwind CSS</li>
          <span className="text-sm mb-4 block leading-8">
            Responsive Design with md: and Mobile-First Design
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">REACT JS</li>
          <span className="text-sm mb-4 block leading-8">
            Axios, Getting and save Token in localStorage React Hook form, React
            logos, Context Api, Redux Toolkit (Dark mode, Authorize),Functional
            Components, React Router,States and Props, useEffect, Interceptors,
            Working and Getting content from server{" "}
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">Vite</li>
          <span className="text-sm mb-4 block leading-8">
            Installation and build up the Project
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">Rest Api</li>
          <span className="text-sm mb-4 block leading-8">CRUD</span>
          <li className="text-[#61dbfb] mb-1 text-lg">Git/Github</li>
          <span className="text-sm mb-4 block leading-8">
            Basic Knowledge include: Push, Commit
          </span>
          <li className="text-[#61dbfb] mb-1 text-lg">SASS (SCSS)</li>
          <span className="text-sm mb-4 block leading-8">
            Basic Fundamentals
          </span>
        </ul>
      </div>
    </Layout>
  );
};
export default Home;
