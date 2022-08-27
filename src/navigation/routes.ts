import Pages from '../enum/Pages';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Settings from '../pages/Settings';
import CreateCalendar from '../pages/CreateCalendar';
import EditDetails from "../pages/EditDetails";

export default {
  [Pages.HOME]: Home,
  [Pages.DETAILS]: Details,
  [Pages.EDIT_DETAILS]: EditDetails,
  [Pages.SETTINGS]: Settings,
  [Pages.CREATE_CALENDAR]: CreateCalendar,
};
