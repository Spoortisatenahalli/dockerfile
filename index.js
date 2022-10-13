const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "name": "Spoorti Satenahalli"
        },

        {
            "id": "2",
            "name": "Spoortu"
        },
    ])
})


app.listen(9000, () => {
    console.log("listning from port 9000");
})