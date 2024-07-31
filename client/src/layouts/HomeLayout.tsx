import MainLayout from "./MainLayout"
import JumbotronComponent from "../components/presentational/JumbotronComponent"
export default function HomeLayout(){
    return(
        <>
            <MainLayout>
                <JumbotronComponent></JumbotronComponent>
            </MainLayout>
        </>
    )
};