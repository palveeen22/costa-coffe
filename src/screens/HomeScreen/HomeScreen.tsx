import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, SafeAreaView, ListRenderItem, View } from 'react-native';
import { TMenuItem as MenuItemType, TCategoryType } from './types';
import { filterMenu, menuItems } from './constants';
import Header from './components/Header';
import CategoryButton from './components/CategoryButton';
import MenuItem from './components/MenuItem';
import Footer from './components/Footer';
import useOrder from './hooks/useOrder';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<TCategoryType>(filterMenu[0]);
  const {handleAddItem, totalPrice, points } = useOrder(menuItems);

  const handleCategorySelect = useCallback((category: TCategoryType) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${typeof category === 'string' ? category : category.uri}`);
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
      <FlatList
        data={filterMenu}
        renderItem={renderCategoryItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      />
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
  screenBox : {
    padding: 10,
  },
  categories: {
    paddingVertical:30,
  },
  menuGrid: {
    paddingVertical: 2,
    justifyContent: 'space-between',
  },
  menuContent: {
    paddingBottom: 96,
  },
});

export default HomeScreen;
