import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from './content/about'
import Portfolio from './content/portfolio'
import Contact from './content/contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raeng Castagna</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Navbar />
      <About />

      <Portfolio />
      <Contact />
    </div>
  )
}
