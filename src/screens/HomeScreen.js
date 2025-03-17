import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';
import { colors } from '../theme/colors';

const LOKI_BACKGROUND = { uri: 'https://i.imgur.com/JXa1JTe.jpg' }; // Placeholder URL for Loki background
const LOKI_LOGO = { uri: 'https://i.imgur.com/b1MCEnc.png' }; // Placeholder URL for Loki logo

const HomeScreen = () => {
  return (
    <ImageBackground source={LOKI_BACKGROUND} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image source={LOKI_LOGO} style={styles.logo} />
            <Text style={styles.title}>Welcome to Loki's Domain</Text>
            <Text style={styles.subtitle}>The God of Mischief awaits</Text>
          </View>
          
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardInner}>
                <Text style={styles.cardTitle}>Loki's Timeline</Text>
                <Text style={styles.cardDescription}>
                  Explore the sacred timeline and see where Loki's adventures have taken him
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardInner}>
                <Text style={styles.cardTitle}>Variants</Text>
                <Text style={styles.cardDescription}>
                  Discover the many versions of Loki across the multiverse
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardInner}>
                <Text style={styles.cardTitle}>TVA Database</Text>
                <Text style={styles.cardDescription}>
                  Access the Time Variance Authority's restricted files
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Begin Glorious Purpose</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.gold,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginTop: 10,
    textAlign: 'center',
  },
  cardsContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.gold,
    overflow: 'hidden',
  },
  cardInner: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.emerald,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: colors.gold,
  },
  buttonText: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
