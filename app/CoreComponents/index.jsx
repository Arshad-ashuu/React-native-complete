import { View, Text, Image, StyleSheet, Button, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    id: 1,
    title: 'Item 1',
  },
  {
    id: 2,
    title: 'Item 2',
  },
  {
    id: 3,
    title: 'Item 3',
  },
  {
    id: 4,
    title: 'Item 4',
  },
  {
    id: 5,
    title: 'Item 5',
  },
  {
    id: 6,
    title: 'Item 6',
  },
  {
    id: 7,
    title: 'Item 7',
  },
  {
    id: 8,
    title: 'Item 8',
  },
  {
    id: 9,
    title: 'Item 9',
  }
];

const CoreComponents = () => {

  const [text, setText] = useState('');
  return (
    <SafeAreaView >
<ScrollView>
    <View>
      <Text>CoreComponents</Text>
      <Text>image</Text>

      <Image
       source={{ uri: 'https://picsum.photos/200/300' }}
       style={styles.img}
      />
    </View>

    <View>
    <Text>button</Text>

<Button
        title="Click Me"
        color="#841584"
        onPress={() => alert('Button Pressed!')}
      />
    </View>

    <View>
    <Text>TextInput</Text>

    <TextInput
        style={styles.input}
        placeholder="Type here"
        onChangeText={(value) => setText(value)}
      />
      <Text>You entered: {text}</Text>
    </View>

    <View>
    <Text>scrollview</Text>

    <ScrollView
    horizontal>
      {data.map((i) => (
        <Text key={i.id} style={{ fontSize: 20, padding: 20, borderWidth: 1,marginRight:10,borderRadius:8,borderColor:'red' }}> {i.title}</Text>
      ))}
    </ScrollView>

    <ScrollView>
      {data.map((i) => (
              <Text key={i.id} style={{ fontSize: 20, padding: 20, borderWidth: 1,marginBottom:10,borderRadius:8,borderColor:'green' }}> {i.title}</Text>

      ))}
    </ScrollView>
    </View>

    <View>
    <Text>flatlist</Text>

    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <View >
          <Text style={{ fontSize: 20 }}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={{ fontSize: 20, padding: 20, borderWidth: 1,marginRight:10,borderRadius:8,borderColor:'red'}}
    />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CoreComponents

const styles = StyleSheet.create({

  img:{
    width: 200,
    height: 300
  }
})