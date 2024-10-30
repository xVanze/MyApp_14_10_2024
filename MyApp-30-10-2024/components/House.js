import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import propertyData from './HouseData';

const House = () => {
    const [search, setSearch] = useState('');

    // Filter function for the search bar
    const filteredProperties = propertyData.filter(property =>
        property.address.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search properties..."
                value={search}
                onChangeText={text => setSearch(text)}
            />

            {/* Property List */}
            <FlatList
                data={filteredProperties}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.propertyContainer}>
                        {/* House Image Container */}
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>

                        {/* House Details */}
                        <View style={styles.detailsContainer}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.address}>{item.address}</Text>
                        </View>

                        {/* Separator Line */}
                        <View style={styles.separator} />

                        {/* House Features */}
                        <View style={styles.featuresContainer}>
                            <Text style={styles.featureText}>{item.beds} Beds</Text>
                            <Text style={styles.featureText}>{item.baths} Baths</Text>
                            <Text style={styles.featureText}>{item.parking} Parking</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#F5F5F5',
    },
    searchBar: {
        width: '100%',
        height: 150,
        borderRadius: 25,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    propertyContainer: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 260, // Adjust this to control the height of the image container
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensures the image covers the entire container
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: '#FFF',
        height: 100, // 40% of container height
        justifyContent: 'center',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    address: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    separator: {
        width: '100%', // Ensures the line spans the full width of the container
        height: 1, // Adjust the height of the line
        backgroundColor: '#ddd', // Light gray color
        marginTop: 10,
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#FFF',
    },
    featureText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFA500', // Light orange for features
    },
});

export default House;
