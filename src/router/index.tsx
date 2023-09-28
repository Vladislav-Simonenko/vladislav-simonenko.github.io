import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@organism/index";
import {
  AboutTemplate,
  ContactsTemplate,
  Homepage,
  ServicesAbout,
} from "@templates/index";

function Router() {
  return (
    <BrowserRouter basename="/">
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
