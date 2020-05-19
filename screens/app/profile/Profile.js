import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PageLayout from '../../../components/layout/PageLayout';
import StyleConstants from '../../../StyleConstants';
import CardTextOverlay from '../../../components/cards/CardTextOverlay';

const Profile = () => {
  return (
    <PageLayout
      title="Profile"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod">
      <CardTextOverlay
        imgUrl={
          'https://us.123rf.com/450wm/grebeshkovmaxim/grebeshkovmaxim1805/grebeshkovmaxim180500202/100769321-stock-vector-colorful-smooth-gradient-color-background-design-for-your-project-design-.jpg?ver=6'
        }>
        <Text>testing</Text>
      </CardTextOverlay>
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
