import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "sonner";

import Home from "@/pages/Home";
import Sobre from "@/pages/Sobre";
import Historia from "@/pages/Historia";
import Produtos from "@/pages/Produtos";
import Categorias from "@/pages/Categorias";
import Segmentos from "@/pages/Segmentos";
import Catalogo from "@/pages/Catalogo";
import Marcas from "@/pages/Marcas";
import Blog from "@/pages/Blog";
import Artigo from "@/pages/Artigo";
import FAQ from "@/pages/FAQ";
import Orcamento from "@/pages/Orcamento";
import Contato from "@/pages/Contato";
import Privacidade from "@/pages/Privacidade";
import Termos from "@/pages/Termos";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Artigo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="/termos-de-uso" element={<Termos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
