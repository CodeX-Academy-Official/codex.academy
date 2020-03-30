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
  faQuoteLeft
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
    faQuoteLeft
  );
}
