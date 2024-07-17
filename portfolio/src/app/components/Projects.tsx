import Link from "next/link"
export default async function Navbar(){
    return(
        // <div className="flex flex-col w-1/2">
        <div className="flex flex-col bg-black  self-end  p-24 gap-4 shadow-md shadow-white">
         <h1 className=" text-3xl" >Projects</h1>
        <Link className=" underline text-white" href="/">Home</Link>
        <Link className=" underline text-white" href="/dfit">D Fitness</Link>
        <Link className=" underline text-white" href="/dblog">D Blog</Link>
        <Link className=" underline text-white" href="/dcommerce">D Commerce</Link>

        
        </div>
        // </div>
    )
}