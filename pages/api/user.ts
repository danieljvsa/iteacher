import type { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../utils/database'

type ErrorResponseType = {
  message: string
}

type User = {
  _id: string,
  name: string,
  email: string,
  cellphone: string,
  teacher: string,
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<ErrorResponseType | User>): Promise<void> {
  const {db} = await connect() 

  if(req.method === 'POST'){
    const {name, email, cellphone, teacher} = req.body

    if(!name || !email || !cellphone || !teacher){
      return res.status(400).json({message: 'Missing body params'})
    }

    const response = await db.collection('users').insertOne({
      name, 
      email, 
      cellphone, 
      teacher
    })

    return res.status(200).json(response.ops[0])
  } else{
    return res.status(400).json({message: 'Missing request'})
  }
}
