import Link from "next/link"
// icons
import { IoExit } from "react-icons/io5";
// ui
import NavLinks from "./NavLinks";
export default function LeftSideBar(){
    return (
        <div className="h-full p-1.5">
            <div className="h-full bg-green-500 p-3 flex flex-col items-center justify-between rounded-md overflow-hidden">
                <Link href={"/"} className="text-xl font-black text-neutral-200">Next</Link>
                <NavLinks />
                <button className="text-xl text-neutral-50 transition-colors ease-in-out duration-150 hover:text-neutral-100">
                    <IoExit />
                </button>
            </div>
        </div>
    )
}