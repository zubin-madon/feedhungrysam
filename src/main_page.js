// import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
// import img from './jail.jpg';
function App() {
  return (
      <>
<div className='bg-[url(/jail.jpg)] bg-fixed w-full h-screen md:w-full bg-center bg-cover bg-no-repeat font-mono overscroll-none'
style={{ backgroundAttachment: 'fixed', overflowY: 'auto' , backgroundPosition: "center"}}
>
        <div className=" md:hidden absolute text-center w-full py-4 md:bg-transparent bg-black bg-opacity-25">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
          <div className='invisible md:visible lg:w-1/3 md:w-1/2 w-full md:text-left absolute md:top-10 sm:top:40  lg:right-20 md:right-10 right-0 md:p-0  top-[95%] ' >
            <div className="md:flex hidden py-4 md:bg-transparent bg-black bg-opacity-25">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
            <div className='md:bg-transparent px-5 py-3'>
              <div className=" mb-5 text-white text-xl ">
                <p className="mb-10">
                  FEAT&#39;s mission is to increase the price of everyone&#39;s bankruptcy assets by acquiring spot FTT and opening levered positions with proceeds from a 2% tax. Toxic leeches like John Ray, Kyle & Zhu, and FTX&#39;s legal team are all seeking to drain user funds for their own gain. It&#39;s time we created a vehicle for users to fight back.
                </p>
              </div>
              <div className="flex space-x-2 justify-left ">
                <div>
                  <Link to='/page_temp' className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">One Pager</Link>
                  <button type="button" className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Token</button>
                </div>
              </div>
            </div>
          </div>
     
          <div className="lg:w-1/3 md:w-1/2 w-full h-screen md:text-left absolute md:top-10 sm:top:40  lg:right-20 md:right-10 right-0 md:p-0  top-[25%]">
            <div className="md:flex hidden py-4 md:bg-transparent bg-black bg-opacity-50">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
            <div className="bg-opacity-50 bg-black px-5 py-3">
              <div className=" mb-5 text-white text-xl">
                <p className="mb-10">
                  FEAT&#39;s mission is to increase the price of everyone&#39;s bankruptcy assets by acquiring spot FTT and opening levered positions with proceeds from a 2% tax. Toxic leeches like John Ray, Kyle & Zhu, and FTX&#39;s legal team are all seeking to drain user funds for their own gain. It&#39;s time we created a vehicle for users to fight back.
                </p>
              </div>
              <div className="flex space-x-2 justify-left ">
                <div>
                  <Link to='/page_temp' className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">One Pager</Link>
                  <button type="button" className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Token</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="bg-black h-[70vh] md:h-10"></div>
          <div className="bg-black h-[40vh] md:h-0"></div>
   </>
  );
}

export default App;