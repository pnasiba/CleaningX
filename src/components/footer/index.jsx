import { Container } from "@containers";
import logo from "@images/logo.svg";

import "./style.scss";

const index = () => {
  return (
    <footer className=" text-white text-center py-5">
      <Container>
        <div className="flex justify-between items-center border-t-[1px] pt-[50px] mb-[34px]">
          <img src={logo} alt="logo" />

          <p className="text-[#6E7191] text-[18px] leading-[30.01px]">
            Copyright © Cleaning X | Designed by{" "}
            <span className="text-[#0075FF] underline text-[18px] leading-[30.01px]">
              BRIX Templates
            </span>{" "}
            - Powered by{" "}
            <span className="text-[#0075FF] underline text-[18px] leading-[30.01px]">
              Webflow
            </span>{" "}
            -{" "}
            <span className="text-[#0075FF] underline text-[18px] leading-[30.01px]">
              Licenses
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default index;
