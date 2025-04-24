import express from "express";

const app = express();

app.use(express.json());

let data = [];
let id = 0;
// add a new data
app.post("/data", (req, res) => {
  const { name, designation } = req.body;
  console.log(name, designation);
  const newData = { id: ++id, name, designation };
  data.push(newData);
  res.status(201).json(newData);
});

// get all data
app.get("/data", (req, res) => {
  res.json(data);
});

//get one data
app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  const dataItem = data.find((item) => item.id === parseInt(id));
  if (dataItem) {
    res.json(dataItem);
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});
// patch data
app.patch("/data/:id", (req, res) => {
  const { id } = req.params;
  const { name, designation } = req.body;
  const dataItem = data.find((item) => item.id === parseInt(id));
  if (dataItem) {
    dataItem.name = name;
    dataItem.designation = designation;
    res.json(dataItem);
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});

// delete data
app.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  const dataItem = data.find((item) => item.id === parseInt(id));
  if (dataItem) {
    data = data.filter((item) => item.id !== parseInt(id));
    res.json(dataItem);
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
