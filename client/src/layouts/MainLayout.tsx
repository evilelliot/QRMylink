import NavbarComponent from "../components/presentational/NavbarComponent";
import NavbarComponentAuth from "../components/presentational/NavbarComponentAuth";
import FooterComponent from "../components/presentational/FooterComponent";

import getUserInfo from "../components/container/GetUserInfo";
import { useAuth } from "../providers/AuthProvider";

import React, { useEffect, useState } from "react";

interface ChildrenProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<ChildrenProps> = ({ children }) => {
    const { token } = useAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            if(token){
                try{
                    const info = await getUserInfo(token);
                    setUserInfo(info);
                }catch(error){
                    console.error("Error: " + error)
                }
            }
        };
        fetch();
    }, [token]);

    
    return (
        <>
            <div className="snap-x">
                <NavbarComponentAuth></NavbarComponentAuth>
                    {children}
                <FooterComponent />
            </div>
        </>
    );
};

export default MainLayout;
