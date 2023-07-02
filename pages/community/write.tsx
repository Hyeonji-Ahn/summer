import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 hover:border-orange-500 transition appearance-none w-full px-3 py-2 border-gray-200 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="transition mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
         Submit
      </button>
    </form>
  );
};

export default Write;