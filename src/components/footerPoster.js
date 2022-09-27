import poster2 from '../assets/poster2.png'
import PosterButton from './posterButton'

function FooterPoster() {
  return (
    <div className="w-full relative">
      <img
        src={poster2}
        alt="footer poster"
        className="w-full object-fill relative z-0 lg:block sm:hidden"
      />
      <div className="w-full h-[35rem] relative z-0 bg-title sm:block lg:hidden"></div>
      <div className="w-full h-full px-24 absolute top-0 z-10 flex flex-col gap-4 items-center justify-center text-center">
        <p className="font-mont font-[700] text-[40px] leading-[57px] text-white text-center">
          Download the app now.
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-[#bdbdbd] text-center sm:block lg:hidden">
          Most calendars are designed for teams.
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-white text-center sm:hidden lg:block">
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="w-full sm:flex lg:hidden justify-center gap-6">
          <PosterButton name="Buy now" type="primary" size="medium" />
          <PosterButton
            name="Try for free"
            type="outline"
            size="medium"
            color="white"
          />
        </div>
        <div className="w-full mt-12 sm:hidden lg:flex justify-center gap-6">
          <PosterButton name="Playstore" type="primary" size="medium" />
          <PosterButton
            name="App store"
            type="outline"
            size="medium"
            color="white"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterPoster
