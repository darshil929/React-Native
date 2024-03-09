import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Darshil Thakkar',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/117098560?s=400&v=4',
    },
    {
      uid: 2,
      name: 'Darshil Thakkar',
      status: 'I Love To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/117098560?s=400&v=4',
    },
    {
      uid: 3,
      name: 'Darshil Thakkar',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/117098560?s=400&v=4',
    },
    {
      uid: 4,
      name: 'Darshil Thakkar',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/117098560?s=400&v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 8,
    backgroundColor: '#333',
    elevation: 4,
    borderRadius: 8
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  userStatus: {
    fontSize: 12,
  },
})