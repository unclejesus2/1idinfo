import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>1:ID - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to 1:ID" />
        <p className="description">
          Reach us at ktl@1id.info for developer support!
        </p>
        <p className="description">
          <a href="https://www.1id.one/">Main site</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
