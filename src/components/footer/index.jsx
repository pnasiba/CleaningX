import { Container } from "@containers";
import "./style.scss";

const index = () => {
    return (
      <footer className="bg-slate-900 text-white text-center py-5">
        <Container>
          <p>Demo App {new Date().getFullYear()}</p>
        </Container>
      </footer>
    );
};

export default index;