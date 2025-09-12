import React, { FC, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../../types/shop';
import ProductsData from '../../dummyJson/products.json';
import categories from '../../dummyJson/categories.json';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SearchedProductList from './SearchProduct';
import { BANNER } from '../../assets/constant';
import Banner from '../../ui/Banner';
import CategoryFilter from './CategoryFilter';

const productsData = ProductsData as unknown as Product[];

interface Props {}

const ProductHome: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  // const [productsFilters, setProductsFilters] = useState<Product[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
  const [focus, setFocus] = useState();
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleCategorySelect = (categoryId: string | 'all') => {
    console.log('Selected category:', categoryId);
    // filter products here based on categoryId
  };

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

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
            categories={categories}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onCategorySelect={handleCategorySelect}
          />
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={p => console.log('Clicked:', p.name)}
              />
            )}
            keyExtractor={(item, index) =>
              item._id?.toString() || index.toString()
            }
            numColumns={2}
            contentContainerStyle={styles.list}
          />
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
});

export default ProductHome;
