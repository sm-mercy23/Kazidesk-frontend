import Link from "next/link";
import {useState} from "react";

export default function AppDropdown() {
    const [open, setOpen] = useState(false)
    return (
        <div className="  md:hidden w-max">
            <button onClick={() => setOpen(!open)}
                    className={`w-[50px] h-3/4 pr-2 grid gap-2 ${open ? "is-open" : "is-closed"}`}
            >
                <div id="a"/>
                <div id="b"/>
                <div id="c"/>
            </button>
            {open &&
                < div
                    className={`w-[200px] z-40 ${open ? "h-max" : "h-0"} transition-all grid gap-2 text-white bg-[#4F1919] absolute right-0 mt-5 p-2 rounded-md`}>
                    <Link href="/" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        Home
                    </Link>
                    <Link href="/features" className="self-stretch  font-semibold whitespace-nowrap my-auto p-2.5">
                        Features
                    </Link>

                    <Link href="/features2" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        features2
                    </Link>
                    <Link href="/pricing" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        Pricing
                    </Link>
                    <Link href="/pricing-fees" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        Pricing-fees
                    </Link>
                    <Link href="/newsroom" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        Newsroom
                    </Link>
                    <Link href="/article" className="self-stretch  whitespace-nowrap my-auto p-2.5">
                        article
                    </Link>
                    <Link href="/contact" className="self-stretch  text-white my-auto p-2.5">
                        Contact us
                    </Link>
                    <Link href={"/sign-in"}>
                        <button
                            className="self-stretch border min-h-10  text-white whitespace-nowrap w-max my-auto px-10 py-[11px] rounded-[50px] border-white border-solid">
                            Login
                        </button>
                    </Link>
                    <Link
                        href="/sign-up">


                        <button
                            className="self-stretch bg-white min-h-10 gap-2.5 text-[rgba(179,68,61,1)] w-max my-auto px-10 py-[11px] rounded-[50px]">
                            Get Started
                        </button>


                    </Link>
                </div>}
        </div>
    )
}
