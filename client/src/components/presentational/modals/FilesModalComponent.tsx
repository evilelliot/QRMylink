import React, { useEffect } from 'react';

export default function FilesModalComponent({ isOpen, onClose, data }) {
    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }

        return () => {
            body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const filescount = Object.keys(data).length;
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center">
            <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-md transition-all duration-300"
                onClick={onClose}
            ></div>
            <div className="relative p-4 w-full max-w-2xl max-h-full z-10">
                <div className="relative bg-slate-100 rounded-lg shadow-lg dark:bg-gray-700 transition-all duration-300 transform scale-100">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h1 className="text-2xl font-bold inline-block bg-gradient-to-r bg-gradient-to-tl from-pink-100 via-purple-500 to-blue-300 bg-clip-text text-transparent">
                            <i className="fa-solid fa-file"></i> Archivos
                        </h1>
                        <button 
                            type="button" 
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Cerrar modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        Contenido de {filescount} archivos
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={onClose} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aceptar</button>
                        <button onClick={onClose} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}