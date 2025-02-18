import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App Typescript Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>

      <main>
        <h1>Home Page</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
