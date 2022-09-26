import MainPoster from '../components/mainPoster.js'
import Divider from '../components/divider.js'
import ListHero from '../components/listHero.js'
import FooterPoster from '../components/footerPoster.js'

function Home() {
  return (
    <div className="w-full flex relative flex-col items-center">
      <MainPoster />
      <Divider />
      <ListHero />
      <FooterPoster />
    </div>
  )
}

export default Home
