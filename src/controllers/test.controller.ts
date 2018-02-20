import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send('fulfilled'))

export const TestController: Router = router
