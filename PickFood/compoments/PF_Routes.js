import { StackNavigator } from 'react-navigation';
import PF_Home from "./PF_Home";
import PF_SignUp from "./Screen/SignUp/PF_SignUp";
import PF_SignIn from "./Screen/SignIn/PF_SignIn";
import PF_ListFood from "./Screen/Food/PF_ListFood";

import PF_ListDrink from "./Screen/Food/PF_ListDrink";
import PF_Shop from "./Screen/Shop/PF_Shop";

const PF_Routes = StackNavigator({
    PF_Home: {
        screen: PF_Home,
    },
    PF_SignIn: {
        screen: PF_SignIn,
    },
    PF_SignUp: {
        screen: PF_SignUp,
    },
    PF_ListFood:{
        screen: PF_ListFood,
    },
    PF_ListDrink: {
        screen: PF_ListDrink
    }
});

export default PF_Routes;