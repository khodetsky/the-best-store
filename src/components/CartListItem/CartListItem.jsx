import {Container, ImageContainer, Image, DataContainer, Title, TextMid} from "./CartListItem.styled";
import { OperationBtn } from '../OperationBtn/OperationBtn';
import { removeFromCart } from "../../redux/cartSlice";

export const CartListItem = ({ product, title, image, price}) => {

    return (
        <Container>
            <ImageContainer>
                <Image src={`${image}`} alt={title} />
            </ImageContainer>
            <DataContainer>
                <Title>{title}</Title>
                <TextMid>{price} $</TextMid>
                <div>
                    <OperationBtn
                        notification={'The product has been removed from the cart'}
                        target={product}
                        action={removeFromCart}
                        icon='remove-product'
                    >
                        Remove from cart
                    </OperationBtn>
                </div>
            </DataContainer>
        </Container>
    )
}