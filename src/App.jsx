import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  ProductChars,
  CallToAction,
  CustomerReviews,
  Hero,
  Nav,
  PopularNow,
} from "./sections/index";
import "./App.css";

function App() {
  const [cartOrders, setCartOrders] = useState(0);
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <main className="font-open-sans px-8">
        <header id="home" className="">
          <nav className="">
            <Nav
              isMenuShown={isMenuShown}
              setIsMenuShown={setIsMenuShown}
              cartOrders={cartOrders}
            />
          </nav>
          <hr class="h-px border-0 dark:bg-gray-700 mb-4" />
          <Hero />
        </header>
        <hr class="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-6" />
        <section id="about-us">
          <ProductChars />
        </section>
        <hr class="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-6" />
        <section id="customer-reviews">
          <CustomerReviews />
        </section>
        <hr class="h-px border-0 dark:bg-gray-700 lg:mt-32 max-lg:mt-16 mb-32" />
        <section>
          <PopularNow />
        </section>
        <footer>
          <CallToAction />
        </footer>
      </main>
    </>
  );
}

export default App;
