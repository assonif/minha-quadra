import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Gym from '../screens/Gym';
import Home from '../screens/Home';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Confirmation from '../screens/Confirmation';
import Reservation from '../screens/Reservation';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={AppRoutes}
      options={{
        headerShown: false,
        title: 'Quadras',
        tabBarIcon: ({ focused }) => (
          <Ionicons name="football" size={24} color={focused ? '#F14A41' : 'black'} />
        ),
        tabBarActiveTintColor: '#F14A41'
      }
      }
    />
    <Tab.Screen
      name="Reservation"
      component={Reservation}
      options={{
        title: 'Minhas Reservas',
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="soccer-field" size={24} color={focused ? '#F14A41' : 'black'} />
        ),
        tabBarActiveTintColor: '#F14A41'
      }
      }
    />
  </Tab.Navigator>
)

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" options={{ headerTitle: 'Quadras' }} component={Home} />
      <AppStack.Screen
        name="Gym"
        options={{
          headerTitle: 'Winner Tennis Center',
          headerBackTitleVisible: false,
          headerBackTitleStyle: {
            color: '#F14A41'
          },
        }}
        component={Gym}
      />
      <AppStack.Screen
        name="Confirmation"
        options={{
          headerShown: false
        }}
        component={Confirmation}
      />
    </AppStack.Navigator>
  );
}

export default BottomTab;