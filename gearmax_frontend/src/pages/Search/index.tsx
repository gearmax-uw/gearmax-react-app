import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Search = () => {
  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        type="left"
        title="Form"
        content="TBD"
        // section={AboutContent.section}
        icon="notes.svg"
        id="about"
      />
    </Container>
  );
};

export default Search;
