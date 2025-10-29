import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello from the server!")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})