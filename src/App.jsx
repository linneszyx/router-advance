import { Route, Routes, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuotes from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} exact />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
