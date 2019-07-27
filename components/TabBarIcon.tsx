import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


interface TabBarIconProps {
  name: string;
  focused: string;
}

const TabBarIcon: React.SFC<TabBarIconProps> = ({ name, focused }) => (
  <Ionicons
    name={ name }
    size={ 26 }
    style={{ marginBottom: -3 }}
    color={ focused ? Colors.tabIconSelected : Colors.tabIconDefault }
  />
)


export default TabBarIcon