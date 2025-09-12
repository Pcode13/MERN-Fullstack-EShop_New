import React, { FC } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Category {
  _id: string;
  name: string;
}

interface Props {
  categories: Category[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onCategorySelect: (categoryId: string | 'all') => void;
}

const CategoryFilter: FC<Props> = ({
  categories,
  activeIndex,
  setActiveIndex,
  onCategorySelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {/* All Category */}
      <TouchableOpacity
        style={[styles.badge, activeIndex === -1 ? styles.active : styles.inactive]}
        onPress={() => {
          onCategorySelect('all');
          setActiveIndex(-1);
        }}
      >
        <Text style={styles.badgeText}>All</Text>
      </TouchableOpacity>

      {/* Dynamic Categories */}
      {categories.map((item, index) => (
        <TouchableOpacity
          key={item._id}
          style={[
            styles.badge,
            activeIndex === index ? styles.active : styles.inactive,
          ]}
          onPress={() => {
            onCategorySelect(item._id);
            setActiveIndex(index);
          }}
        >
          <Text style={styles.badgeText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  active: {
    backgroundColor: '#03bafc',
  },
  inactive: {
    backgroundColor: '#a0e1eb',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CategoryFilter;
