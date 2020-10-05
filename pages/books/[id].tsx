import { GetServerSideProps } from 'next'
import axios from 'axios'
import styles from '../../styles/Book.module.css'
import Link from 'next/link'

export default function Book({ book }) {
  const status =
    book.status === 'D'
      ? '📗 Disponível'
      : `📕 Emprestado para ${book.usuarioEmprestimo} em ${book.dataEmprestimo}`

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <small className={styles.isbn}>{book.isbn}</small>

        <div className={styles.image}>
          <img className={styles.image_book} src={book.imagem} alt="" />
        </div>

        <h1>{book.titulo}</h1>
      </header>

      <section className={styles.info}>
        <span>
          Autor: <strong>{book.autor}</strong>
        </span>

        <span>
          Editora: <strong>{book.editora}</strong>
        </span>

        <span>
          Tags: <strong>{book.tags}</strong>
        </span>
      </section>

      <section className={styles.description}>
        <p>{book.descricao}</p>
      </section>

      {/* <section className={styles.status}>
        <span>
          <strong> {status}</strong>
        </span>
      </section> */}

      <section className={styles.actions}>
        <Link href={`/`}>
          <a className={styles.button}>
            <span>⬅ Voltar</span>
          </a>
        </Link>
      </section>
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query

  const res = await axios.get(`http://localhost:3000/api/books/${id}`)
  const book = await res.data[0]

  // Pass data to the page via props
  return { props: { book } }
}
