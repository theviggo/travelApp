import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Article from './screens/Article';
import List from './screens/List';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Article,
      List,
    },
    {
      initialRouteName: 'List',
    }
  )
);

export default Routes;
