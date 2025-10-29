import { createServer } from "http"
import express from "express"
import { Server } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
  }
})

app.get("/", (req, res) => {
  res.send("Server is running")
})

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id)
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})