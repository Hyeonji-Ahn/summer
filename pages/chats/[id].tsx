import type { NextPage } from "next";
import Layout from "../../components/layout"

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat" canGoBack>
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400"/>
        <div className="w-1/2 text-sm p-2 border border-gray-300 rounded-md">
            <p> Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-reverse items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-red-400"/>
        <div className="w-1/2 text-sm p-2 border border-gray-300 rounded-md">
            <p> I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400"/>
        <div className="w-1/2 text-sm p-2 border border-gray-300 rounded-md">
            <p> NO NO NO</p>
        </div>
      </div>
      <div className=" w-full fixed mx-auto max-w-md bottom-4 inset-x-0">
        <div className="flex relative items-center">
          <input  className="mt-1 hover:border-orange-500 transition appearance-none w-full px-3 py-2 border-gray-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
       type="text" />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ChatDetail;