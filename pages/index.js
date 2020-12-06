import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <h1>Home</h1>
    </div>
  )
}
