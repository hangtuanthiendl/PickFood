import { StackNavigator } from 'react-navigation';
import PF_SignUp from "../Screen/Account/SignUp/PF_SignUp";
import PF_SignIn from "../Screen/Account/SignIn/PF_SignIn";
import PF_Account from "../Screen/Account/PF_Account";
const PF_routesAccountMan = StackNavigator({
    PF_Account: {
        screen: PF_Account,
        navigationOptions: { header: null }
    },
    PF_SignIn: {
        screen: PF_SignIn,
        navigationOptions: { header: null }
    },
    PF_SignUp: {
        screen: PF_SignUp,
        navigationOptions: { header: null }
    },
});

export default  PF_routesAccountMan;