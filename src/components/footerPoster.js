import poster2 from '../assets/poster2.png'
import PosterButton from './posterButton'
import useWindowSize from '../hooks/useWindowSize.js'

function FooterPoster() {
  const size = useWindowSize()

  return (
    <div className="w-full relative">
      {/* this is footer poster backgroudn */}
      <div className="w-full relative z-0 ">
        <img
          src={poster2}
          alt="footer poster"
          className="w-full object-fill lg:block sm:hidden"
        />
        <div className="w-full h-[35rem] bg-title sm:block lg:hidden"></div>
      </div>

      {/* this is content */}
      <div className="w-full h-full px-24 absolute top-0 z-10 flex flex-col gap-4 items-center justify-center text-center">
        <p className="font-mont font-[700] text-[40px] leading-[57px] text-white text-center">
          Download the app now.
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-[#bdbdbd] text-center">
          {size.width >= 1024
            ? 'Available on your favorite store. Start your premium experience now'
            : 'Most calendars are designed for teams.'}
        </p>
        <div className="w-full flex justify-center gap-6">
          <PosterButton
            name={size.width >= 1024 ? 'Playstore' : 'Buy now'}
            type="primary"
            size="medium"
            onClick={() => { }}
          />
          <PosterButton
            name={size.width >= 1024 ? 'App store' : 'Try for free'}
            type="outline"
            size="medium"
            color="white"
            onClick={() => { }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterPoster
