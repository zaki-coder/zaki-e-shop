import Image from 'next/image'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import axios from 'axios';

import Hero from '../../components/Hero';
import Categories from '../../components/Categories';
import FeaturedProducts from '../../components/FeaturedProducts';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ featuredProducts }) {
  return (
    <>
      <Head>
        <title>My E-Shop</title>
        <meta name='description' content="Created by Zaki Azizi" />
        <meta name='viewport' content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <NavBar />
        <Hero />
        <Categories />
        <FeaturedProducts products={featuredProducts} />
        <Footer />
      </>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:3000/api/products`);

  return {
    props: {
      featuredProducts: data
    }
  }
}