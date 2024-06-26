import Head from 'next/head'
import Radio from '../components/Radio'
import Newspaper from '../components/Newspaper'


export default function Home() {
  return (
    <div>
      <Head>
        <title>News - Juan P. Romano</title>
      </Head>
    <Radio />
    <Newspaper />
    </div>
  )
}
