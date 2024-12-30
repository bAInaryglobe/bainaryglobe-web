
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body
    const user = await prisma.user.create({
      data: { name, email },
    })
    res.status(201).json(user)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}