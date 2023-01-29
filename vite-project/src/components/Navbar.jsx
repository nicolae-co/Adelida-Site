import logo from '../assets/adelidaLogo.svg'
import location from '../assets/location.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

export default function Navbar() {
    return (
        <nav className='d-flex align-items-center'>
            <img src={logo} className='nav--logo' alt='Adelida Logo' />
            <h1>Adelida</h1>
            <ul className='d-flex'>
                <li className='d-flex align-items-center'>
                    <img src={location} className='location' alt='location' />
                    <div><h6>Botosani</h6></div>
                </li>
                <li className='d-flex align-items-center'>
                    <img src={phone} className='phone' alt='phone' />
                    <h6>0753536287</h6>
                </li>
                <li className='d-flex align-items-center'>
                    <img src={email} className='email' alt='email' />
                    <h6>adelida.tehnic@gmail.com</h6>
                </li>
            </ul>
        </nav>
    )
}