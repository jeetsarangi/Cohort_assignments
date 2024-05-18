const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const rootRouter = require("./routes/index");

app.use(cors());
app.use(express.json())
app.use("/api/v1", rootRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});