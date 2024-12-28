import Link from 'next/link'
import {FaHome, FaUser, FaPencilRuler } from 'react-icons/fa'
import { BsFillEnvelopeOpenFill, BsBagDashFill, BsFillGearFill } from 'react-icons/bs'

const Header = ({showMenu}) => {
  return (
    <header className={showMenu ? 'header active' : 'header'}>
        <div className="header__logo">
            <h1>Jamil</h1>
        </div>
        <div className="header__nav">
            <nav>
                <ul>
                    <li>
                        <Link href="/"><FaHome /> <span>Home</span></Link>
                    </li>
                    <li><Link href="/about"><FaUser /> <span>About</span></Link></li>
                    <li><Link href="/skills"><FaPencilRuler /> <span>Skills</span></Link></li>
                    {/* <li><Link href="/services"><BsFillGearFill /> <span>Services</span></Link></li> */}
                    <li><Link href="/projects"><BsBagDashFill /> <span>Projects</span></Link></li>
                    <li><Link href="/contact"><BsFillEnvelopeOpenFill /> <span>Contact</span></Link></li>
                </ul>
            </nav>
        </div>
        <div className="header__copyright">
            <p>&copy; 2023 <span>Jamil</span></p>
        </div>
    </header>
  )
}

export default Header