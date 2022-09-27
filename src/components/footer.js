import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

function Footer() {
  return (
    <div className="w-full flex sm:flex-col sm:gap-4 sm:my-8 lg:flex-row lg:my-16 lg:px-56 items-center justify-between">
      <img src={logo} alt="logo" className="sm:hidden lg:block" />
      <div className="flex items-center gap-8">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <p className="font-roboto font-[700] text-[12px] leading-[18px] text-footer sm:hidden lg:block">
        Copywright 2020 Bella Onojie.com
      </p>
      <p className="font-roboto font-[700] text-[12px] leading-[18px] text-footer text-center lg:hidden">
        Just type what's on your mind and we'll
      </p>
    </div>
  )
}

export default Footer
