import { Background, Main } from "./Pages.styled";
import { PageFooter } from "../components/PageFooter/PageFooter";
import { getUserStatus } from "../redux/selectors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UserData } from "../components/UserData/UserData";

export const PersonalOffice = () => {
    const isSignIn = useSelector(getUserStatus);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignIn) {
            navigate("/signIn", { replace: true })
        }
    }, [isSignIn, navigate])

    return (
        <Background>
            <Main>
                <UserData/>
            </Main>
            <PageFooter/>
        </Background>
    )
}