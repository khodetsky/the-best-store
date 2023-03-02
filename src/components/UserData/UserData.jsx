import { getUserEmail } from "../../redux/selectors";
import { useSelector } from "react-redux";
import userImg from "../../images/noImage.webp";
import { Container, DataContainer, Image, Title, Text, ImageContainer } from "./UserData.styled";

export const UserData = () => {
    const userEmail = useSelector(getUserEmail);

    return (
        <Container>
            <ImageContainer>
                <Image src={userImg} alt='User image' />
            </ImageContainer>
            <DataContainer>
                <Title>There may be more information about the user here</Title>
                <Text><b>User email:</b> {userEmail} $</Text>
            </DataContainer>
        </Container>
    )
}