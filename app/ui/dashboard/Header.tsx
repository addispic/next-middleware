import Link from "next/link";
// icons
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { RiUser6Fill } from "react-icons/ri";

export default function Header(){
    return (
        <div className="flex items-center justify-between p-1.5">
            {/* left */}
            <div className="min-w-96 flex items-center gap-x-1.5 p-1.5 bg-white rounded-md">
                <input className="w-full focus:outline-none focus:ring-0 border-none bg-transparent text-sm" type="text" placeholder="Search for events, pathways, etc" />
                <CiSearch className="text-xl text-neutral-500"/>
            </div>
            {/* right */}
            <div className="flex items-center justify-end gap-x-3">
                <Link href={"/dashboard"}>
                <div className="w-[24px] aspect-square rounded-md overflow-hidden flex items-center justify-center bg-white text-green-500">
                    <IoIosNotifications />
                </div>
                </Link>
                <Link href={"#"}>
                <div className="w-[24px] aspect-square rounded-md overflow-hidden flex items-center justify-center bg-white text-green-500">
                    <IoMdSunny />
                </div>
                </Link>
                <Link href={"/dashboard/profile"}>
                <div className="w-[24px] aspect-square rounded-md overflow-hidden flex items-center justify-center bg-white text-green-500">
                    <RiUser6Fill />
                </div>
                </Link>
            </div>
        </div>
    )
}