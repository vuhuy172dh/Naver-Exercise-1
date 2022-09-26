import poster1 from '../assets/poster1.png'
import PhonePoster from './phonePoster'
import PosterButton from './posterButton.js'

function MainPoster() {
  return (
    <div className="w-full flex flex-col relative items-center">
      <img
        src={poster1}
        alt="main poster"
        className="w-full object-fill relative -z-10"
      />
      <PhonePoster />
      <div className="absolute top-[10%] flex flex-col items-center z-20">
        <p className="font-mont font-[700] text-[24px] leading-[36px] text-primary">
          Food app
        </p>
        <p className="font-poppins font-[700] text-[58px] leading-[80px] text-primary">
          Why stay hungry when
        </p>
        <p className="font-poppins font-[700] text-[58px] leading-[80px] text-primary">
          you can order form Bella Onojie
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-primary my-12">
          Download the bella onoje's food app now on
        </p>
        <div className="flex justify-center gap-8">
          <PosterButton name="Playstore" type="primary" />
          <PosterButton name="App store" />
        </div>
      </div>
    </div>
  )
}

export default MainPoster
