import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidDiscount } from "react-icons/bi";
import { MdArrowRightAlt } from 'react-icons/md';

const AnnouncedBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div
                id="sticky-banner"
                tabIndex="-1"
                className="fixed top-0 start-0 z-50 flex justify-between w-full p-2 border-b bg-[#141718]"
            >
                <div className="flex items-center mx-auto">
                    <p className="flex inter-font  items-center text-xl font-normal text-white">
                        <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <BiSolidDiscount className="w-8 h-8 text-black" />
                        </span>
                        <span>
                        30% off storewide — Limited time! {' '}
                        <a
    href="https://flowbite.com"
    className="inline-flex justify-center items-center gap-1 font-normal text-[#FFAB00] hover:underline"
>
    Shop now <MdArrowRightAlt className="text-lg" />
</a>

                        </span>
                    </p>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <AiOutlineClose className="w-3 h-3" />
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            </div>
        )
    );
};

export default AnnouncedBar;
