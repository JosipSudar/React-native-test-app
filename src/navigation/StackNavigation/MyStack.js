import {createStackNavigator} from '@react-navigation/stack';
import NewsDetail from '../../screens/NewsDetail';
import BottomStack from '../BottomNavigator/BottomStack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomStack}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="NewsItem"
        component={NewsDetail}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
