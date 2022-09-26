const df = 'px-40'
const reverse = 'flex-row-reverse pr-16 pl-72'

function Hero({ image, title, subtitle, disc, type }) {
  return (
    <div
      className={`w-full flex justify-center items-center ${
        type === 'reverse' ? reverse : df
      } `}
    >
      <img src={image} alt={title} />
      <div className="flex flex-col justify-start gap-6">
        <p className="font-mont font-[700] text-[24px] leading-[36px] text-secondary">
          {title}
        </p>
        <p className="font-mont font-[700] text-[40px] leading-[57px] text-title">
          {subtitle}
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-subtitle">
          {disc}
        </p>
      </div>
    </div>
  )
}

export default Hero
