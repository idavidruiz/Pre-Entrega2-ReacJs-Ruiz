import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/'>DrumShop</Link>
        <div className="Categories">
            <NavLink to='/category/pearl' >Pearl</NavLink>
            <NavLink to='/category/mapex' >Mapex</NavLink>
            <NavLink to='/category/tama' >TAMA</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar