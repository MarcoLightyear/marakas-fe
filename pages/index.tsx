import type { NextPage } from 'next'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import LandingImage from '../components/LandingImage'

const Home: NextPage = () => {
  return (
    <div>
      <NavigationHeader></NavigationHeader>
      <LandingImage src="https://marakasstorageaccount.blob.core.windows.net/marakas-image-container/LandingPageCatalog.svg" />
      <LandingImage src="https://marakasstorageaccount.blob.core.windows.net/marakas-image-container/LandingPageIllustrations.svg" />
      <Footer/>
    </div>
  )
}

export default Home
