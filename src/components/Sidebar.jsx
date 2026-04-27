import {
  Home,
  Search,
  Compass,
  Clapperboard,
  Heart,
  MessageCircle,
  PlusSquare,
  User
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Instagram</h2>

      <ul>
        <li><Home /> <span>Home</span></li>
        <li><Search /> <span>Search</span></li>
        <li><Compass /> <span>Explore</span></li>
        <li><Clapperboard /> <span>Reels</span></li>
        <li><MessageCircle /> <span>Messages</span></li>
        <li><Heart /> <span>Notifications</span></li>
        <li><PlusSquare /> <span>Create</span></li>
        <li><User /> <span>Profile</span></li>
      </ul>
    </div>
  );
}