import Message from "./message";

interface ConversationProps {
  messages: string[]
}

export default function Conversation({ messages }: ConversationProps){
  return (
    <section>
      <div className="flex flex-col space-y-4">
        <Message text="Hej" />
        <Message text="Hej" />
        <Message text="Hej" />
        <Message text="Hej" />
        <Message text="Hej" />
      </div>
    </section>
  )
}