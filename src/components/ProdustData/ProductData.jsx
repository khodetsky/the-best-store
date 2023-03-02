import {
    Container, DataContainer, Image, Title, Text, RatingContainer, TextMid,
    ImageContainer, RatingBox
} from "./ProductData.styled";
import { OperationBtn } from "../OperationBtn/OperationBtn";
import { addToCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";
import { getCart } from "../../redux/selectors";

export const ProductData = ({ product, image, title, price, rating, description }) => {
    const cart = useSelector(getCart);
    const [isAlreadyAdded, setIsAlreadyAdded] = useState(null);

    useEffect(() => {
        for (let elem of cart) {
            if (elem.id === product.id) {
                setIsAlreadyAdded(true);
            } else {
                setIsAlreadyAdded(false);
            }
        }
    }, [cart, product])

    function ratingColor(rating) {
        if (rating <= 2) {
            return 'red';
        } else if (rating > 2 && rating <= 4) {
            return 'yellow';
        } else {
            return '#00c700';
        }
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt={title} />
            </ImageContainer>
            <DataContainer>
                <Title>{title}</Title>
                <Text><b>Description:</b> {description}</Text>
                <RatingContainer style={{display: 'flex', alignItems: 'center'}}>
                        <p>Rating:</p>
                    <RatingBox color={ratingColor(rating)}>{rating}</RatingBox>
                </RatingContainer>
                <TextMid><b>Price:</b> {price} $</TextMid>
                <div >
                    <OperationBtn
                        isAlreadyAdded={isAlreadyAdded}
                        notification={'The product has been added to the cart'}
                        icon='add-product'
                        action={addToCart}
                        target={product}
                    >
                        Add to cart
                    </OperationBtn>
                </div>
            </DataContainer>
        </Container>
    )
}