import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';

import useExampleState from './states/exampleState';

const Test = () => {
  const [state, actions] = useExampleState();
  const { increment, decrement, fetchRemoteUsers } = actions;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>{state.count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Fetch Users"
        onPress={() => dispatch(fetchRemoteUsers())}
      />
      {state.isFetchingUsers && <Text>Fetching users...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Test;
