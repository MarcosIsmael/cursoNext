import React from 'react'
import styles from '../Navbar.module.css'
import Head from 'next/head'
import Navbar from '../Navbar'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const MainLayouts = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )

}

export default MainLayouts