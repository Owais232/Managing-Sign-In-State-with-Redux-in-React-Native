import { Provider } from "react-redux";
import BottomNavigation from "./android/src/Navigation/BottomNavigation";
import { Store } from "./android/src/redux/Store";

const App=()=>{
  return(
    <Provider store={Store}>
    <BottomNavigation/>
    </Provider>
  );
};


export default App;