import { AppShell } from "@mantine/core";
import AppProvider from "./providers/provider";
import HeaderFilms from "~widgets/header";
import Main from "~pages/main";

function App() {
  return (
    <AppProvider>
      <AppShell>
        <HeaderFilms />
        <Main />
      </AppShell>
    </AppProvider>
  );
}
export default App;
