import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import RandomItems from '../../components/randomItems';
import { loadItems } from '../../store/item.slice';
import { Styles } from './styles';

function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <View style={Styles.dashboardContainer}>
      <Text style={Styles.greetings}>Hello!</Text>
      <View style={Styles.numberContainer}>
        <Text style={Styles.subNumber}>Number of items:</Text>
        <Text style={Styles.number}>{`${items.length}`}</Text>
      </View>
      <Text style={Styles.randomSubtitle}>These are some of your items:</Text>
      {items.length === 0 ? (
        <Text style={Styles.noItemText}>No items yet</Text>
      ) : (
        <RandomItems count={2} navigation={navigation} />
      )}
    </View>
  );
}

export default Dashboard;
