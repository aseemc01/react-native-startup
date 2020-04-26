import { useSelector } from 'react-redux';

import slice from './slice';
import selectors from './selectors';
import asyncActions from './asyncActions';

const useExampleState = () => {
  const { allState } = selectors;
  const { fetchRemoteUsers } = asyncActions;

  const exampleState = useSelector(allState);
  const { actions } = slice;

  return [exampleState, { ...actions, fetchRemoteUsers }];
};

export default useExampleState;
