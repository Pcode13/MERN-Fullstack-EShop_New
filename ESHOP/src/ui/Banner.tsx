import React, { FC, useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('window');

const Banner: FC = () => {
  const [bannerData, setBannerData] = useState<string[]>([]); // typed as string[]

  useEffect(() => {
    setBannerData([
      'https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
      'https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
      'https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            index={0}
            // showPagination={true}
            // paginationStyle={{ bottom: 30 }}
            // dotStyle={{
            //   backgroundColor: 'rgba(255, 255, 255, 0.5)',
            //   width: 5,
            //   height: 5,
            // }}
            // activeDotStyle={{ backgroundColor: '#fff', width: 10, height: 10 }}
            // paginationDefaultColor="rgba(0, 0, 0, 0.2)"
            // paginationActiveColor="#000"
            loop={true}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item, index) => (
              <Image
                key={index} // use index to avoid duplicate key warning
                style={styles.imageBanner}
                resizeMode="cover"
                source={{ uri: item }}
              />
            ))}
          </Swiper>
          <View style={{ height: 20 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
