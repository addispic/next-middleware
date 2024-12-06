"use client"
import React, {useState} from "react";
import Link from "next/link";
// icons
import { GoHomeFill } from "react-icons/go";
import { TbGraphFilled } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { ImBriefcase } from "react-icons/im";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
export default function NavLinks(){
    // states
    const [navLinks,setNavLinks] = useState({
        options: [
            {
                text: "Home",
                icon: GoHomeFill,
            },
            {
                text: "My Chart",
                icon: TbGraphFilled,
            },
            {
                text: "Messages",
                icon: GrSend,
            },
            {
                text: "Cases",
                icon: ImBriefcase,
            },
            {
                text: "Dashboard",
                icon: BiSolidDashboard,
            },
            {
                text: "Settings",
                icon: MdOutlineSettingsSuggest,
            },
        ]
    })
    return (
        <div className="flex flex-col flex-1 mt-12 gap-y-3">
            {
                navLinks?.options?.map(item=>{{
                    return (
                        <Link key={item.text} href={"#"}>
                            <div className="w-[24px] aspect-square flex items-center justify-center rounded-md overflow-hidden bg-white bg-opacity-15 text-white">
                                <item.icon />
                            </div>
                        </Link>
                    )
                }})
            }
        </div>
    )
}