import '../styles/globals.css'
import type { AppProps } from 'next/app'
const colors = require('../constant/colors')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-white">
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${colors.back};
        }
      `}</style>
    </div>
  )
}

export default MyApp
