import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="bg-[url('/jail.jpg')] h-screen w-full bg-cover bg-center bg-no-repeat relative font-mono">
    <div class="container basis-1/3 w-1/3 text-left absolute right-10 mt-10">
    <div class="container mb-5">
    <h1 class="text-6xl text-slate-200 text-bold">FeedHungrySam</h1> 
    </div>
    <div class="container mb-5 text-slate-400 text-xl">
    <p class="mb-10">
FEAT's mission is to increase the price of everyone's bankruptcy assets by acquiring spot FTT & opening levered positions with proceeds from a 2% tax. Toxic leeches like John Ray, Kyle & Zhu, and FTX's legal team are all seeking to drain user funds for their own gain. It's time we created a vehicle for users to fight back.
    </p>
    </div>
    <div class="flex space-x-2 justify-left">
      <div>
      <button type="button" class="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">One Pager</button>
      <button type="button" class="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Token</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
