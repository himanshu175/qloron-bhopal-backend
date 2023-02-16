import ProductListing_screen from "./screens/productListing/ProductListing_screen";
import SideBar from "./screens/sideNav/SideBar";
import "./index";

export default () => {
  return (
    <>
        <SideBar />
        <ProductListing_screen />
    </>
  );
};
