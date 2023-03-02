import { LinkList, LinkStyled } from "./ProductsList.styled";
import { ProductCard } from "../ProductCard/ProductCard";
import { getProducts } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const ProductsList = ({ location }) => {
    const products = useSelector(getProducts);
    return (
        <LinkList>
            {products.map(product => (
                <li key={product.id}>
                    <LinkStyled to={`${product.id}`} state={{ from: location }}>
                        <ProductCard title={product.title} image={product.image} price={product.price} rating={product.rating.rate} />
                    </LinkStyled>
                </li>
            ))}
        </LinkList>
    )
}