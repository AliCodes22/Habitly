import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "stats", path: "/dashboard/stats", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "My Habits",
    path: "/dashboard/habits",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "Create a new habit",
    path: "/dashboard/new-habit",
    icon: <FaWpforms />,
  },
  { id: 4, text: "Profile", path: "/dashboard/profile", icon: <ImProfile /> },
];

export default links;
