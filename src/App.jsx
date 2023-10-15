import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  ProductChars,
  Footer,
  CustomerReviews,
  Hero,
  Nav,
  PopularNow,
} from "./sections/index";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [cartOrders, setCartOrders] = useState(0);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const root = document.getElementsByTagName("body")[0]
  isMenuShown ? (root.style.overflow = 'hidden') : (root.style.overflow = 'auto');

  return (
      <main className={`font-open-sans px-8 `}>
        {isMenuShown && (
          <Menu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
        )}
        <header id="home" className="">
          <nav className="">
            <Nav
              isMenuShown={isMenuShown}
              setIsMenuShown={setIsMenuShown}
              cartOrders={cartOrders}
            />
          </nav>
          <hr className="h-px border-0 dark:bg-gray-700 mb-4" />
          <Hero />
        </header>
        <hr className="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-6" />
        <section id="about-us">
          <ProductChars />
        </section>
        <hr className="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-6" />
        <section id="customer-reviews">
          <CustomerReviews />
        </section>
        <hr className="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-32" />
        <section>
          <PopularNow />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
  );
}

export default App;
