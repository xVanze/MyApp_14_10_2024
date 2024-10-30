import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import lopHoc from './LopHoc';

const LichHoc = () => {
    // Get the professor data (assuming this is 'avatar 6')
    const giaoVien = {
        ten: 'Mr. Cody Fisher',
        avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        chucVu: 'Professor',
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <Text style={styles.header}>Today's Classes</Text>
            <View style={styles.headerBox}>
                <View style={styles.headerText}>
                    <Text style={styles.tieuDe}>History of Physics</Text>
                    <Text style={styles.thoiGianHoc}>24 March, 18pm - 19pm</Text>
                    <View style={styles.giaoVienBox}>
                        <Image source={{ uri: giaoVien.avatar }} style={styles.giaoVienAvatar} />
                        <View>
                            <Text style={styles.giaoVienTen}>{giaoVien.ten}</Text>
                            <Text style={styles.giaoVienChucVu}>{giaoVien.chucVu}</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Lop Hoc List */}
            {lopHoc.map((lop, index) => (
                <View key={index} style={styles.row}>
                    {/* Vertical line with dot */}
                    <View style={styles.verticalLineContainer}>
                        <View style={styles.dot}></View>
                        <View style={styles.line}></View>
                    </View>

                    {/* Class details */}
                    <View style={styles.timeContainer}>
                        <Text style={styles.startTime}>{lop.thoiGianBatDau}</Text>
                        <Text style={styles.endTime}>{lop.thoiGianKetThuc}</Text>
                    </View>
                    <View style={[styles.classBox, { backgroundColor: lop.mauNen }]}>
                        <Text style={styles.classTitle}>{lop.tieuDe}</Text>
                        <Text style={styles.classTime}>24 March, 18pm - 19pm</Text>
                        <View style={styles.studentAvatars}>
                            {lop.hocVien.map((hocVien) => (
                                <Image key={hocVien.id} source={{ uri: hocVien.avatar }} style={styles.avatar} />
                            ))}
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    headerBox: {
        backgroundColor: '#FF7F50', // Orange background
        padding: 20,
        borderRadius: 10,
        marginBottom: 25,
    },
    headerText: {
        flexDirection: 'column',
    },
    tieuDe: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    thoiGianHoc: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 5,
    },
    giaoVienBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    giaoVienAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#FFF',
    },
    giaoVienTen: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
    },
    giaoVienChucVu: {
        fontSize: 12,
        color: '#FFF',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        marginLeft: 20, // Shifted right
    },
    timeContainer: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    startTime: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    endTime: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
    classBox: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    classTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'darkblue',
        marginBottom: 8,
    },
    classTime: {
        fontSize: 14,
        color: 'darkblue',
        marginBottom: 10,
    },
    studentAvatars: {
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    // Vertical line with dot styles
    verticalLineContainer: {
        width: 20, // Increased width for spacing
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30, // Space between the line and the class details
    },
    dot: {
        width: 12, // Larger dot
        height: 12,
        borderRadius: 8, // Half of the width/height for a circle
        backgroundColor: '#FF7F50', // Bold orange
        marginBottom: 20, // Space between the dot and the line
    },
    line: {
        height: '100%',
        width: 3, // Thicker line
        backgroundColor: '#FF7F50', // Bold orange
        marginBottom: 20,
    },
});

export default LichHoc;
