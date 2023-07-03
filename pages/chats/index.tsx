import type {NextPage} from "next";
import Layout from "../../components/layout"
import Link from "next/link";

const Chats: NextPage = () => {
  
    return (
    <Layout title="Chats" hasTabBar>
      <div className="divide-y-2 pb-5">
        {[1,2,3,4,5,6,7,8,9,10].map ((_, i) => (
          <Link className="flex py-3 px-4 items-center space-x-3 cursor-pointer" href={`/chats/${i}`} key={i}>
              <div className="w-12 h-12 rounded-full bg-slate-500"/>
                <div>
                  <p className="text-medium text-gray-700">Steve Jebs</p>
                  <p className="text-sm text-gray-500">LAST MESSAGE</p>
                </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Chats; 