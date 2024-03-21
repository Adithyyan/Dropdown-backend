const express = require('express')
const connectDB = require('./db/connectdb')
const web = require('./routes/web')
const cors = require('cors')


const app = express()
app.use(cors())

const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

//databse connection
connectDB(DATABASE_URL)

//json
app.use(express.json())

// Load routes
app.use("/api", web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost${port}`);
})