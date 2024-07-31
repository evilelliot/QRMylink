import { useEffect } from "react";
import MainLayout from "./MainLayout";
import { UserInfo, useUserInfo } from "../providers/UserProvider";
import getUserInfo from "../components/container/GetUserInfo";
import { useAuth } from "../providers/AuthProvider";
import UserSectionComponent from "../components/presentational/UserSectionComponent";

export default function DashboardLayout() {
    /*
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
        return <div>Loading user information...</div>;
    }

    const currentuser = userInfo.data;
    */
    return (
        <MainLayout>
            <UserSectionComponent></UserSectionComponent>
        </MainLayout>
    );
}
