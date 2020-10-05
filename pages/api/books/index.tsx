import { NextApiRequest, NextApiResponse } from 'next'
import { allBooks } from '@data/books'

export default (_, res: NextApiResponse) => {
  if (!allBooks) res.status(400).json({ message: 'Dados não encontrados' })
  res.status(200).json(allBooks)
}
