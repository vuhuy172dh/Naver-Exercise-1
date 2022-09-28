import poster1 from '../assets/poster1.png'
import PosterButton from './posterButton.js'
import PhoneGroup from '../assets/PhoneGroup.png'
import useWindowSize from '../hooks/useWindowSize.js'

function MainPoster() {
  const size = useWindowSize()

  return (
    <div className="w-full flex mb-[40rem] flex-col relative">
      {/* this component for background */}
      <div className="w-full h-[40rem] bg-primary_2">
        <img
          src={poster1}
          alt="main poster"
          className="w-full h-full  object-fill relative z-0 lg:block sm:hidden"
        />
      </div>

      {/* this component for content on background poster */}
      <div className="w-full flex flex-col sm:pt-14 sm:gap-2 lg:pt-16 lg:gap-8 lg:px-48 items-center absolute top-0 z-10">
        {/* this is content*/}
        <div className="flex flex-col items-center gap-4">
          <p className="font-mont font-[700] lg:text-[24px] lg:leading-[36px] sm:text-[16px] sm:leading-[24px] lg:text-primary sm:text-subtitle">
            Food app
          </p>
          <p className="font-poppins font-[700] lg:text-[58px] lg:leading-[80px] sm:text-[36px] sm:leading-[42.5px] lg:text-primary sm:text-title text-center">
            Why stay hungry when you can order form Bella Onojie
          </p>
          <p className="font-mont font-[500] text-[24px] leading-[38px] lg:text-primary sm:text-subtitle text-center">
            Download the bella onoje's food app now on
          </p>
        </div>

        {/* this is button group */}
        <div className="flex sm:flex-col sm:gap-4 lg:flex-row">
          <PosterButton name="Playstore" type="primary" />
          <PosterButton
            name="App store"
            color={size.width >= 1024 ? 'white' : 'orange'}
          />
        </div>

        {/* this is phone poster */}
        <img src={PhoneGroup} alt="Phone" />
      </div>
    </div>
  )
}

export default MainPoster
