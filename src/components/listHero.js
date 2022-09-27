import Hero from './hero.js'
import LoginPhone from '../assets/LoginPhone.png'
import ShoppingPhone from '../assets/ShoppingPhone.png'
import PayPhone from '../assets/PayPhone.png'
import Divider from './divider.js'

function ListHero() {
  return (
    <div className="w-full">
      <div className="flex sm:flex-col lg:flex-col-reverse">
        <p className="sm:my-10 lg:my-16 font-mont font-[600] sm:text-[24px] lg:text-[44px] leading-[36px] text-center">
          How the app works
        </p>
        <Divider />
      </div>
      <Hero
        image={LoginPhone}
        title="Create an account"
        subtitle="Create/login to an existing account to get started"
        disc="An account is created with your email and a disired password"
      />
      <Hero
        image={ShoppingPhone}
        title="Explore varieties"
        subtitle="Shop for your favorites meal as e dey hot."
        disc="Shop for your favorite meals or drinks and enjoy while doing it"
        type="reverse"
      />
      <Hero
        image={PayPhone}
        title="Checkout"
        subtitle="When you done check out and get it delivered."
        disc="When you done check out and get it delivered with ease."
      />
    </div>
  )
}

export default ListHero
