import { Binary, Code } from "lucide-react";
import { NavCell } from "./navCell";
import { NavMd } from "./navMd";
import Link from "next/link";

export const Header = () => {
    return (
        <section className="container px-4 mx-auto mt-5 fixed flex justify-between items-center z-50">
            <div className="text-2xl">
                <Link href={"/"}>
                <h1 className="flex items-center gap-2 hover:text-blue-500" ><Code /> Portfólio</h1>
                </Link>
            </div>
            <NavMd />
            <NavCell />
        </section>
    );
}