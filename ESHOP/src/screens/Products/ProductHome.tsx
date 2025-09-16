import React, { FC, useState } from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import ProductCard from './ProductCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SearchedProductList from './SearchProduct';
import Banner from '../../ui/Banner';
import CategoryFilter from './CategoryFilter';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types/navgationType';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addToCart } from '../../redux/cartSlice';
import { useProducts } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleProduct'
>;

const ProductHome: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { products, loading, error, fetchProducts, fetchProductsByCategory } = useProducts();
  const { categories } = useCategories();

  const [search, setSearch] = useState('');
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleCategorySelect = (categoryId: string | 'all') => {
    if (categoryId === 'all') {
      fetchProducts();
    } else {
      fetchProductsByCategory(categoryId);
    }
  };

  // Product Methods
  const searchProduct = (text: string) => {
    if (text === '') {
      setProductsFiltered([]);
      return;
    }
    setProductsFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };



  return (
    <View style={styles.container}>
      <Header title="E-Shop" />
      <SearchBar
        value={search}
        onClear={() => {
          setSearch('');
          setProductsFiltered([]); // reset when cleared
          onBlur();
        }}
        onBlur={onBlur}
        onFocus={openList}
        onChangeText={text => {
          setSearch(text);
          searchProduct(text);
        }}
      />
      {focus === true ? (
        <SearchedProductList
          //   navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <>
          {/* <Image
            source={require('../../assets/banner1.png')}
            style={styles.image}
            resizeMode="cover"
          /> */}
          <Banner />
          <CategoryFilter
            categories={[{ _id: 'all', name: 'All' }, ...categories]}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onCategorySelect={handleCategorySelect}
          />
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000" />
              <Text>Loading products...</Text>
            </View>
          ) : error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : (
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <ProductCard
                  product={item}
                  onPress={() => navigation.navigate('SingleProduct', { productId: item._id })}
                  onAddToCart={() => dispatch(addToCart(item))}
                />
              )}
              keyExtractor={(item, index) =>
                item._id?.toString() || index.toString()
              }
              numColumns={2}
              contentContainerStyle={styles.list}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  list: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProductHome;
