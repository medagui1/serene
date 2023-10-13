const Button = ({ label }) => {
  return (
    <button className="px-12 py-4 border-black border-[1px] max-sm:w-full">
      <p className="uppercase text-[10px] font-semibold tracking-[2px]">
        {label}
      </p>
    </button>
  );
};

export default Button;
