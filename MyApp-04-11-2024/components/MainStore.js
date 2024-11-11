import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import Linear Gradient
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons for search icon
import { Category, Banner, Store } from "./StoreData";

const { width } = Dimensions.get("window");

const MainStore = ({ navigation }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  const scrollViewRef = useRef();

  // Automatically scroll the banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => {
        const nextBanner = (prev + 1) % Banner.length;
        scrollViewRef.current?.scrollTo({
          x: nextBanner * width, // Adjust scrolling position based on banner width
          animated: true,
        });
        return nextBanner;
      });
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleScroll = (event) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeBanner) {
      setActiveBanner(slide);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={["#2596be", "#06457b"]} // Aqua to Navy gradient colors
        style={styles.header}
      >
        <View style={styles.headerTextbox}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Ionicons
              name="arrow-back-outline"
              size={22}
              color="#FFFFFF"
              marginRight={10}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ color: "white" }}>Giao đến</Text>
            <Text style={styles.headerText}>
              Đà Nẵng, Việt Nam{" "}
              <Ionicons name="caret-down" size={14} color="#FFFFFF" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsbox}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="reader-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Search Bar with Magnifying Glass */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchBar} placeholder="Bạn đang thèm gì?" />
      </View>

      {/* Category List */}
      <FlatList
        data={Category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image
              source={{ uri: item.CategoryImage || "placeholder-image-url" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.categoryList}
      />

      {/* Banner List with Dots */}
      <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={scrollViewRef} // Reference to the ScrollView for auto-scrolling
        >
          {Banner.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.bannerImage}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {Banner.map((_, index) => (
            <Text
              key={index}
              style={index === activeBanner ? styles.activeDot : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>

      {/* Best Stores Title */}
      <Text style={styles.bestStoresTitle}>
        Cửa hàng tốt nhất trong khu vực
      </Text>

      {/* Store List */}
      <FlatList
        data={Store}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Store", { store: item })}
            style={styles.storeItem}
          >
            <Image
              source={{ uri: item.ImageProduct || "placeholder-image-url" }}
              style={styles.storeImage}
            />
            <Text style={styles.storeName}>{item.Name}</Text>
            <Text style={styles.storeRating}>
              ⭐⭐⭐⭐⭐ {item.Rating}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.storeList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 130, // Adjust height to be smaller
  },
  headerTextbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  iconsbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c5272", // Màu nền đen
    borderRadius: 50,
    padding: 6,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25, // More rounded to match the second image
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: "95%",
    alignSelf: "center",
    top: "-7%",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    fontSize: 16,
    flex: 1,
    width: "95%",
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImage: {
    width: 60, // Smaller than before to match the second image
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ddd",
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12, // Smaller font for category text
    textAlign: "center",
    color: "#333",
  },
  bannerContainer: {
    marginTop: 10,
  },
  bannerImage: {
    width: 375, // Making the banner image fit more tightly
    height: 160,
    borderRadius: 12,
    marginRight: 10,
    marginLeft: 6,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  dot: {
    fontSize: 20,
    color: "darkcyan",
    marginHorizontal: 2,
    opacity: 0.4,
  },
  activeDot: {
    fontSize: 25,
    bottom:4,
    color: "darkcyan",
    marginHorizontal: 2,
  },
  bestStoresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#333",
  },
  storeList: {
    paddingVertical: 10,
  },
  storeItem: {
    marginRight: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    width: 170,
    height: 190,
  },
  storeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  storeName: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  storeRating: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
});

export default MainStore;
