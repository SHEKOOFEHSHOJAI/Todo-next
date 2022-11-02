const express=require("express")
const cors = require("cors");

const app=express()
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/", (req, res) => {
    // res.send("APS full stack 2");
    res.status(200).json({data:"khashayar"})
});


const start = async () => {
    try {
      
        app.listen(PORT, () => {
            console.log(`server is running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start()