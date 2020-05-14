import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageLayout from '../../../components/layout/PageLayout';
import StyleConstants from '../../../StyleConstants';

const Profile = () => {
  return (
    <PageLayout
      title="Profile"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod">
      <View style={{alignItems: 'center'}}>
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.blockOrange} />
      </View>
    </PageLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  block: {
    height: 50,
    width: 50,
    backgroundColor: StyleConstants.colors.blue.medium,
    marginBottom: 10,
  },
  blockOrange: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
  },
});
