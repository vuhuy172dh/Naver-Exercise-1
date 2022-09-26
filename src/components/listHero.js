import Hero from './hero.js'
import LoginPhone from '../assets/phone-login.png'
import ShoppingPhone from '../assets/shopping-phone.png'
import CheckoutPhone from '../assets/checkout-phone.png'

function ListHero() {
  return (
    <div className="w-full">
      <p className="font-poppins font-[600] text-[44px] leading-[36px] text-center mt-16">
        How the app works
      </p>
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
        image={CheckoutPhone}
        title="Checkout"
        subtitle="When you done check out and get it delivered."
        disc="When you done check out and get it delivered with ease."
      />
    </div>
  )
}

export default ListHero
