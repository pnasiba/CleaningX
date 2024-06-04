import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";
import { Button } from "@ui";
import introImage from "@images/intro.png";
import callImage from "@images/call.svg";
import scheduleImage from "@images/schedule.png";
import payImage from "@images/pay.png";
import cleanImage from "@images/clean.png";

const App = () => {
  return (
    <>
      <Header />
      <MainSection>
        <section className="intro pt-[120px] mb-[155px]">
          <Container>
            <div className="flex gap-[19px] items-center">
              <div>
                <h1 className="w-[518px] font-bold text-[68px] mb-[22px] text-[#211F54] leading-[73.98px] ">
                  Quality cleaning for your home
                </h1>
                <p className="w-[571px] text-[#6E7191] mb-[34px] leading-[30px] text-[21px] ">
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </p>
                <div className="flex gap-[28px] items-center ">
                  <Button />
                  <div className="flex gap-[10px] items-center ">
                    <img src={callImage} alt="call" />
                    <div>
                      <p className="uppercase leading-[18px] text-[#6E7191] mb-[4px] ">
                        Call us now
                      </p>
                      <h4 className="text-[#211F54] font-bold leading-[36px] text-[28px] ">
                        (414) 567 - 2109
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={introImage} alt="introImage" />
              </div>
            </div>
          </Container>
        </section>

        <section className="mb-[155px]">
          <Container>
            <h1 className="text-[#211F54] text-[48px] text-center font-bold mb-[21px] leading-[57.98px] ">
              About Us
            </h1>

            <p className="text-center mx-auto leading-[30.01px]  text-[21px] text-[#6E7191] mb-[58px] w-[648px] ">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>

            <div className="flex gap-[42px] justify-center mb-[56px]">
              <div className="w-[375px]">
                <img className="mx-auto" src={scheduleImage} alt="schedule" />
                <p className="text-[#211F54] text-center text-[28px] font-bold pt-[39px] mb-[16px] ">
                  1. Schedule online
                </p>
                <p className="text-[#6E7191] text-[21px] text-center w-[412px] leading-[30.01px]">
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>

              <div className="w-[375px]">
                <img className="mx-auto" src={scheduleImage} alt="schedule" />
                <p className="text-[#211F54] text-center text-[28px] font-bold pt-[39px] mb-[16px] ">
                  2. Pay online easily
                </p>
                <p className="text-[#6E7191] text-[21px] text-center w-[412px] leading-[30.01px]">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>

              <div className="w-[375px]">
                <img className="mx-auto" src={scheduleImage} alt="schedule" />
                <p className="text-[#211F54] text-center text-[28px] font-bold pt-[39px] mb-[16px] ">
                  3. Get your house cleaned
                </p>
                <p className="text-[#6E7191] text-[21px] text-center w-[412px] leading-[30.01px]">
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>

            <div className="flex gap-[28px] text-center w-[450px] mx-auto">
              <Button />
              <button className="shadow-md py-[25px] px-[39px] rounded-[14px] text-[18px] leading-[20px]">
                Explore services
              </button>
            </div>
          </Container>
        </section>
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
