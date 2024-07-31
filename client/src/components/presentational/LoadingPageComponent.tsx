export default function LoadingPageComponent(){
    return(
        <>
            <div className="w-4/5 animate-flicker mx-auto mt-8 h-[100vh] grid gap-2 grid-cols-12 grid-rows-12">
                <div className="col-span-4 row-span-4 rounded-lg bg-purple-300"></div>
                <div className="col-span-8 row-span-4 rounded-lg bg-purple-300"></div>
                <div className="col-span-12 row-span-6 rounded-lg bg-purple-300">
                </div>
            </div>
        </>
    );
}
