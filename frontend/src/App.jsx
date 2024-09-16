import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
