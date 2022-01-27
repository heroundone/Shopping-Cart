import { useState, useEffects } from "react";
import uniqid from 'uniqid';
import './../styles/Items.css';

const Items = (props) => {

    // catalogue of all items available in shop
    const [catalogue, setCatalogue] = useState([
        {
            itemName: 'Lawnmower',
            itemPrice: 300,
            itemCount: 0
        },
        {
            itemName: 'Wheelbarrow',
            itemPrice: 150,
            itemCount: 0
        },
        {
            itemName: 'Shovel',
            itemPrice: 30,
            itemCount: 0
        },
        {
            itemName: 'Garden Hose',
            itemPrice: 80,
            itemCount: 0
        },
        {
            itemName: 'Sprinkler',
            itemPrice: 20,
            itemCount: 0
        },
        {
            itemName: 'Fertilizer 10lb',
            itemPrice: 40,
            itemCount: 0
        },
        {
            itemName: 'Weed Killer 2 Gallon',
            itemPrice: 30,
            itemCount: 0
        },
        {
            itemName: 'Sod 10 sqft',
            itemPrice: 45,
            itemCount: 0
        },
        
    ]);

    // updates the count for specific item that user is trying to buy
    const onChangeHandler = (e) => {
        const productName = e.target.parentElement.id;
        const productCount = e.currentTarget.value
        const catalogueClone = JSON.parse(JSON.stringify(catalogue));
        catalogueClone.forEach(item => {
            if(item.itemName === productName) {
                item.itemCount = productCount;
            }
        });
        setCatalogue(catalogueClone);
    };

    // adds item to cart
    const onClickHandler = (e) => {
        e.preventDefault();
        const productName = e.target.parentElement.id;
        // index tracker
        let i = 0;
        // find the item in the catalogue, that the user is trying to add to their cart
        catalogue.forEach(item => {
            if(item.itemName === productName) {
                const itemToPass = catalogue[i];
                props.updateCart(itemToPass);
                return;
            }
            i += 1;
        })
    };



    return (
        <div className='catalogue'>
            {catalogue.map(item => {
                return <div key={uniqid()} className="item">
                    <h3>{item.itemName}</h3>
                    <h3>Price: ${item.itemPrice}</h3>
                    <form id={item.itemName}>
                        <input type="number" min="1" step="1" value={item.itemCount} required onChange={onChangeHandler}/>
                        <input type="submit" value="Add To Cart" onClick={onClickHandler}/>
                    </form>
                </div>
            })}
        </div>
    )

}

export default Items