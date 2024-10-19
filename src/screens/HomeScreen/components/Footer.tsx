import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type TProps = {
  points: number;
  totalPrice: number;
}

const Footer = ({ points, totalPrice }: TProps) => (
  <View style={styles.footer}>
    <View style={styles.pointCols}>
      <Text style={styles.pointColsText}>Вы получите</Text>
      <LinearGradient
        colors={['#E90C69','#FF7066']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.pointsBadge}
      >
        <Image
          source={{ uri: 'https://utfs.io/f/EbyVGwMXeijridXjG7fPwoGecnR3st0bvpyadMAYOWNEHV16' }}
          style={styles.pointsIcon}
        />
        <Text style={styles.pointsText}>{points} баллов</Text>
        </LinearGradient>
    </View>
    <TouchableOpacity style={styles.orderButton}>
      <Text style={styles.orderButtonText}>Перейти к заказу</Text>
      <Text style={styles.orderButtonText2}>{totalPrice} ₽</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#181A1F',
    bottom: 100,
    left: 0,
    right: 0,
    paddingBottom: 32,
    height: 96,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  pointCols: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 6,
  },
  pointColsText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#A5A9BA',
  },
  pointsIcon: {
    width: 12,
    height: 12,
    resizeMode: 'cover',
    marginRight: 4,
  },
  pointsText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  orderButton: {
    backgroundColor: '#BDFF00',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    width: 249,
    height: 42,
  },
  orderButtonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },
  orderButtonText2: {
    color: '#506B00',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default React.memo(Footer);
