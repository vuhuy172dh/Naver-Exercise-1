import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavBtn from './navButton.js'
import NavIcon from '../assets/nav-icon.png'

const NavTitile = [
  { title: 'Home', link: '/' },
  { title: 'Product', link: '/' },
  { title: 'Faq', link: '/' },
  { title: 'Contact', link: '/' }
]

function Navbar() {
  return (
    <nav className="block w-full lg:h-[155px] sm:h-[100px]">
      <div className="w-full h-full flex items-center justify-between">
        <div className="inline-block lg:ml-24 sm:ml-6">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="sm:w-[100px] lg:w-full"
            />
          </Link>
        </div>
        <div className="lg:flex sm:hidden">
          {NavTitile.map((item) =>
            item.title === 'Home' ? (
              <NavBtn
                title={item.title}
                link={item.link}
                color="text-secondary"
              />
            ) : (
              <NavBtn title={item.title} link={item.link} />
            )
          )}
        </div>
        <div className='lg:hidden sm:inline-block mr-6'>
          <button>
            <img src={NavIcon} alt='icon' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
