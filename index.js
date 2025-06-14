import { registerRootComponent } from 'expo';

import App from './App';
import Spaces from './screens/Spaces';
import BottomTabs from './demo/BottomTabs';
import Drawer from './demo/Drawer';
import ScrollViewDemo from './demo/ScrollViewDemo';
import FlatListDemo from './demo/FlatListDemo';
import SectionListDemo from './demo/SectionListDemo';
import UnAuthenticated from './screens/UnAuthenticated';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(UnAuthenticated);