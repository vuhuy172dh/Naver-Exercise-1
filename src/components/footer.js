import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

function Footer() {
  return (
    <div className="my-16 w-full flex items-center justify-between px-40">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-8">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <p className="font-roboto font-[700] text-[12px] leading-[18px] text-footer">
        Copywright 2020 Bella Onojie.com
      </p>
    </div>
  )
}

export default Footer
