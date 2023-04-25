import '@/styles/globals.css'
import { CartProvider } from '../../ctx/cartContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
