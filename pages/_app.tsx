import { Concert_One, Paytone_One, Rubik_Glitch } from '@next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const rubikGlitch = Rubik_Glitch({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik-glitch',
})

const paytoneOne = Paytone_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-paytone-one',
})

const concertOne = Concert_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-concert-one',
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${rubikGlitch.variable} font-cursive font-normal w-screen h-screen overflow-hidden`}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default App
