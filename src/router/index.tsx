import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  AboutTemplate,
  ContactsTemplate,
  Homepage,
  ServicesAbout,
} from "../templates";
import { Footer, Header } from "../organism";

function Router() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutTemplate />} />
          <Route path="/service" element={<ServicesAbout />} />
          <Route path="/contacts" element={<ContactsTemplate />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Router;
