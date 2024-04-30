import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";
import { Button } from "@ui";
import introImage from "@images/intro.png"
import callImage from "@images/call.svg"

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
                      <h4 className="text-[#211F54] font-bold leading-[36px] text-[28px] ">(414) 567 - 2109</h4>
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
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
