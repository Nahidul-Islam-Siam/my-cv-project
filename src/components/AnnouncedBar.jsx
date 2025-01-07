import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

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
                className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            >
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg
                                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 19"
                            >
                                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                            </svg>
                            <span className="sr-only">Light bulb</span>
                        </span>
                        <span>
                            New brand identity has been launched for the{' '}
                            <a
                                href="https://flowbite.com"
                                className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
                            >
                                Flowbite Library
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
