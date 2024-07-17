import Link from "next/link"
export default async function Skills(){
    return(
        // <div className="flex flex-col w-1/2">
        <div className="flex bg-black  self-end h-full p-10 gap-4 shadow-md shadow-white">
         <Link href="skills" className=" text-3xl" >Skills</Link>
        </div>
        // </div>
    )
}