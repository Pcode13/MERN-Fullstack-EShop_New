import React, { FC } from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ListRenderItemInfo,
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
  const renderItem = ({ item, index }: ListRenderItemInfo<Category>) => (
    <TouchableOpacity
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
  );

  return (
    <View style={styles.container}>
      {/* All Category */}
      {/* <TouchableOpacity
        style={[
          styles.badge,
          activeIndex === -1 ? styles.active : styles.inactive,
        ]}
        onPress={() => {
          onCategorySelect('all');
          setActiveIndex(-1);
        }}
      >
        <Text style={styles.badgeText}>All</Text>
      </TouchableOpacity> */}

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginTop: 10,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  active: {
    backgroundColor: '#000000',
  },
  inactive: {
    backgroundColor: 'rgba(7, 7, 7, 0.09)',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CategoryFilter;
