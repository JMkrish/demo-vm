import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ImageCycler from './components/ImageCycler';

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "body" "footer"` }} bg="white">
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="body">
        <ImageCycler interval={5000} />
      </GridItem>

      <GridItem area="footer" bg="red.600">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
