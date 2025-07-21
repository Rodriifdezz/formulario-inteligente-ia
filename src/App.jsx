import React from 'react'
import DynamicForm from './components/DynamicForm'

export default function App() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200">
      <h1 className="text-3xl font-bold mb-6">Formulario Inteligente</h1>
      <DynamicForm />
    </div>
  )
}