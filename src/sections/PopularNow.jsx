import Button from "../components/Button";

const PopularNow = () => {
  return (
    <div className="flex gap-8 justify-between items-start p-10">
      <div className="">
        <h1 className="uppercase tracking-[4px] font-semibold mb-8">
          popular now
        </h1>
        <h2 className="uppercase text-[40px] font-bold mb-8 leading-[50px]">
          most popular skin care products
        </h2>
      </div>
      <div className="w-[400px]">
        <p className="leading-relaxed text-gray mb-20 text-lg">
          Feugiat tellus metus lacus vulputate sed nec, feugiat at. Ac ultrices
          facilisis suspendisse nec sagittis, mauris quisque pellentesque
          tincidunt. Semper habitasse id tincidunt et rhoncus placerat fusce.
        </p>
        <Button label="View all products" />
      </div>
    </div>
  );
};

export default PopularNow;
