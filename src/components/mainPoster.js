import poster1 from '../assets/poster1.png'
import PosterButton from './posterButton.js'
import PhoneGroup from '../assets/PhoneGroup.png'

function MainPoster() {
  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full">
        <img
          src={poster1}
          alt="main poster"
          className="w-full object-fill relative -z-10 lg:block sm:hidden"
        />
        <div className="w-full h-[40rem] relative -z-10 lg:hidden sm:block bg-primary_2"></div>
      </div>

      <div className="w-full flex flex-col sm:pt-14 sm:gap-6 lg:pt-16 lg:gap-8 lg:px-48 items-center absolute top-0">
        <p className="font-mont font-[700] lg:text-[24px] lg:leading-[36px] sm:text-[16px] sm:leading-[24px] lg:text-primary sm:text-subtitle">
          Food app
        </p>
        <p className="font-poppins font-[700] lg:text-[58px] lg:leading-[80px] sm:text-[36px] sm:leading-[42.5px] lg:text-primary sm:text-title text-center">
          Why stay hungry when you can order form Bella Onojie
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] lg:text-primary sm:text-subtitle text-center">
          Download the bella onoje's food app now on
        </p>

        <div className="flex sm:flex-col sm:gap-4 lg:flex-row">
          <PosterButton name="Playstore" type="primary" />
          <div className="lg:block sm:hidden">
            <PosterButton name="App store" />
          </div>
          <div className="lg:hidden sm:block">
            <PosterButton name="App store" color="orange" />
          </div>
        </div>
      </div>

      <div className="w-full sm:pt-[110%] lg:pt-[40%] flex justify-center relative">
        <img
          src={PhoneGroup}
          alt="Phone"
          className="absolute sm:-top-[20%] lg:-top-[30%]"
        />
      </div>
    </div>
  )
}

export default MainPoster
