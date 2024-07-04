import "./style.scss";
import { Container } from "@containers";
import logo from "@images/logo.svg";

const index = () => {
  return (
    <>
      <header className="fixed z-[9999999] w-full bg-white ">
        <Container>
          <nav className="flex justify-between h-[118px] items-center">
            <ul className="flex gap-[22px] items-center ">
              <li className="pr-[18px] cursor-pointer">
                <a href="./index.jsx">
                  <img src={logo} alt="logo" />
                </a>
              </li>
              <li className="cursor-pointer duration-200">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  Home
                </a>
              </li>
              <li className="cursor-pointer duration-200">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  About
                </a>
              </li>
              <li className="cursor-pointer duration-200">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  Services
                </a>
              </li>
              <li className="cursor-pointer duration-200">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  Articles
                </a>
              </li>
              <li className="cursor-pointer duration-200">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="flex gap-[24px] items-center ">
              <li className="duration-200 cursor-pointer">
                <a href="#" className="text-[#211F54] hover:text-[#0075FF] text-[18px]">
                  Cart (0)
                </a>
              </li>
              <li>
                <button className="pt-[16px] pb-[18px] px-[24px] rounded-[14px] bg-[#0075FF] text-white hover:bg-[#211F54] duration-200">
                  Get a free quote
                </button>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default index;
