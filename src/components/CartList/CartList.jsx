import { CartListItem } from "../CartListItem/CartListItem";

export const CartList = ({cartArr}) => {

    return (
        <ul>
            {cartArr.map(product => (
                <li key={product.id}>
                    <CartListItem
                        product={product}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                </li>
            ))}
        </ul>
    )
}