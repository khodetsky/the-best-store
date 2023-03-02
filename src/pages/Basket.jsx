import { Background, Main, BasketContainer } from "./Pages.styled";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../redux/selectors";
import { CartList } from "../components/CartList/CartList";
import { OperationBtn } from "../components/OperationBtn/OperationBtn";
import { removeAll } from "../redux/cartSlice";
import { PageFooter } from "../components/PageFooter/PageFooter";

export const Basket = () => {
    const navigate = useNavigate();
    const cart = useSelector(getCart);

    const [totalPrice, setTotalPrice] = useState(null)

    useEffect(() => {
        let price = 0;

        for (let product of cart) {
            price += product.price;
        }

        setTotalPrice(price.toFixed(2));

    }, [cart])

    const handleBtnClick = () => {
        navigate("/", { replace: true });
    }

    return (
        <Background>
            <Main>
                {cart.length > 0
                ?   <>
                        <CartList cartArr={cart} />
                        <BasketContainer >
                            <p style={{fontSize: 24, marginTop: 20, marginBottom: 20}}>Total price: {totalPrice} $</p>
                            <div onClick={handleBtnClick}>
                                <OperationBtn
                                    notification={'The payment was successful. Thank you for shopping.'}
                                    icon='buy'
                                    action={removeAll}
                                    target={[]}
                                >
                                    Buy all
                                </OperationBtn>
                            </div>
                            
                        </BasketContainer>
                    </>
                :   <BasketContainer>
                        <h2>Your shopping cart is empty</h2>
                    </BasketContainer>
                }
                
            </Main>
            <PageFooter/>
        </Background>
    )
}