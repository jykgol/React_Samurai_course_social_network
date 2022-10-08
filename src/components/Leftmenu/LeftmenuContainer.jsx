import StoreContext from "../../StoreContext";
import Leftmenu from "./Leftmenu";

function LeftmenuContainer(props) {

  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState();
          return (<Leftmenu NavbarData={state.LeftmenuPage.NavbarData} />)
        }
      }
    </StoreContext.Consumer>
  )
}

export default LeftmenuContainer;