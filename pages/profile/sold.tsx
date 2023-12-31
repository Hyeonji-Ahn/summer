import type {NextPage} from "next";
import Layout from "@components/layout"
import Item from "@components/item";


const Sold: NextPage = () => {
    return (
        <Layout title="Sold" canGoBack>
            <div className="flex flex-col space-y-5 pb-10 divide-y">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <Item
                        key={i}
                        id={i}
                        title="iPhone 14"
                        price={99}
                        comments={1}
                        hearts={1}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Sold;