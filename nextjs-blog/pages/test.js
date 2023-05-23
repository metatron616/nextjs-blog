import Head from 'next/head';
import styles from '../styles/Home.module.css';

const test = () => {
    <div >
    <Head>
      <title>test page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <h1>TEST</h1>
        <p>esto es una prueba</p>
    </main>
    <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

    </div>
 }
 export default test;