import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FriendCard = ({ friend }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: friend.imageUrl }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{friend.name}</Text>
                <Text style={styles.details}>{friend.country} - {friend.age}</Text>
                <View style={styles.ratingContainer}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Text key={index} style={styles.star}>
                            {index < Math.floor(friend.rating) ? '★' : '☆'}
                        </Text>
                    ))}
                </View>
                <Text style={styles.sports}>{friend.sports.join(' | ')}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Unfriend</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fbfbfb',
        borderWidth: 4,
        borderColor: '#DCDCDC',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 16,
        color: '#FFD700',
    },
    sports: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2ECC71',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#2ECC71',
        fontSize: 16,
    },
});

export default FriendCard;
