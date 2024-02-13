import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://static.toiimg.com/photo/msid-92089121,width-96,height-65.cms',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>River</Text>
          <Text style={styles.cardLabel}>Rajasthan</Text>
          <Text style={styles.cardDesc}>
            Rose is a flower of love. This flower have a color of red
          </Text>
          <Text style={styles.cardFooter}>12mins away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, New Delhi</Text>
          <Text style={styles.cardDesc}>Taj mahal is a place of lovers.</Text>
          <Text style={styles.cardFooter}>50mins away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://blog.thomascook.in/wp-content/uploads/2017/01/Santorini-Greece.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beach</Text>
          <Text style={styles.cardLabel}>Greece</Text>
          <Text style={styles.cardDesc}>Beach is a place to chill.</Text>
          <Text style={styles.cardFooter}>20mins away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?cs=srgb&dl=pexels-pixabay-208745.jpg&fm=jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Bridge</Text>
          <Text style={styles.cardLabel}>Paris</Text>
          <Text style={styles.cardDesc}>Bridge is in Paris.</Text>
          <Text style={styles.cardFooter}>5mins away</Text>
        </View>
      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/scenic-sunrise-above-bagan-in-myanmar-royalty-free-image-1658261755.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Balloons</Text>
          <Text style={styles.cardLabel}>This is beautiful place.</Text>
          <Text style={styles.cardDesc}>
            Balloons are flying over the head.
          </Text>
          <Text style={styles.cardFooter}>30mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 30},
  card: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    elevation: 3,
    backgroundColor: 'white',
  },
  cardImage: {
    height: 180,
    marginBottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000',
    fontSize: 20,
    marginBottom: 4,
  },
  cardDesc: {
    color: '#758283',
    fontSize: 16,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000',
    fontSize: 12,
  },
});
