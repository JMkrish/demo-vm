import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "body" "footer"` }} bg="white">
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="body" bg="blue">
        {" "}
        Main Body
      </GridItem>

      <GridItem area="footer" bg="gold">
        {" "}
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
