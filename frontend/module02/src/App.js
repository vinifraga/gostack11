import React, { useState, useEffect } from 'react'
import api from './services/api'

import Header from './components/Header'
import './App.css'

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([])

  // useState retorna um array com 2 posições
  // 
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego Fernandes"
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App