interface MessageProps {
  text: string
}

export default function Message({ text }: MessageProps){
  return (
    <div className="flex bg-white px-4 py-2 rounded shadow-xs">
      <p className="text-sm">{text}</p>
    </div>
  )
}