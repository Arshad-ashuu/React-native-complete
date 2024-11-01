import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebaseConfig";

const Notes = () => {
  const auth = getAuth();
  const user = auth.currentUser; // Get the current logged-in user
  const notesCollection = collection(db, 'notes'); // Reference to the 'notes' collection in Firestore

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null); // To track the note being edited
  const [editingText, setEditingText] = useState(''); // To track the text of the note being edited

  useEffect(() => {
    fetchNotes();
  }, [user]);

  const addNotes = async () => {
    if (user) {
      await addDoc(notesCollection, {
        notes: text,
        userId: user.uid,
        createdAt: new Date(),
      });
      setText('');
      fetchNotes();
    } else {
      console.log("No user logged in");
    }
  };

  const fetchNotes = async () => {
    if (user) {
      const q = query(notesCollection, where("userId", "==", user.uid));
      const data = await getDocs(q);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      console.log("No user logged in");
    }
  };

  const deleteNotes = async (id) => {
    const noteDoc = doc(db, 'notes', id);
    await deleteDoc(noteDoc);
    fetchNotes();
    alert("Notes Deleted successfully");
  };

  const updateNotes = async (id) => {
    const noteDoc = doc(db, 'notes', id);
    await updateDoc(noteDoc, { notes: editingText }); // Update the note
    setEditingNoteId(null); // Clear the editing state
    setEditingText(''); // Clear the text input
    fetchNotes(); // Refresh the notes
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter notes"
          placeholderTextColor="#888"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.btn} onPress={addNotes}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={styles.flatlist}>
              {editingNoteId === item.id ? (
                <>
                  <TextInput
                    value={editingText}
                    onChangeText={setEditingText}
                    style={styles.editInput}
                  />
                  <TouchableOpacity onPress={() => updateNotes(item.id)}>
                    <Text style={styles.editIcon}>✅</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.noteText}>{item.notes}</Text>
                  <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={() => {
                      setEditingNoteId(item.id);
                      setEditingText(item.notes); // Set the text to the current note's text
                    }}>
                      <Text style={styles.editIcon}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteNotes(item.id)}>
                      <Text style={styles.deleteIcon}>🗑️</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:20,
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "70%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  editInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "70%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    fontSize:16,
    height:46,
    width:80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  flatlistContainer: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
  flatlist: {
    width: "48%",
    margin: "1%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  noteText: {
    fontSize: 16,
    color: "#333",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editIcon: {
    fontSize: 20,
  },
  deleteIcon: {
    fontSize: 20,
  },
});
