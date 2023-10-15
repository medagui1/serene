import product_img from "../assets/product_img.webp";
import { product_chars } from "../constants/navLinks";

const ProductChars = () => {
  return (
    <div className="flex justify-between items-center gap-20 max-lg:gap-10 max-lg:flex-col">
      <div className="max-w-[500px]  max-lg:w-full m-8 max-sm:p-2">
        <img src={product_img} alt="" />
      </div>
      <div  className="lg:max-w-[450px] max-lg:m-10 max-sm:m-2">
        <div>
          {product_chars.map((product) => (
            <div key={product.order}>
              <p className="text-sm">{product.order}</p>
              <h3 className={`uppercase text-4xl font-semibold mb-10 max-sm:mb-6 ${product.order === '02' && "text-[#EC361D]"}`}>
                {product.characteristic}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-lg">
          Elit, volutpat donec et risus. Sit pellentesque tincidunt tortor, erat
          tortor eget quis sapien. Nunc tellus egestas nulla ullamcorper
          <span className="text-[#EB351C]"> pellentesque</span> molestie nec. Gravida eget quam diam non. Iaculis pretium
          platea magna sed diam diam orci enim. Scelerisque accumsan quam sit
          nibh in porta non rutrum orci.
        </p>
      </div>
    </div>
  );
};

export default ProductChars;
