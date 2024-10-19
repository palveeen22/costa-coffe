import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, SafeAreaView, ListRenderItem, View } from 'react-native';
import { TMenuItem as MenuItemType, TCategoryType, TImageCategory, TTextCategory } from './types';
import Header from './components/Header';
import CategoryButton from './components/CategoryButton';
import MenuItem from './components/MenuItem';
import Footer from './components/Footer';
import useOrder from './hooks/useOrder';
import { filterMenu, menuItems } from './constants';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<TTextCategory | TImageCategory>(filterMenu[0]);
  const { handleAddItem, totalPrice, points } = useOrder(menuItems);

  const handleCategorySelect = useCallback((category: TCategoryType) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category} `);
  }, []);

  const renderCategoryItem: ListRenderItem<TCategoryType> = useCallback(({ item }) => (
    <CategoryButton
      category={item}
      isSelected={selectedCategory === item}
      onSelect={handleCategorySelect}
    />
  ), [selectedCategory, handleCategorySelect]);

  const renderMenuItem: ListRenderItem<MenuItemType> = useCallback(({ item, index }) => (
    <MenuItem item={item} onAddItem={handleAddItem} isLastItem={(index === menuItems.length - 1) || (index === menuItems.length - 2)} />
  ), [handleAddItem]);

  const keyExtractor = useCallback((item: TCategoryType) => typeof item === 'string' ? item : item.uri, []);
  const menuKeyExtractor = useCallback((item: MenuItemType) => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenBox}>
        <Header />
        <View style={styles.filterContainer}>
          <FlatList
            data={filterMenu}
            renderItem={renderCategoryItem}
            keyExtractor={keyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          />
        </View>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={menuKeyExtractor}
          numColumns={2}
          columnWrapperStyle={styles.menuGrid}
          contentContainerStyle={styles.menuContent}
        />
        <Footer points={points} totalPrice={totalPrice} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },
  screenBox: {
    padding: 10,
  },
  categories: {
    paddingVertical: 30,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#25272D',
    borderRadius: 36,
    marginRight: 8,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuGrid: {
    paddingVertical: 2,
    justifyContent: 'space-between',
  },
  menuContent: {
    paddingBottom: 96,
  },
  categoryImage: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});

export default HomeScreen;
