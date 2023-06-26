const path = require ('path')

const express = require ('express')
const app = express()

const PORT = 3030

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'views', 'home.html')))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname,'views', '404.html')))


app.listen(PORT, ()=> console.log(`Server running in http://localhost:${PORT}`))

