// 필요없어서 주석처리함
// import logo from './logo.svg';
// import './App.css';
//[[각각만들어둔 컴포넌트를 렌더링할수 있게 import로 가져와서 사용]]
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";
// 4개의 영역을 그려야해서 4개를 만들어준다
// header 가로전체 100 영역 | Prototypes 왼쪽 | Oreders는 오른쪽 | Footer 하단
function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
