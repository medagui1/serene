import { navLinks } from "../constants/navLinks";

const Nav = ({ isMenuShown, setIsMenuShown, cartOrders }) => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className="flex justify-between items-center p-6 ">
      <h1 className="font-arapey text-logo font-bold text-2xl tracking-[10px]">SERENE</h1>
      <div className="flex gap-4 max-lg:hidden">
        {navLinks.map((link, index) => (
          <a href={link.link} key={link.name} className={`tracking-[3px] text-sm font-semibold ${index < navLinks.length - 1 && 'border-r-black border-r-[1px]'} px-5`}>{link.name}</a>
        ))}
      </div>
      <h2 className="max-lg:hidden tracking-[3px] text-sm font-semibold">CART({cartOrders})</h2>
    </div>
  );
};

export default Nav;