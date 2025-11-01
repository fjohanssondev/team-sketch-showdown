import Canvas from '@/components/canvas'
import Conversation from '@/components/chat/conversation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { io } from "socket.io-client"

export const Route = createFileRoute('/canvas')({
  ssr: false,
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });
  }, [])

  return (
    <div className='flex flex-1'>
      <div className='flex-1'>
        <Canvas />
      </div>
      <div className='w-md bg-neutral-100 border-l border-neutral-400 px-4 py-6'>
        <Conversation messages={["asd"]} />
        <div className='flex items-center space-x-2 mt-4'>
          <Input placeholder='Skriv ett meddelande...' />
          <Button>Skicka</Button>
        </div>
      </div>
    </div>
  )
}