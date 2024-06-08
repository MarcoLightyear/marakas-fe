import type { NextPage } from 'next'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import CollectionsHeader from '../components/CollectionsHeader'

const Collections: NextPage = () => {
  return (
    <div>
      <NavigationHeader/>
      <CollectionsHeader/>
      <Footer/>
    </div>
  )
}

export default Collections
