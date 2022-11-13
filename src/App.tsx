import { ConfigProvider } from "antd";
import reactLogo from "./assets/react.svg";
import AppLayout from "./components/AppLayout";
import AppPage from "./components/AppPage";

function App() {
  return (
    <ConfigProvider>
      <AppLayout logo={<img src={reactLogo} alt="React Logo" />}>
        <AppPage
          onClickProjectCreate={() => {}}
          onClickProjectEdit={(id: string) => {}}
          onClickProjectName={(id: string) => {}}
        />
      </AppLayout>
      {/* TODO: modals manager */}
    </ConfigProvider>
  );
}

export default App;
