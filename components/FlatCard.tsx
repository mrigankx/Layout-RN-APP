import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  redCard: {
    backgroundColor: 'red',
  },
  greenCard: {
    backgroundColor: 'green',
  },
  blueCard: {
    backgroundColor: 'blue',
  },
});
