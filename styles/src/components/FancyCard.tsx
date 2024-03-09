import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://www.theportlandcentre.co.uk/wp-content/uploads/2020/11/20160613_201554-MONO-SFW.jpg'
        }}
        style = {styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>The Gym</Text>
            <Text style = {styles.cardLabel}>Take care of your body. It's the only place you have to live.</Text>
            <Text style = {styles.cardDescription}>At THE GYM, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul.</Text>
            <Text style = {styles.cardFooter}>The Gym</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      card: {
        width: 350,
        height: 370,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
      },
      cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#fff'
      },
      cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6
      },
      cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
      },
      cardTitle: {
        color: '#333',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
      },
      cardLabel: {
        color: '#333',
        fontSize: 14,
        marginBottom: 12
      },
      cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1
      },
      cardFooter: {
        color: '#333',
      }
})