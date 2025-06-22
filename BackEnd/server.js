import express from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = []

app.post('/usuarios', async (req, res) => {

    await prisma.User.create({
        data: {
            email: req.body.email,
            password: req.body.password
        }
    })

    res.status(201).json(req.body)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.User.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            password: req.body.password
        }
    })

    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res)  => {

    const users = await prisma.User.findMany()
    res.status(200).json(users)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.User.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(204).send()
})



app.listen(3000)