const reverse = 'lg:flex-row-reverse'
const noreverse = 'lg:flex-row'

function Hero({ image, title, subtitle, disc, type }) {
  return (
    <div
      className={`w-full sm:my-10 lg:my-48 sm:px-8 lg:px-56 flex sm:flex-col-reverse lg:flex-row sm:gap-12 lg:gap-48 justify-center items-center ${type === 'reverse' ? reverse : noreverse
        }`}
    >
      <img src={image} alt={title} />
      <div className="flex flex-col gap-10">
        <p className="font-mont font-[700] text-[24px] leading-[36px] text-secondary lg:text-left sm:text-center">
          {title}
        </p>
        <p className="font-mont font-[700] text-[40px] leading-[57px] text-title lg:text-left sm:text-center">
          {subtitle}
        </p>
        <p className="font-mont font-[500] text-[24px] leading-[38px] text-subtitle lg:text-left sm:text-center">
          {disc}
        </p>
      </div>
    </div>
  )
}

export default Hero
