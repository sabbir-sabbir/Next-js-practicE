import Link from "next/link";
export default function Home() {
  return (
   <>
   <div><h1 className="text-center">Helllo world</h1></div>
   <Link href="/blog/first-post" >Blog</Link>
   <Link href="/products/1" >products</Link>
   
   </>
  );
}
