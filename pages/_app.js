import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-900">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
