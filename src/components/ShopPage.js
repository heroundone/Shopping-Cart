import { useState, useEffect } from "react"
import Items from './Items';
import './../styles/ShopPage.css';

const ShopPage = () => {
    // our shopping cart
    const [cart, setCart] = useState([]);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0)

    const updateCart = (item) => {
        // clone the cart for modification later, setting state with fucntional components does not use merge
        const cartClone = JSON.parse(JSON.stringify(cart))
        // variable to keep track of whether item was already in cart
        let present = false;
        // if the cart is empty just add the item
        if(cart.length === 0) {
            const newItem = {
                name: item.itemName,
                count: item.itemCount
            }
            cartClone.push(newItem)
            setCart(cartClone);
        }
        // cart is not empty, check if it already has at least one of the item
        else {
            cartClone.forEach(product => {
                // if the item is already present, then update the count
                if(product.name === item.itemName) {
                    product.count = parseInt(product.count) + parseInt(item.itemCount);
                    setCart(cartClone);
                    present = true;
                    return false;
                }
            });
            // otherwise item is not already present, add new item to cart
            if(present === false) {
                const newItem = {
                    name: item.itemName,
                    count: item.itemCount
                }
                cartClone.push(newItem)
                setCart(cartClone);
            }
        };
    };

    const updateCartTotal = () => {
        let totalCartItems= 0;
        cart.forEach(item => {
            totalCartItems = parseInt(totalCartItems) + parseInt(item.count);
        })
        setTotalItemsInCart(totalCartItems);
    }

    useEffect (() => {
        updateCartTotal()
    }, [cart])

    return (
        <div>
            <div className="sticky">
              Cart({totalItemsInCart})
              <button type="button">Checkout</button>
            </div>
            <div>
                <Items updateCart={updateCart}/>
            </div>
        </div>
    )
}

export default ShopPage;