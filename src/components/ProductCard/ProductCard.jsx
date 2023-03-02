import { Card, Image, Title, BoldText, ImageBox, RatingContainer } from "./ProductCard.styled";
import placeholderImg from "../../images/noImage.webp";

export const ProductCard = ({ title, image, price, rating }) => {
    function editTitle(title) {
        if (title.length > 30) {
            const shortTitle = title.slice(0, 31) + '...';
            return shortTitle;
        } else {
            return title;
        }
    }

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
        <Card>
            <ImageBox>
                <Image src={image ? image : placeholderImg} alt={title} />
                <RatingContainer color={ratingColor(rating)}>{rating}</RatingContainer>
            </ImageBox>
            <Title>{editTitle(title)}</Title>
            <BoldText>{price} $</BoldText>
        </Card>
    )
}