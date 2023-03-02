import { Background, Main } from "./Pages.styled";
import { getProduct } from "../components/Api";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductData } from "../components/ProdustData/ProductData";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn/GoBackBtn";
import { PageFooter } from "../components/PageFooter/PageFooter";

export const ProductDetails = () => {
    const { productId } = useParams();
    const location = useLocation();
    console.log(location, "prod")

    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        getProduct(productId).then(r => { setProduct(r); setStatus('done')})
    }, [productId])

    return (
        <Background>
            <Main>
                {status === "done" && (
                    <>
                        <GoBackBtn location={location}/>
                        <ProductData
                            product={product}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            rating={product.rating.rate}
                            description={product.description}
                        />
                    </>
                )}
                
                {status === "loading" && (<Loader />)}
            </Main>
            <PageFooter/>
        </Background>
    )
}