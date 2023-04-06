import './CartWidget.css'
import cart from './assets/cart.png'

const CartWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {0}
        </div>
    );
}

export default CartWidget