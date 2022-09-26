import poster2 from '../assets/poster2.png'
import PosterButton from './posterButton'

function FooterPoster() {
  return (
    <div className="w-full flex flex-col relative items-center">
      <img src={poster2} alt="main poster" className="w-full object-fill" />
      <div className="absolute top-1/2 translate-y-[-50%] flex flex-col items-center">
        <p className="font-mont font-[700] text-[40px] leading-[57px] text-primary">
          Download the app now
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-primary mt-6">
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="flex justify-center gap-4 mt-16">
          <PosterButton name="Playstore" type="primary" size='medium' />
          <PosterButton name="App store" size='medium' />
        </div>
      </div>
    </div>

  )
}

export default FooterPoster
