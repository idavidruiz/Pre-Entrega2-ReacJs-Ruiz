import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/'>DrumShop</Link>
        <div className="Categories">
            <NavLink to='/category/pearl' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pearl</NavLink>
            <NavLink to='/category/mapex' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mapex</NavLink>
            <NavLink to='/category/tama' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>TAMA</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar