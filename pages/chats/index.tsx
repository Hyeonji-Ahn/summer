import type {NextPage} from "next";

const Chats: NextPage = () => {
    return <div className="py-10 divide-y-2">
        {[1,1,1,1,1,1,1,1].map ((_, i) => (
        <div className="flex py-3 px-4 items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-slate-500"/>
          <div>
            <p className="text-medium text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">LAST MESSAGE</p>
          </div>
        </div>
        ))}
    </div>;
}

export default Chats; 