import { Home, MessageCircle, Heart, PlusSquare, User } from "lucide-react";

export default function Header() {
  return (
    <div className="header">

      {/* LOGO */}
      <h2 className="logo">Instagram</h2>

      {/* BUSCA */}
      <input
        type="text"
        placeholder="Pesquisar"
        className="search"
      />

      {/* ÍCONES */}
      <div className="header-icons">
        <Home />
        <MessageCircle />
        <PlusSquare />
        <Heart />
        <User />
      </div>

    </div>
  );
}