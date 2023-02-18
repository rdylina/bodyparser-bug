import type { NextApiRequest, NextApiResponse } from 'next'


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
      extended: true,
    },
  },
}


export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  console.log(data)
  res.status(200).json({ name: 'John Doe' })
}