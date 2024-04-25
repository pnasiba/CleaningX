import { Container } from "@containers";
import "./style.scss";

const index = () => {
    return (
      <footer className="bg-slate-900 text-white text-center h-[50px]">
        <Container> 
          Demo App {new Date().getFullYear()}
        </Container>
      </footer>
    );
};

export default index;