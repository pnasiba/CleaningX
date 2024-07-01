import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";
import { BlueButton, WhiteButton } from "@buttons";
import introImage from "@images/intro.png";
import callImage from "@images/call.svg";
import scheduleImage from "@images/schedule.png";
import payImage from "@images/pay.png";
import cleanImage from "@images/clean.png";
import house from "@images/house.png";
import office from "@images/office.png";
import industrial from "@images/industrial.png";
import women from "@images/women.png";
import cleaner from "@images/cleaner.png";
import girl from "@images/girl.png";
import box from "@images/box.svg";

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
                  <BlueButton />
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
                <img className="mx-auto" src={payImage} alt="pay" />
                <p className="text-[#211F54] text-center text-[28px] font-bold pt-[39px] mb-[16px] ">
                  2. Pay online easily
                </p>
                <p className="text-[#6E7191] text-[21px] text-center w-[412px] leading-[30.01px]">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>

              <div className="w-[375px]">
                <img className="mx-auto" src={cleanImage} alt="clean" />
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
              <BlueButton />
              <WhiteButton />
            </div>
          </Container>
        </section>

        <section className="mb-[147px]">
          <Container>
            <div className="flex justify-between mb-[78px] items-center">
              <h1 className="text-[#211F54] text-[48px] text-center font-bold mb-[21px] leading-[57.98px] ">
                Our Services
              </h1>

              <WhiteButton />
            </div>

            <div className="flex justify-between">
              <div className="border border-[rgb(239, 240, 246)] px-[38px] pt-[83px] pb-[23px] rounded-[16px] shadow-sm cursor-pointer hover:shadow-lg duration-200 ">
                <img src={house} alt="house" className="w-[220px] mx-auto " />
                <h5 className="pt-[24px] pb-[13px] text-center text-[#211F54] font-bold text-[24px] leading-[34.01px] ">
                  House cleaning
                </h5>
                <p className="text-[#6E7191] text-[21px] leading-[34.01px] text-center w-[312px] ">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>

              <div className="border border-[rgb(239, 240, 246)] px-[38px] pt-[49px] pb-[23px] rounded-[16px] shadow-sm cursor-pointer hover:shadow-lg duration-200 ">
                <img src={office} alt="house" className="w-[220px] mx-auto " />
                <h5 className="pt-[24px] pb-[13px] text-center text-[#211F54] font-bold text-[24px] leading-[34.01px] ">
                  Office cleaning
                </h5>
                <p className="text-[#6E7191] text-[21px] leading-[34.01px] text-center w-[312px] ">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>

              <div className="border border-[rgb(239, 240, 246)] px-[38px] pt-[97px] pb-[23px] rounded-[16px] shadow-sm cursor-pointer hover:shadow-lg duration-200 ">
                <img
                  src={industrial}
                  alt="house"
                  className="w-[220px] mx-auto "
                />
                <h5 className="pt-[24px] pb-[13px] text-center text-[#211F54] font-bold text-[24px] leading-[34.01px] ">
                  Industrial cleaning
                </h5>
                <p className="text-[#6E7191] text-[21px] leading-[34.01px] text-center w-[312px] ">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="mb-[156px]">
          <Container>
            <div className="bg-[#211F54] rounded-[24px] flex gap-[72px]">
              <img src={women} alt="women picture" />

              <div className="py-[137px] pr-[74px] text-white">
                <p className="text-[16px] font-bold leading-[18px] tracking-[1.6px] mb-[7px]">
                  Covid-19 sanitization
                </p>

                <h1 className="text-[48px] font-bold leading-[57.98px] mb-[18px] w-[491px] pt-0 ">
                  We follow guidelines to keep you safe from the COVID-19 virus
                </h1>

                <p className="text-[21px] leading-[30.01px] mb-[12px] w-[474px] ">
                  Lobortis mattis odio leo eget mauris met aliquet semper
                  molestie sollicitudin congue massa mauris lectus.
                </p>

                <div className="flex gap-[28px] items-center ">
                  <BlueButton />

                  <div className="flex gap-[10px] items-center ">
                    <img src={callImage} alt="call" />

                    <div>
                      <p className="uppercase leading-[18px] text-white mb-[4px] ">
                        Call us now
                      </p>
                      <h4 className="text-white font-bold leading-[36px] text-[28px] ">
                        (414) 567 - 2109
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <p className="pt-[147px] border-t border-[#DCDDEB]"></p>

            <div className="flex justify-between mb-[68px] items-center">
              <h1 className="text-[#211F54] text-[48px] text-center font-bold mb-[21px] leading-[57.98px] ">
                Articles & resources
              </h1>

              <div className="flex gap-[28px] ">
                <BlueButton />
                <WhiteButton />
              </div>
            </div>

            <div className="flex gap-[28px] items-center justify-between ">
              <div>
                <img src={cleaner} alt="cleaner" />

                <div className="border-[#14142B] rounded-[24px] shadow-md px-[49px] pt-[52px] pb-[49px] cursor-pointer hover:shadow-lg relative z-auto -top-[60px] bg-white w-[536px] mx-auto ">
                  <p className="text-[24px] mb-[17px] text-[#211F54] leading-[34.01px] font-bold w-[407px] ">
                    8 best vacuum cleaners to clean any mess for your home in
                    2022
                  </p>

                  <p className="text-[#6E7191] text-[21px] w-[434px] leading-[34.01px] ">
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>

                  <div className="flex justify-between items-center ">
                    <p className="text-[#211F54] text-[18px] font-bold leading-[20px] ">
                      Jan 28, 2022
                    </p>

                    <img src={box} alt="box" />
                  </div>
                </div>
              </div>

              <div>
                <img src={girl} alt="girl" />

                <div className="border-[#14142B] rounded-[24px] shadow-md px-[49px] pt-[52px] pb-[49px] cursor-pointer hover:shadow-lg relative z-auto -top-[60px] bg-white w-[536px] mx-auto ">
                  <p className="text-[24px] mb-[17px] text-[#211F54] leading-[34.01px] font-bold w-[407px] ">
                    How to properly disinfect your phone and other electronics
                  </p>

                  <p className="text-[#6E7191] text-[21px] w-[434px] leading-[34.01px] ">
                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                    justo quis odio sit sit ac port titor sit males.
                  </p>

                  <div className="flex justify-between items-center ">
                    <p className="text-[#211F54] text-[18px] font-bold leading-[20px] ">
                      Feb 1, 2022
                    </p>

                    <img src={box} alt="box" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
