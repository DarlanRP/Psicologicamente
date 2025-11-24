import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";
import { Header } from "./components/Header";
import { TopBarInfo } from "./components/TopBarInfo";
import { Toaster } from "sonner";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Metrics } from "./components/Metrics";
import { Services } from "./pages/Services";
import { Video } from "./pages/Video";
import { Scheduling } from "./pages/Scheduling";
import { Faq } from "./pages/Faq";
import { Footer } from "./pages/Footer";
import { BackToTopButton } from "./components/BackToTopButton";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Toaster richColors />
      <TopBarInfo />
      <Header />
      <Home />
      <About />
      <Metrics />
      <Services />
      <Video />
      <Scheduling />
      <Faq />
      <Footer />
      <BackToTopButton />
    </ThemeProvider>
  );
}
