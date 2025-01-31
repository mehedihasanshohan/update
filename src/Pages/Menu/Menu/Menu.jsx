import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from '../../../assets/assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title> Resturant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
    </div>
  )
}

export default Menu