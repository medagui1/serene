import Button from "../components/Button";
import { popular_products } from "../constants/navLinks";

const PopularNow = () => {
  return (
    <>
    <div className="flex gap-8 justify-between items-start m-10 max-lg:m-10 max-sm:m-2 max-lg:flex-col">
      <div className="">
        <h1 className="uppercase tracking-[4px] font-semibold mb-8">
          popular now
        </h1>
        <h2 className="uppercase text-[40px] font-bold mb-8 leading-[50px]">
          most popular skin care products
        </h2>
      </div>
      <div className="max-w-[400px]">
        <p className="leading-relaxed text-gray mb-20 max-sm:mb-16 text-lg">
          Feugiat tellus metus lacus vulputate sed nec, feugiat at. Ac ultrices
          facilisis suspendisse nec sagittis, mauris quisque pellentesque
          tincidunt. Semper habitasse id tincidunt et rhoncus placerat fusce.
        </p>
        <Button label="View all products" />
      </div>
    </div>
    <div className="flex gap-8 mt-28 max-sm:mt-16 overflow-x-scroll overflow-h-hidden nowrap my-2">
      {popular_products.map(product => (
        <div key={product.name} className="">
          <div>
            <img src={product.image} alt={product.name} width={240} height={320} className="min-w-[210px] min-h-[280px]"/>
          </div>
          <div className="flex justify-between mt-2">
            <p>{product.name}</p>
            <p className="text-slate-700">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PopularNow;
