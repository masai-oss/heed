import Navigation from "./navigation";
export default {
  title: "Navbar",
};

export const Navbar = () => {
  return <Navigation />;
};

export const NavbarLogedin = () => {
  return <Navigation isLogedin={true}/>;
};



