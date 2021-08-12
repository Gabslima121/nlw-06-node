import 'reflect-metadata'
import express, { Request, Response, NextFunction, response } from 'express';
import 'express-async-errors'

import { router } from './routes';

import './database'

const app = express();
const port = 3000

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message,
    })
  }

  res.status(500).json({
    status: false,
    message: 'Internal Server Error'
  })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))