import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

type CategoryType = string | { uri: string };

type TProps = {
  category: CategoryType;
  isSelected: boolean;
  onSelect: (category: CategoryType) => void;
};

const CategoryButton = memo(({ category, isSelected, onSelect }: TProps) => {
  const isImageCategory = typeof category === 'object' && 'uri' in category;

  return (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        isSelected && styles.categoryButtonActive,
      ]}
      onPress={() => onSelect(category)}
    >
      {isImageCategory ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: category.uri }}
            style={[
              styles.categoryImage,
              isSelected && styles.categoryImageActive,
            ]}
          />
          {isSelected && <View style={styles.blackOverlay} />}
        </View>
      ) : (
        <Text
          style={[
            styles.categoryButtonText,
            isSelected && styles.categoryButtonTextActive,
          ]}
        >
          {category}
        </Text>
      )}
    </TouchableOpacity>

  );
});

export const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#25272D',
    borderRadius: 36,
    marginRight: 8,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#fff',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: '#373946',
  },
  imageContainer: {
    position: 'relative',
    width: 22,
    height: 22,
  },
  categoryImage: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  categoryImageActive: {
    opacity: 0.6,
  },
  blackOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    borderRadius: 11,
  },
});

export default CategoryButton;
