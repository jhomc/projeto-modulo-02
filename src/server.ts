import express from "express"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});


app.listen(3333);