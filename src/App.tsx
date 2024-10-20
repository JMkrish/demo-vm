import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImageCycler from "./components/ImageCycler";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "body" "footer"` }} bg="blue.600">
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="body">
        <ImageCycler interval={5000} />
      </GridItem>

      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
