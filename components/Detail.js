import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../assets/Colors/colors';
import Ingredients from '../assets/Data/ingredients';

export default function Detail({ route, navigation }) {
  const { item } = route.params;
  return (
    <ScrollView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.headerWrapper}>
        <Pressable activeOpacity={0.95} onPress={() => navigation.goBack()}>
          <View style={[styles.star, { backgroundColor: 'white' }]}>
            <Entypo name="chevron-left" size={12} color="black" />
          </View>
        </Pressable>
        <View style={styles.star}>
          <Entypo name="star" size={12} color="white" />
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <View style={styles.detailWrapper}>
        <View>
          <View style={styles.detailText}>
            <Text style={styles.detailTitle}>Size</Text>
            <Text style={styles.detailSubtitle}>Medium 14</Text>
          </View>
          <View style={styles.detailText}>
            <Text style={styles.detailTitle}>Crust</Text>
            <Text style={styles.detailSubtitle}>Thin Crust</Text>
          </View>
          <View style={styles.detailText}>
            <Text style={styles.detailTitle}>Delivery In</Text>
            <Text style={styles.detailSubtitle}>30 min</Text>
          </View>
        </View>
        <View>
          <Image style={styles.pizza} source={item.image} />
        </View>
      </View>
      <View style={styles.ingWrapper}>
        <Text style={styles.ingTitle}>Ingredients</Text>
        <FlatList
          data={Ingredients}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={[styles.ingItem, { marginLeft: item.id == 1 ? 20 : 0 }]}>
                <Image source={item.image} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.order}>
        <Text style={styles.orderText}>Place An Order</Text>
        <Entypo name="chevron-right" size={20} color="black" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  orderText: {
    fontSize: 18,
    marginRight: 10,
    fontFamily: 'Montserrat-Semibold',
  },
  order: {
    width: '90%',
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    flexDirection: 'row',
    alignSelf:"center"
  },
  ingItem: {
    backgroundColor: 'white',
    paddingVertical: 5,
    marginRight: 15,
    marginVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 4,
  },
  ingWrapper: {
    marginTop: 30,
  },
  ingTitle: {
    fontSize: 18,
    marginLeft: 20,
    fontFamily: 'Montserrat-Bold',
  },
  detailTitle: {
    fontSize: 14,
    color: COLORS.textLight,
    fontFamily: 'Montserrat-Regular',
  },
  detailSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  detailText: {
    marginBottom: 20,
  },
  pizza: {
    width: 300,
    height: 180,
    marginLeft: 40,
    resizeMode: 'contain',
  },
  detailWrapper: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  price: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.price,
  },
  priceWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
  titleWrapper: {
    marginTop: 30,
    paddingLeft: 20,
    width: '50%',
  },
  headerWrapper: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  star: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 4,
  },
});
