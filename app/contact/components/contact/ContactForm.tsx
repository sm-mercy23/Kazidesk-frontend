import React, {useState} from "react";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({name: "", email: "", message: ""});
    };

    return (
        <form className={"contact-form"} onSubmit={handleSubmit}>
            <div className="flex w-[844px] max-w-full gap-[24px_5px] flex-wrap mt-[30px]">
                <div
                    className="flex flex-1 min-w-[300px] flex-col items-stretch justify-center grow shrink w-[298px] px-[25px] py-5 rounded-[10px] max-md:px-5">
                    <label
                        htmlFor="name"
                        className="text-[rgba(79,25,25,1)] text-xl font-medium leading-[1.2]"
                    >
                        Your name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent focus:outline-none"
                        required
                    />
                    {/*<div className="max-w-full w-[322px] mt-[45px] max-md:mt-10">*/}
                    {/*    <div className="border min-h-px w-full border-[rgba(179,68,61,1)] border-solid"/>*/}
                    {/*</div>*/}
                </div>
                <div
                    className="flex flex-1 min-w-60 flex-col items-stretch justify-center grow shrink w-[298px] px-[25px] py-5 rounded-[10px] max-md:px-5">
                    <label
                        htmlFor="email"
                        className="text-black text-xl font-medium leading-[1.2]"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent focus:outline-none"
                        required
                    />
                    {/*<div className="max-w-full w-[322px] mt-[45px] max-md:mt-10">*/}
                    {/*    <div className="border min-h-px w-full border-[rgba(179,68,61,1)] border-solid"/>*/}
                    {/*</div>*/}
                </div>
                <div
                    className="bg-white flex min-w-60 flex-col items-stretch justify-center grow shrink w-[770px] px-[25px] py-5 rounded-[10px] max-md:max-w-full max-md:px-5">
                    <label
                        htmlFor="message"
                        className="text-[#4F1919] text-xl font-medium leading-[1.2]"
                    >
                        Tell us how we can help
                    </label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-transparent focus:outline-none"
                        required
                    />
                    {/*<div className="rotate-[-1.734723475976807e-18rad] max-w-full w-[794px] mt-[45px] max-md:mt-10">*/}
                    {/*    <div*/}
                    {/*        className="border min-h-px w-full border-[rgba(179,68,61,1)] border-solid max-md:max-w-full"/>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="flex items-center gap-[35px] font-medium flex-wrap mt-[30px] max-md:max-w-full">
                <button
                    type="submit"
                    className="justify-center items-center bg-[#4F1919] self-stretch flex gap-2.5 text-xl text-[#F1B59E] leading-[1.2] my-auto px-[30px] py-5 rounded-[40px] max-md:px-5"
                >
                    <div className="self-stretch my-auto">Send Request</div>
                    <img
                        src="/auth/send.png"
                        alt="Send icon"
                        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                    />
                </button>
                <div className="self-stretch min-w-60 gap-2.5 text-sm text-[#4f1919] leading-5 my-auto p-2.5">
                    By clicking the Send request you agree
                    <br/>
                    to the{" "}
                    <Link href={"/policy"} className="font-semibold text-[rgba(179,68,61,1)]">Privacy Policy</Link>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
