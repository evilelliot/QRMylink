import { useEffect } from "react";
import { useUserInfo } from "../../providers/UserProvider";
import { useAuth } from "../../providers/AuthProvider";
import getUserInfo from "../container/GetUserInfo";
import LoadingPageComponent from "./LoadingPageComponent";
import InsightsComponent from "./InsightsComponent";

export default function UserSectionComponent() {
    const { userInfo, setUserInfo } = useUserInfo();
    const { token } = useAuth();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (token) {
                    const data = await getUserInfo(token);
                    setUserInfo(data);
                }
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        };

        if (!userInfo) {
            fetchUserInfo();
        }
    }, [token, userInfo, setUserInfo]);

    if (!userInfo) {
        return <LoadingPageComponent></LoadingPageComponent>;
    }

    const currentuser = userInfo.data;

    return (
        <>
            <div className="w-4/5 mx-auto grid grid-cols-12 gap-4 mt-8">
                <div className="col-span-12 md:col-span-4 shadow-lg shadow-slate-800 rounded-lg border-t-8 border-y-purple-700 p-2 bg-slate-50">
                    <h1 className="text-3xl font-bold text-center">
                        <span className="text-purple-700 font-black">{currentuser.username}</span>
                    </h1>
                </div>
                <InsightsComponent></InsightsComponent>
            </div>
        </>
    );
}