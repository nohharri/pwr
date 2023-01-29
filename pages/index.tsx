import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import Landing from '@/components/Landing/Landing'
import MeetCoaches from '@/components/MeetCoaches/MeetCoaches'
import WhatWeOffer from '@/components/WhatWeOffer/WhatWeOffer'
import ElevateYourGame from '@/components/ElevateYourGame/ElevateYourGame'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gradient-to-r dark:from-primary dark:to-primary-dark m-auto">
          <div className="align-middle items-center m-auto h-full">
            <div className="m-auto w-xl">
              <Header />
              <Landing />
              <MeetCoaches />
              <WhatWeOffer />
              <ElevateYourGame />
            </div>
            <Footer />
          </div>
        </div>
    </>
  )
}
