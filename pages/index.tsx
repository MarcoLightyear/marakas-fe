import type { NextPage } from 'next'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import LandingImage from '../components/LandingImage'
import History from '../components/History'

const Home: NextPage = () => {
  return (
    <div>
      <NavigationHeader></NavigationHeader>
      <LandingImage src="https://marakasstorageaccount.blob.core.windows.net/marakas-image-container/LandingPageCatalog.svg" />
      <History />
      <LandingImage src="https://marakasstorageaccount.blob.core.windows.net/marakas-image-container/LandingPageIllustrations.svg" />
      <Footer/>
    </div>
  )
}

export default Home
