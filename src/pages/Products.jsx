import { getAllProducts, getAllCategories } from "../components/Api";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Background, Main } from "./Pages.styled";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { CategoriesMenu } from "../components/CategoriesMenu/CategoriesMenu";
import { FilterMenu } from "../components/FilterMenu/FilterMenu";
import { setProducts } from "../redux/productsSlice";
import { getProducts } from "../redux/selectors";
import { PageFooter } from "../components/PageFooter/PageFooter";

export const Products = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    const [status, setStatus] = useState("loading");
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (products) {
            setStatus('done')
        }
    }, [products])
  
    useEffect(() => {
        getAllProducts().then(r => {
            r.sort((a, b) => b.rating.rate - a.rating.rate);
            dispatch(setProducts(r));
        });
        getAllCategories().then(r => setCategories(r));
    }, [dispatch])

    return (
        <Background>
            <Main>
                {status === "done" && (
                    <>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <CategoriesMenu categories={categories} location={location} />
                            <FilterMenu />
                        </div>
                        <ProductsList location={location} />
                    </>)}
                {status === "loading" && (<Loader />)}
            </Main>
            <PageFooter/>
        </Background>
    )
}