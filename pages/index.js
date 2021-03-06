import Head from 'next/head'
import Hero from './../components/Hero'
import Timeline from './../components/Timeline'
import Finisher from '../components/Finisher'
import Services from './../components/Services'
import Featured from '../components/Featured'
import Team from './../components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Template business website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <Timeline id='about' bgcolor='bg-gray-200' />

      <Featured id='featured' bgcolor='bg-white' />

      <Services id='services' bgcolor='bg-gray-200' />

      <Finisher id='finisher' bgcolor='bg-gray-900' />

      <Team id='contact' bgcolor='bg-white' />
    </>
  )
}
