import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/canvas')({
  ssr: false,
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/canvas"!</div>
}