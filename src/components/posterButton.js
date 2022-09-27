const primary = 'bg-secondary'
const outline = 'bg-transparent border'
const medium = 'text-[16px] leading-[28px] rounded-[10px] px-7'
const large = 'text-[24px] leading-[36px] rounded-[35px] px-14'
const white = 'text-primary border-primary'
const orange = 'text-secondary border-secondary'

function PosterButton({ name, type, size, color }) {
  return (
    <button
      className={`${color === 'orange' ? orange : white} font-mont font-[700] ${size === 'medium' ? medium : large
        } py-5 ${type === 'primary' ? primary : outline}`}
    >
      {name}
    </button>
  )
}

export default PosterButton
