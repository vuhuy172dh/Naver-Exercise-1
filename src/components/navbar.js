import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavBtn from './navButton.js'

const NavTitile = [
  { title: 'Home', link: '/' },
  { title: 'Product', link: '/' },
  { title: 'Faq', link: '/' },
  { title: 'Contact', link: '/' }
]

function Navbar() {
  return (
    <nav className="block w-full h-[155px]">
      <div className="w-full h-full flex items-center justify-between">
        <div className="inline-block ml-24">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex">
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
      </div>
    </nav>
  )
}

export default Navbar
