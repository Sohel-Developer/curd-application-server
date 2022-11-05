const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Curd Server is Running')
})


/* MiddelWare */
app.use(cors())
app.use(express.json())


/* Fake Data */

const users = [
    { id: 1, name: "Sohel", email: 'sohel@gmail.com' },
    { id: 2, name: "Rana", email: 'rana@gmail.com' },
    { id: 3, name: "Shanzida", email: 'sanzida@gmail.com' }
]







app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)

})






/*  */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})