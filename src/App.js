
import './App.css';
import PageCustomHooks from './page/custom-hooks';
import PageUseCallBack from './page/useCallback-hooks';
import PageUseMemo from './page/useMemo-hooks';
import PageListNumber from './page/useMemo-hooks/list-number';
import PageListUser from './page/useMemo-hooks/list-user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* call back */}
      <PageUseCallBack />

      {/* use memo */}
      {/* <PageUseMemo /> */}
      {/* <PageListUser /> */}
      {/* <PageListNumber /> */}

      {/* CUSTOM HOOK */}
      {/* <------------- Custom hooks là việc các bạn tự tạo ra một hook mới với chức năng riêng biệt của nó. 
      Việc này giúp tách phần code logic ra khỏi UI giúp code tường minh, dễ quản lý hơn, tránh lặp lại code 
      và tái sử dụng. ------------------------------------------------------------------------------------->*/}
      {/* <PageCustomHooks /> */}
      </header>
    </div>
  );
}

export default App;
