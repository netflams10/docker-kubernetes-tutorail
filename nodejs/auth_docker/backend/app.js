const app = require('./config/express')();

const PORT = process.env.NODE_PORT || 5000


app.listen(PORT, () => console.log(`App running on port ${PORT}`))