import right_arrow from "../assets/icons/right_arrow.svg";

const Footer = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between lg:items-end max-lg:flex-col gap-20 my-20">
        <div className="flex flex-col justify-start">
          <h1 className="font-arapey text-logo font-regular text-[120px] tracking-[28px] mb-[-40px]">
            SERENE
          </h1>
          <p className="uppercase text-logo tracking-[1.5px] text-sm">
            skin care made simple & affordable
          </p>
        </div>

        <div className="max-lg:flex gap-2 items-center max-sm:flex-col max-sm:items-start">
          <h2 className="uppercase tracking-wider text-2xl mb-6 w-[230px]">
            Subscribe to
            our newsletter
          </h2>
          <div className="flex justify-between py-4 px-2 border-b-2 border-b-black w-[400px] max-sm:w-[300px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address Here"
              className="outline-none bg-transparent"
            />
            <img src={right_arrow} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-between max-lg:flex-col gap-12 ">
        <div className="text-[gray]">
          <p>15Th Street Avenue, New York, USA</p>
          <p>011-554-8798-6556</p>
        </div>
        <p>&copy; Lotion skin care. All rights reserved.</p>
        <p>Made with ❤️ by <a href="https://github.com/mohamedregragui">Medagui</a></p>
      </div>
    </div>
  );
};

export default Footer;
