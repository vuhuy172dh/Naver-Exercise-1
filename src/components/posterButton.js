const primary = 'bg-secondary'
const outline = 'bg-transparent border border-primary'

function PosterButton({ name, type }) {
  return (
    <button
      className={`text-primary font-mont font-[700] text-[24px] px-14 py-5 rounded-[35px] ${type === 'primary' ? primary : outline
        }`}
    >
      {name}
    </button>
  )
}

export default PosterButton
