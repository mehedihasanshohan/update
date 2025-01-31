import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from '../../../assets/assets/home/featured.jpg'
// import      slide5 from '../../../assets/assets/home/slide5.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-orange-400 pt-10 my-20">
      <SectionTitle
          subHeading={"Check It Out"}
          heading={"Featured item"}
      />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-11 bg-slate-100 shadow-rose-800/95 p-4 rounded-2xl text-black">
          <p>Aug 23, 1998</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ipsum ducimus nemo architecto adipisci aut porro cupiditate eligendi nulla tempora.</p>
          <button className="btn btn-outline border-0 transition ease-in-out delay-300 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Featured