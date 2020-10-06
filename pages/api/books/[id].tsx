import { NextApiRequest, NextApiResponse } from 'next'
// import { allBooks } from '@data/books'

import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req

  switch (method) {
    case 'GET':
      const books = db.get('books').value()
      res.status(200).json(books.filter(book => book.id === id))
      break

    default:
      break
  }
}
