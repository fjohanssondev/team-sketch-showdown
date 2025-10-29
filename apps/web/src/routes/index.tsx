import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { Pen } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <Button size="icon">
        <Pen />
      </Button>
    </div>
  )
}