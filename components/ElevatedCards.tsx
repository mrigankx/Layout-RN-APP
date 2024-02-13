import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>And</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  elevatedCard: {
    backgroundColor: '#cad5e2',
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'red',
  },
});

export default ElevatedCards;
