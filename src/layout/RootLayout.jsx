


import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <div className="w-full flex">
            <div className='w-3/12 bg-slate-950 h-screen p-4'>
                <h2 className="text-white text-xl mb-4">Dashboard</h2>
                <ul className="text-white">
                
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Profile</a></li>
                <li className="mb-2"><a href="/category" className="hover:text-gray-400">Category</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Logout</a></li>
                </ul>
            </div>
            <div className='w-9/12 bg-violet-600 h-screen p-4'>
                <Outlet />
            </div>
            </div>
        </>
        );
}

export default RootLayout;