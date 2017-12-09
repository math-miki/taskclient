import io from 'socket.io-client'
import Action from './Action'

let socket = io.connect("http://localhost:3001")

socket.on("receiveCode", (codeValue) => {
  Action.receiveCode(codeValue)
})

export default socket
