import { Link } from "react-router-dom";
import { Main } from "../../style";

export const Navbar = () => {
  return (
    <>
      <Main className="navbar">
        <button>Home</button>
        <button>Mystery</button>
        <button>Technology</button>
        <button>Mythology</button>
        <button>history</button>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </Main>
    </>
  );
};
