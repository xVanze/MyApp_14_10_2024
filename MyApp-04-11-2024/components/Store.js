import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For using icons
import { useNavigation } from '@react-navigation/native';

const Store = ({ route }) => {
  const { store } = route.params; // Get the store details from navigation params
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(store.Product)[0]); // Default selected category
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        {/* Store Image */}
        <Image source={{ uri: store.ImageProduct }} style={styles.storeImage} />

        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("MainStore")}>
            <Ionicons
              name="arrow-back-outline"
              size={20}
              color="#FFFFFF"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 30,
                padding: 7,
              }}
            />
          </TouchableOpacity>
          <Ionicons
            name="heart-outline"
            size={20}
            color="#FFFFFF"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: 30,
              padding: 7,
              left: 340,
            }}
          />
          <Ionicons
            name="share-social-outline"
            size={20}
            color="#FFFFFF"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: 30,
              padding: 7,
              left: 350,
            }}
          />
        </View>

        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={{ uri: store.Logo }} style={styles.logoImage} />
        </View>

        {/* Store Name */}
        <Text style={styles.storeName}>{store.Name}</Text>

        {/* Active Time */}
        <Text style={styles.activeTime}>{store.ActiveTime}</Text>

        {/* Store Details (Row with three sub-views) */}
        <View style={styles.storeDetailsContainer}>
          <View style={styles.detailView}>
            <Text style={styles.rating}>⭐ {store.Rating}</Text>
            <Text style={styles.reviewTime}>{store.ReviewTime} reviews</Text>
          </View>
          <View
            style={{ borderRightWidth: 1, borderColor: "gray", opacity: 0.4 }}
          ></View>
          <View style={styles.detailView}>
            <Ionicons name="location-sharp" size={18} color="red" />
            <Text style={styles.address}>Địa chỉ quán</Text>
          </View>
          <View
            style={{ borderRightWidth: 1, borderColor: "gray", opacity: 0.4 }}
          ></View>
          <View style={styles.detailView}>
            <Text style={styles.deliveryTime}>⏱{store.DeliveryTime}</Text>
            <Text style={styles.deliveryLabel}>dự kiến giao</Text>
          </View>
        </View>
      </View>

      {/* Body Section (Product List and Category Tabs) */}
      <View style={styles.bodyContainer}>
        {/* Category Tabs */}
        <View style={styles.categoryTabsContainer}>
          {Object.keys(store.Product).map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryTab,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryTabText,
                  selectedCategory === category &&
                    styles.categoryTabTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Product List */}
        {store.Product[selectedCategory] &&
        store.Product[selectedCategory].length > 0 ? (
          <FlatList
            data={store.Product[selectedCategory]}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image
                  source={{ uri: item.ImageProduct }}
                  style={styles.productImage}
                />
                <View style={styles.productDetails}>
                  {/* Product Name */}
                  <Text style={styles.productName}>{item.name}</Text>

                  {/* Product Rating */}
                  <Text style={styles.productRatingText}>
                    ⭐⭐⭐⭐⭐ {item.rating}
                  </Text>

                  {/* Pricing Section */}
                  <View style={styles.productPricing}>
                    <Text style={styles.discountedPrice}>
                      {item.discountedPrice}đ
                    </Text>
                    <Text style={styles.originalPrice}>
                      {item.originalPrice}đ
                    </Text>
                  </View>

                  {/* Sales Info and Discount Label */}
                  <View style={styles.productRating}>
                    <Text style={styles.productSales}>Đã bán 1</Text>
                    <Text style={styles.discountLabel}>
                      Giảm {item.discountPercentage}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Ionicons name="add-circle" size={30} color="#2ea0c2" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.name}
            horizontal={false}
          />
        ) : (
          <Text style={styles.noProductsText}>
            Không có sản phẩm nào trong danh mục này.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    height: "40%", // Increased height for the image, logo, and header content
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 15,
  },
  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  storeImage: {
    width: "100%",
    height: "48%",
  },
  logoContainer: {
    position: "absolute",
    top: "25%", // Adjust logo position
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
  storeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  activeTime: {
    fontSize: 14,
    color: "#888",
    marginVertical: 2,
  },
  storeDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 6,
  },
  detailView: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  rating: {
    fontWeight: "bold",
    fontSize: 14,
  },
  reviewTime: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  address: {
    fontSize: 14,
    textAlign: "center",
    marginLeft: 5,
    fontWeight: "bold",
  },
  deliveryTime: {
    fontSize: 14,
  },
  deliveryLabel: {
    fontWeight: "bold",
    fontSize: 14,
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
  },
  categoryTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10, // Space between tabs and product list
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  categoryTab: {
    paddingHorizontal: 15,
  },
  selectedCategory: {
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#2ea0c2", // Light blue border at the bottom
  },
  categoryTabText: {
    fontSize: 14,
    color: "#333", // Default color for text
  },
  categoryTabTextSelected: {
    color: "#2ea0c2", // Chọn màu chữ khi tab được chọn
  },
  productItem: {
    flexDirection: "row",
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  productImage: {
    width: 80,
    height: 90,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  productName: {
    fontWeight: "500",
    fontSize: 16,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  productRatingText: {
    fontSize: 14,
    color: "#888",
  },
  productPricing: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discountedPrice: {
    fontWeight: "bold",
    color: "#ff5a00",
    fontSize: 16,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "#888",
    marginLeft: 5,
    fontSize: 14,
  },
  productSales: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  discountLabel: {
    fontSize: 11,
    color: "#1f90ba",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#1f90ba",
    textAlign: "center",
    padding: 3,
    marginLeft: 5,
  },
  addButton: {
    justifyContent: "center",
    paddingHorizontal: 10,
    top: "35%",
  },
  noProductsText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Store;
