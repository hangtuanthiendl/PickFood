import { StackNavigator } from 'react-navigation';
import PF_Shop from "../Screen/Shop/PF_Shop";
import PF_DetailShop from "../Screen/Shop/PF_Detail";
const PF_routesShop = StackNavigator({
    PF_Shop: {
        screen: PF_Shop,
        navigationOptions: { header: null }
    },
    PF_DetailShop: {
        screen: PF_DetailShop,
        navigationOptions: { header: null }
    },
});

export default  PF_routesShop;