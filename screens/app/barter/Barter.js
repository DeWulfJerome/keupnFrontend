import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageLayout from '../../../components/layout/PageLayout';

const Barter = () => {
  return (
    <PageLayout
      title="Barter"
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

export default Barter;

const styles = StyleSheet.create({
  block: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  blockOrange: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
  },
});
