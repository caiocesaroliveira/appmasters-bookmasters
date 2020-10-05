import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import styles from '../styles/Home.module.css'

export default function Home({ books }) {
  return (
    <>
      <Head>
        <title>BookMasters - AppMasters</title>
        <link rel="icon" href="" />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <header>
          <h1 className={styles.title}>Book Masters</h1>
        </header>
        <section>
          {books.map(book => (
            <Link href={`/books/${book.id}`} key={book.id}>
              <div className={styles.list}>
                <div className={styles.image}>
                  <img
                    className={styles.image_book}
                    src={book.imagem}
                    alt={book.titulo}
                  />
                </div>

                <div className={styles.info_book}>
                  <div className={styles.info_text}>
                    <h3 className={styles.info_title}>{book.titulo}</h3>
                    <p>Autor: {book.autor}</p>
                    <p>Tag: {book.tags}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  //Fetch data from external API
  const res = await axios.get(`http://localhost:3000/api/books`)
  const data = await res.data
  // Pass data to the page via props
  return { props: { books: data } }
}
