import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'John kalita',
      status: 'active',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4GgPoZj474n44-j9XS7FJyXhwjGrYqNHoGXEkczoAA&s',
    },
    {
      uid: 2,
      name: 'Rose Das',
      status: 'inactive',
      imageUrl:
        'https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg',
    },
    {
      uid: 3,
      name: 'Marie Goswami',
      status: 'active',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4GgPoZj474n44-j9XS7FJyXhwjGrYqNHoGXEkczoAA&s',
    },
    {
      uid: 4,
      name: 'Ballu Bora',
      status: 'active',
      imageUrl:
        'https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg',
    },
    {
      uid: 5,
      name: 'Raju Das',
      status: 'active',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4GgPoZj474n44-j9XS7FJyXhwjGrYqNHoGXEkczoAA&s',
    },
    {
      uid: 6,
      name: 'Dopa Gupta',
      status: 'inactive',
      imageUrl:
        'https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg',
    },

    {
      uid: 7,
      name: 'Marlo Sharma',
      status: 'active',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4GgPoZj474n44-j9XS7FJyXhwjGrYqNHoGXEkczoAA&s',
    },
    {
      uid: 8,
      name: 'Billu Talukdar',
      status: 'active',
      imageUrl:
        'https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg',
    },
    {
      uid: 9,
      name: 'Godadhor Das',
      status: 'active',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4GgPoZj474n44-j9XS7FJyXhwjGrYqNHoGXEkczoAA&s',
    },
    {
      uid: 10,
      name: 'Harry Kalita',
      status: 'inactive',
      imageUrl:
        'https://wallpapers.com/images/hd/tom-and-jerry-pictures-2qo6el27bq295eqy.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>My Contacts</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(contact => {
          return (
            <View key={contact?.uid} style={styles.userCard}>
              <Image
                source={{uri: contact?.imageUrl}}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{contact?.name}</Text>
                <Text style={styles.userStatus}>{contact?.status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 3,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8d3daf',
    marginBottom: 5,
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  userStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
