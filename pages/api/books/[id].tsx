import { NextApiRequest, NextApiResponse } from 'next'
import { allBooks } from '@data/books'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      if (!allBooks) res.status(400).json({ message: 'Dados não encontrados' })
      res.status(200).json(allBooks.filter(book => book.id === id))
      break

    default:
      break
  }
}
