import Nav from '../components/Nav'
import Head from 'next/head'

export default function About(){
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Nav />
      <h1>About</h1>
      <div>
        <img src="/vercel.svg" alt=""/>
      </div>
      <button className='btn btn-primary'>click</button>
    </>
  )
}