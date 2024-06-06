import type { NextPage } from 'next'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <NavigationHeader></NavigationHeader>
      <Footer/>
    </div>
  )
}

export default Home
