interface Props{
  title: string
}

export default function Header({title="Header"}: Props) {
  return (
    <header className="mb-12 pb-10 pt-6 px-4 text-center border-b border-b-neutral-200 min-w-full dark:border-b-purple-500">
      <h1 className="text-2xl mx-auto max-w-2xl uppercase font-bold">{title}</h1>
    </header>
  )
}