import Link from 'next/link';

const Cart = () => {
    return (  
        <div className="container cart">
            <h1>Cart</h1>
            <p>Your cart is currently empty</p>
            <Link href="/shop"><a className="btn">
                RETURN TO SHOP    
            </a></Link>
        </div>
    );
}

export default Cart;