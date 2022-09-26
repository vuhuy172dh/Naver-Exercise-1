import { Link } from 'react-router-dom'

function NavBtn({ title, link, color = 'text-title' }) {
  return (
    <div className={`px-5 mx-10 font-mont font-[600] ${color}`}>
      <Link to={link}>{title}</Link>
    </div>
  )
}

export default NavBtn
