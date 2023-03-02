import { Background, Main } from "./Pages.styled";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProductsInCategory } from "../components/Api";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn/GoBackBtn";
import { setProducts } from "../redux/productsSlice";
import { getProducts } from "../redux/selectors";
import { PageFooter } from "../components/PageFooter/PageFooter";

export const Category = () => {
    const { category } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (products) {
            setStatus('done')
        }
    }, [products])

    useEffect(() => {
        getProductsInCategory(category).then(r => dispatch(setProducts(r)))
    }, [category, dispatch])

    return (
        <Background>
            <Main>
                {status === "done" && (
                    <>
                        <GoBackBtn location={location.state.from}/>
                        <ProductsList products={products} location={location} />
                    </>
                )}
                {status === "loading" && (<Loader />)}
            </Main>
            <PageFooter/>
        </Background>
    )
}