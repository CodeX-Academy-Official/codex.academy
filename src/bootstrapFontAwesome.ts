import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faPeopleCarry,
  faSimCard,
  faClock,
  faTv,
  faTasks,
  faPercent,
  faUsers,
  faQuoteLeft,
  faPencilRuler,
  faLaptopCode,
  faServer,
  faUser,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessQueen,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function bootstrapper() {
  library.add(
    faUsers,
    faPercent,
    faTasks,
    faTv,
    faSimCard,
    faClock,
    faPeopleCarry,
    faBriefcase,
    faQuoteLeft,
    faServer,
    faPencilRuler,
    faLaptopCode,
    faUser,
    faChessPawn,
    faChessBishop,
    faChessKnight,
    faChessQueen,
    faDollarSign
  );
}
