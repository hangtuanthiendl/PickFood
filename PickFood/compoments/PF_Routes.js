import { StackNavigator } from 'react-navigation';
import PF_Home from "./PF_Home";
import PF_SignUp from "./Screen/SignUp/PF_SignUp";
import PF_SignIn from "./Screen/SignIn/PF_SignIn";

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
});

export default PF_Routes;