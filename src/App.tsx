import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Grid templateAreas={{ base: `"nav" "body" "footer"` }} bg="blue.600">
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="body">
          <Box flex="1" bg="white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Box>
        </GridItem>

        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </AuthProvider>
  );
}

export default App;
