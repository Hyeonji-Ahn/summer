import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-500 mb-y">Gray Chair</span>
          <span className= "font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Purple Chair</span>
          <span className= "font-semibold">$21</span>
        </div>
        <div className=" flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className= "font-semibold">$40</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">Check Out</div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl  p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 items-end justify-between">
            <div className= "flex flex-col items-center">
              <span className= "text-sm text-gray-500">Orders</span>
              <span className = "font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-500 rounded-full"/>
            <div className= "flex flex-col items-center">
            <span className= "text-sm text-gray-500">Spent</span>
            <span className = "font-medium">$4500</span>
            </div>
          </div>
          <div className ="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm test-gray-500">America</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
