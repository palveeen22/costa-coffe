import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TMenuItem as MenuItemType } from '../types';
import LinearGradient from 'react-native-linear-gradient';


type TProps = {
  item: MenuItemType;
  onAddItem: (id: number) => void;
  isLastItem: boolean;
}

const MenuItem = ({ item, onAddItem, isLastItem }: TProps) => (
  <View style={[styles.menuItem, isLastItem && styles.lastMenuItem]}>
    <Image style={styles.itemImage} source={{ uri: item?.image }} />
    <LinearGradient
        colors={['#E90C69','#FF7066']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.discountBadge}
      >
      {/* <View style={styles.gradientOverlay} /> */}
      <Image source={{ uri: 'https://utfs.io/f/EbyVGwMXeijridXjG7fPwoGecnR3st0bvpyadMAYOWNEHV16' }}
        style={styles.discountIcon}
      />
      <Text style={styles.discountText}>{item?.disc}%</Text>
    </LinearGradient>
    <View style={styles.itemBox}>
      <Text style={styles.itemName}>{item?.name}</Text>
      <Text style={styles.itemWeight}>{item?.weight}</Text>
    </View>
    <View style={styles.bottomContainer}>
      <View style={styles.priceRecommendationContainer}>
        <Text style={styles.itemPrice}>{item?.price} ₽</Text>
        <View style={styles.recommendationContainer}>
          <Image source={{ uri: 'https://utfs.io/f/EbyVGwMXeijrYskln6i6lrTmAg7UjSX0yP8DieVLRoaps3IC' }} style={styles.recommendationIcon}/>
          <Text style={styles.itemRecommendation}>100% рекомендуют</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => onAddItem(item?.id)}>
        <Text style={styles.addButtonText}>+</Text>
        <Text style={styles.addButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    width: '48%',
    backgroundColor: '#25272D',
    borderRadius: 16,
    marginBottom: 10,
    padding: 8,
    overflow: 'hidden',
    position: 'relative',
    height: 296,
  },
  itemBox: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    gap:4,
  },
  itemImage: {
    width: '100%',
    height: 126,
    resizeMode: 'contain',
    borderRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 108,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 8,
    gap: 2,
    overflow: 'hidden',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E90C69',
    opacity: 0.8,
  },
  discountIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
    zIndex: 1,
  },
  itemName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  itemWeight: {
    color: '#A5A9BA',
    fontSize: 12,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  priceRecommendationContainer: {
    marginBottom: 8,
    gap: 6,
  },
  itemPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  recommendationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4,
  },
  itemRecommendation: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
  },
  recommendationIcon: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#3E434D',
    borderRadius: 12,
    width: 'auto',
    height: 36,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  lastMenuItem: {
    marginBottom: 96,
  },
});

export default React.memo(MenuItem);
