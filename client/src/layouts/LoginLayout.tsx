import { ChangeEvent, FormEvent } from "react";

interface LoginProps {
    username: string;
    password: string;
    error: string;
    onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function LoginLayout({
    username,
    password,
    error,
    onUsernameChange,
    onPasswordChange,
    onSubmit
}: LoginProps) {
    return (
        <form onSubmit={onSubmit} className="max-w-sm mx-auto mt-8 shadow-lg shadow-slate-500 rounded-lg p-2 border-t-8 border-y-purple-700">
            <div className="mt-4">
                <h1 className="text-xl font-bold">
                    Inicio de sesión
                </h1>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu usuario</label>
                <input 
                    type="text" 
                    id="username" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="awesome.nickname" 
                    required 
                    value={username}
                    onChange={onUsernameChange}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="contraseña"
                    required 
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Entrar
            </button>
            <hr className="mb-5 mt-5"/>
            <div className="">
                <h3 className="text-center">
                    <a href="/resetpassword">Olvidé mi contraseña</a>
                </h3>
            </div>
        </form>
    );
}