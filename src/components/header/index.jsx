import "./style.scss";
import { Container } from "@containers";
import { Button } from "@ui";
import logo from "@images/logo.svg";

const index = () => {
  return (
    <>
      <header className="fixed z-[9999999] w-full bg-white border-b-2 ">
        <Container>
          <nav className="flex justify-between h-[118px] items-center">
            <ul className="flex gap-[22px] items-center ">
              <li className="pr-[18px] cursor-pointer">
                <a href="./index.jsx">
                  <img src={logo} alt="logo" />
                </a>
              </li>
              <li className="cursor-pointer text-[#211F54]">Home</li>
              <li className="cursor-pointer text-[#211F54]">About</li>
              <li className="cursor-pointer text-[#211F54]">Services</li>
              <li className="cursor-pointer text-[#211F54]">Articles</li>
              <li className="cursor-pointer text-[#211F54]">Contact</li>
            </ul>

            <ul className="flex gap-[24px] items-center ">
              <li className="text-[#211F54] cursor-pointer">Cart (0)</li>
              <li>
                <Button/>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default index;
