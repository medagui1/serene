import header_img from "../assets/header_img.webp";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col-reverse max-lg:justify-start max-lg:gap-10">
      <div className="lg:max-w-[350px] max-lg:m-10 max-sm:m-2">
        <h1 className="uppercase tracking-[4px] font-semibold mb-8">beauty products</h1>
        <h2 className="uppercase text-[40px] font-bold mb-8 leading-[50px]">skin care made simple & affordable</h2>
        <p className="leading-relaxed text-gray mb-8 text-lg">
          Feugiat tellus metus lacus vulputate sed nec, feugiat at. Ac ultrices
          facilisis suspendisse nec sagittis, mauris quisque pellentesque
          tincidunt. Semper habitasse id tincidunt et rhoncus placerat fusce.
        </p>
        <Button label='shop now'/>
      </div>
      <div className=" max-w-[700px] sm:m-8 max-sm:mt-8">
        <img src={header_img} alt="" className="object-cover"/>
      </div>
    </div>
  );
};

export default Hero;
