import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ToDo from '../component/to-do'
export default function Home() {
  return ( 
    <div className={styles.container}>
      <Head>
        <title>ToDo app</title>
        <meta name="description" content="ToDo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <ToDo/>
       
      </main>

     
    </div>
  )
}
