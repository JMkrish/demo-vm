import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImageCycler from "./components/ImageCycler";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "body" "footer"` }} bg="white">
      <GridItem area="nav" bg="blue.600">
        <NavBar />
      </GridItem>

      <GridItem area="body" bg="white">
        <ImageCycler interval={5000} />
      </GridItem>

      <GridItem area="footer" bg="blue.600">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
