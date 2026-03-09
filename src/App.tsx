import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">shadcn/ui funcionando! 🎉</h1>
        <Button>Botão Padrão</Button>
        <Button variant="outline">Botão Outline</Button>
        <Button variant="destructive">Botão Vermelho</Button>
      </div>
    </div>
  )
}

export default App