const express = require('express');
require('dotenv').config();
const connectDb = require('./db/connect');
const app = express();
const taskRouter = require('./routers/task');
app.use(express.json())
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Hello TeskManager');
})
app.use('/api/v1/tasks', taskRouter);
const port = process.env.PORT || 5000;
const start = async () => {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server is listening at ${port}`);
    });
}

start();