import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type TProps = {
  category: string;
  isSelected: boolean;
  onSelect: (category: string) => void;
};

const CategoryButton = memo(({ category, isSelected, onSelect }: TProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        isSelected && styles.categoryButtonActive,
      ]}
      onPress={() => onSelect(category)}
    >
      <Text
        style={[
          styles.categoryButtonText,
          isSelected && styles.categoryButtonTextActive,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
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
});

export default CategoryButton;
