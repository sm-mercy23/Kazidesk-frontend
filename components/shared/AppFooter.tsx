import React from "react";
import Link from "next/link";

const AppFooter: React.FC = () => {
    return (
        <footer className="bg-[#4F1919] grid min-h-[791px] w-full   px-16 py-11 max-md:max-w-full max-md:px-5">
           
            <div
                className="grid gap-2 auto-rows-max justify-center place-items-center w-[95%]   px-5  mt-[70px] max-md:mt-10">
                <div className="justify-between gap-10 flex text-white flex-wrap ">
                    <div className="font-normal md:w-[25%] grid my-auto">
                        <div className="flex w-max gap-3 text-[40px]">
                            <img
                                src="/auth/icons/Logo.png"
                                alt="KaziDesk Logo"
                                className="aspect-[1] object-contain w-10 shrink-0"
                            />
                            <span>Kazidesk</span>
                        </div>
                        <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2.5  leading-6 p-2.5">
                            At KaziDesk, we don't just organize tasks—we unlock productivity.
                            With simplicity, collaboration, and efficiency at our core, we
                            deliver a workspace solution that streamlines workflows, connects
                            teams, and paves the way for a smoother, smarter workday for
                            everyone
                        </div>
                    </div>
                    <div
                        // className="flex w-max gap-[40px_95px] text-base leading-[1.2] flex-wrap my-auto max-md:max-w-full">
                        className="flex flex-wrap gap-10 ">
                        <div className="grid auto-rows-max md:grid-flow-row grid-cols-2 md:grid-cols-1 gap-10">
                            {/* <div className="max-w-full  whitespace-nowrap"> */}
                            <div className={"grid auto-rows-max gap-4"}>
                                <div className="font-semibold">Company</div>
                                <nav className="w-full font-normal">
                                    <Link href="/about" className="block">
                                        about
                                    </Link>
                                    <Link href="/products" className="block mt-2.5">
                                        products
                                    </Link>
                                    <Link href="/services" className="block mt-2.5">
                                        services
                                    </Link>
                                    <Link href="/projects" className="block mt-2.5">
                                        projects
                                    </Link>
                                    <Link href="/newsroom" className="block mt-2.5">
                                        newsroom
                                    </Link>
                                </nav>
                            </div>
                            {/* </div> */}
                            <div className={"grid auto-rows-max gap-4"}>
                                <div className="font-semibold">Services</div>
                                <nav className="w-full font-normal">
                                    <Link href="/services" className="block">
                                        our services
                                    </Link>
                                    <Link href="/projects" className="block mt-2.5">
                                        projects
                                    </Link>
                                    <Link href="/consultation" className="block mt-2.5">
                                        consultation
                                    </Link>
                                    <Link href="/request-service" className="block mt-2.5">
                                        request a service
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="">
                            <div className="max-w-full w-full">
                                <div className={"grid auto-rows-max gap-4"}>
                                    <div className="font-semibold">legal & compliance</div>
                                    <nav className="w-full font-normal">
                                        <Link href="/privacy" className="block">
                                            privacy policy
                                        </Link>
                                        <Link href="/terms" className="block mt-2.5">
                                            terms & conditions
                                        </Link>
                                        <Link href="/cookies" className="block mt-2.5">
                                            cookies policy
                                        </Link>
                                        <Link href="/certifications" className="block mt-2.5">
                                            certifications
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            <div className="max-w-full w-full mt-[55px] max-md:mt-10">
                                <div className={"grid auto-rows-max gap-4"}>
                                    <div className="font-semibold">Resources & Insights</div>
                                    <nav className="flex w-full flex-col items-stretch font-normal">
                                        <Link href="/investors" className="block">
                                            Investors
                                        </Link>
                                        <Link href="/partnership" className="text-center mt-2.5">
                                            partnership opportunities
                                        </Link>
                                        <Link href="/quote" className="block mt-2.5">
                                            request a quote
                                        </Link>
                                        <Link href="/projects" className="block mt-2.5">
                                            projects
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center gap-2 flex-wrap mt-[125px] max-md:mt-10"
                >
                    <Link
                        href="/privacy"
                        className="self-stretch gap-2.5 text-white  text-center leading-[1.2] my-auto p-2.5"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="self-stretch gap-2.5  text-white  text-center leading-[1.2] my-auto p-2.5"
                    >
                        Terms & Conditions
                    </Link>
                    <div className="self-stretch min-w-60 gap-2.5  text-white  text-center leading-[1.2] my-auto p-2.5">
                        © 2025 KaziDesk, Inc. All rights reserved.
                    </div>

                    <div className="self-stretch  flex w-max  items-center gap-2 my-auto">
                        <a href="https://facebook.com" aria-label="Facebook">
                            <img
                                src="/auth/icons/facebook.png"
                                alt="Facebook"
                                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                            />
                        </a>
                        {/* <div className="self-stretch flex w-[18px] shrink-0 h-[18px] my-auto" /> */}
                        <a href="https://twitter.com" aria-label="Twitter">
                            <img
                                src="/auth/icons/twitter.png"
                                alt="Twitter"
                                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                            />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <img
                                src="/auth/icons/instagram.png"
                                alt="Instagram"
                                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                            />
                        </a>
                        <a href="https://whatsApp.com" aria-label="whatsApp">

                            <img
                                src="/auth/icons/whatsapp.png"
                                alt="whatsapp"
                                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                            />
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            <img
                                src="/auth/icons/linkedin.png"
                                alt="LinkedIn"
                                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
