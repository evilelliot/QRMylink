import React, { useState } from 'react';
import MainLayout from "./MainLayout"
import FilesModalComponent from "../components/presentational/modals/FilesModalComponent"
export default function DebugLayout(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const filesData = [
        {title: "google"},{title: "google"},{title: "google"},{title: "google"},{title: "google"},{title: "google"},
        {title: "google"},{title: "google"},{title: "google"},{title: "google"},{title: "google"},{title: "google"},
    ];
    return(
        <MainLayout>
            <div className="w-[90%] mx-auto grid grid-cols-12 [&_div]:rounded-lg gap-2 mt-8">
                <div className="col-span-8 [&_div]:bg-slate-50">
                    <div>lk</div>
                    <div>lk</div>
                </div>
                <div className="md:col-span-4 [&_div]:bg-slate-50 grid grid-cols-3 gap-2 [&_div]:aspect-square [&_div]:p-1 [&_div]:rounded-lg [&_div]:border-t-8 [&_div]:border-y-purple-700">
                    <div className="sm:col-span-12 md:col-span-1 flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold inline-block bg-gradient-to-r bg-gradient-to-tl from-pink-100 via-purple-500 to-blue-300 bg-clip-text text-transparent">{Object.keys(filesData).length}</h1>
                        <button onClick={openModal} type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                            <p className="md:text-xs">
                                <i className="fa-solid fa-file"></i> Archivos
                            </p>
                        </button>
                    </div>
                    <div className="sm:col-span-12 md:col-span-1 flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold inline-block bg-gradient-to-r bg-gradient-to-tl from-pink-100 via-purple-500 to-blue-300 bg-clip-text text-transparent">{Object.keys(filesData).length - 3}</h1>
                        <button type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                            <p className="md:text-xs">
                                <i className="fa-solid fa-link"></i> Links
                            </p>
                        </button>
                    </div>
                    <div className="sm:col-span-12 md:col-span-1 flex flex-col items-center justify-center">
                        <h1 className="text-5xl font-bold inline-block bg-gradient-to-r bg-gradient-to-tl from-pink-100 via-purple-500 to-blue-300 bg-clip-text text-transparent">{
                            Object.keys(filesData).length * 2}  
                        </h1>
                        <button type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                            <p className="md:text-xs">
                                <i className="fa-solid fa-eye"></i> Vistas
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <FilesModalComponent isOpen={isModalOpen} onClose={closeModal} data={filesData}></FilesModalComponent>
        </MainLayout>
    )
};