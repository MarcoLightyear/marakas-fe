import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationHeader from '../components/NavigationHeader'

const Home: NextPage = () => {
  return (
    <div className='p-5'>
      <NavigationHeader></NavigationHeader>
    </div>
  )
}

export default Home
