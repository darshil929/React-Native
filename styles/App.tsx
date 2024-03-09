import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './src/components/FlatCards'
import ElevatedCards from './src/components/ElevatedCards'
import FancyCard from './src/components/FancyCard'
import ActionCard from './src/components/ActionCard'
import ContactList from './src/components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App