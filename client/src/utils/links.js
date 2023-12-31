import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const currentUserId = JSON.parse(localStorage.getItem("userId"));

const links = [
  { id: 1, text: "stats", path: "/dashboard/stats", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "My Habits",
    path: `/dashboard/habits/${currentUserId}`,
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "New habit",
    path: "/dashboard/new-habit",
    icon: <FaWpforms />,
  },
  { id: 4, text: "Profile", path: "/dashboard", icon: <ImProfile /> },
];

export default links;
