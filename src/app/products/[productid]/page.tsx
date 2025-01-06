import { Metadata } from "next";

type Props = {
    params: Promise<{productid: string}>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productid; 
    const title =  await new Promise((resolve) => {
        setTimeout(()=> {
            resolve(`Iphone ${id}`);
        }, 100)
    });
    return {
        title: `Product ${title}`, 
    };
};

export default async function ProductDetails({ params,}: Props) {
    const productid = (await params).productid;
    return <div>
        <h1>Details About Product:...{productid}</h1>
    </div>
}