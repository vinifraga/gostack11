import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego Fernandes"
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {/* <View style={styles.container}>
        {projects.map(project =>
          <Text key={project.id} style={styles.project}>{project.title}</Text>
        )}
      </View> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text key={project.id} style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  project: {
    color: "#FFF",
    fontSize: 30,
  },
  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16
  }
})