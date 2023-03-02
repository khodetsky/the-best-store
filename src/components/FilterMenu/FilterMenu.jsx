import { setProducts } from "../../redux/productsSlice";
import { getProducts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { FilterLabel, Select, Container } from "./FilterMenu.styled";

export const FilterMenu = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    function filterProducts (e) {
        const filterRule = e.target.value;
        const prodClone = products.slice();

        switch (filterRule) {
            case 'rating':
                prodClone.sort((a, b) => b.rating.rate - a.rating.rate);
                dispatch(setProducts(prodClone));
                break;
            case 'decreasing price':
                prodClone.sort((a, b) => b.price - a.price);
                dispatch(setProducts(prodClone));
                break;
            case 'increasing price':
                prodClone.sort((a, b) => a.price - b.price);
                dispatch(setProducts(prodClone));
                break;
        
            default:
                break;
        }
    }

    return (
        <Container>
            <FilterLabel id="product">Filter by</FilterLabel>
            <Select htmlFor="product" onChange={filterProducts} >
                <option >rating</option>
                <option >decreasing price</option>
                <option >increasing price</option>
            </Select>
        </Container>
    )
}