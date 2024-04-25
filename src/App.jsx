import { Header, Footer } from "@components";
import { MainSection, Container } from "@containers";
import introImage from "@images/intro.png"

const App = () => {


  return (
    <>
      <Header />
      <MainSection>
        <section className="intro pt-[120px]">
          <Container>
            <div className="flex gap-[19px] items-center">
              <div>
                <h1 className="w-[518px] font-bold text-[68px] mb-[22px] text-[#211F54] leading-[73.98px] ">
                  Quality cleaning for your home
                </h1>
                <p className="w-[571px] text-[#6E7191]">
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna lacus penatibus.
                </p>
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
