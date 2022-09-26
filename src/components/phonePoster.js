import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'

function PhonePoster() {
  return (
    <div className="w-full h-[600px] flex relative justify-center ">
      <img
        src={phone1}
        alt="phone"
        className="absolute bottom-0 translate-x-[-20%] translate-y-[5%] z-10"
      />
      <img
        src={phone2}
        alt="phone"
        className="absolute top-0 translate-y-[-10%] translate-x-[30%] z-0"
      />
    </div>
  )
}

export default PhonePoster
