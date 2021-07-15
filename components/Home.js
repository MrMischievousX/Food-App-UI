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
import CategoryData from '../assets/Data/categoriesData';
import PopularData from '../assets/Data/PopularData';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../assets/Colors/colors';

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/Images/profile.png')}
              style={styles.profileImage}
            />
            <Entypo name="menu" size={24} color={COLORS.textDark} />
          </View>
        </SafeAreaView>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Food</Text>
          <Text style={styles.subtitleText}>Delivery</Text>
        </View>

        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={16} color={COLORS.textDark} />
          <View style={styles.searchBox}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <View style={styles.categoryFlatListContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CategoryData}
              renderItem={({ item }) => {
                return (
                  <View
                    style={[
                      styles.listItem,
                      {
                        backgroundColor: item.selected
                          ? COLORS.primary
                          : COLORS.background,
                        marginLeft: item.id == 1 ? 20 : 0,
                      },
                    ]}>
                    <Image style={styles.listItemImage} source={item.image} />
                    <Text style={styles.listItemTitle}>{item.title}</Text>
                    <View
                      style={[
                        styles.listItemSelect,
                        {
                          background: item.selected
                            ? COLORS.background
                            : COLORS.secondary,
                        },
                      ]}>
                      <Entypo
                        name="chevron-right"
                        size={10}
                        color={
                          item.selected ? COLORS.textDark : COLORS.background
                        }
                      />
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {PopularData.map((item) => (
            <Pressable
              activeOpacity={0.95}
              key={item.id}
              onPress={() =>
                navigation.navigate('Detail', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={COLORS.primary}
                      />
                      <Text style={styles.popularTopText}>Top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Entypo name="plus" size={10} color={COLORS.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={COLORS.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.textDark,
  },
  subtitleText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: COLORS.textDark,
    marginTop: 5,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
  },
  searchBox: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    marginBottom: 5,
    color: COLORS.textLight,
  },
  categoryContainer: {
    marginTop: 30,
  },
  categoryTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: COLORS.textDark,
    paddingHorizontal: 20,
  },
  categoryFlatListContainer: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    marginRight: 20,
    marginVertical: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 4,
  },
  listItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    marginHorizontal: 20,
  },
  listItemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
  listItemSelect: {
    marginVertical: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  popularWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: COLORS.background,
    borderRadius: 25,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: COLORS.textDark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 15,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: COLORS.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: COLORS.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
