import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineHomeRepairService, MdAttachMoney } from "react-icons/md";
import { IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { FcServices } from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const sidebarMenu = [
    { menu: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: '/dashboard' },
    { menu: "Service", icon: <MdOutlineHomeRepairService size={20} />, path: '/dashboard/service' },
    { menu: "Booking", icon: <IoBookmarkOutline size={20} />, path: '/dashboard/booking' },
    { menu: "Earning", icon: <MdAttachMoney size={20} />, path: '/dashboard/earning' },
    { menu: "Settings", icon: <IoSettingsOutline size={20} />, path: '/dashboard/settings' },
  ];

  return (
    <div className="h-screen text-white flex flex-col justify-between p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold mb-8">
        EasyFind <FcServices size={28} />
      </div>

      {/* Sidebar Menu */}
      <nav className="flex flex-col gap-3 flex-1">
        {sidebarMenu.map((item) => (
          <Link
            to={item.path}
            key={item.menu}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition 
              ${location.pathname === item.path
                ? "bg-DustyRose text-lavender"
                : "hover:bg-gray-700"
              }`}
          >
            {item.icon}
            <span>{item.menu}</span>
          </Link>
        ))}
      </nav>

      {/* Profile Section */}
      <button className="border-t border-gray-700 pt-4 ">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;


// import React from 'react'
// import { LuLayoutDashboard } from "react-icons/lu";
// import { MdOutlineHomeRepairService } from "react-icons/md";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { MdAttachMoney } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FcServices } from "react-icons/fc";
// import { Link } from 'react-router-dom';

// function Sidbar() {
//   const sidebarMenu = [
//     { menu: "Dashboard", icon: <LuLayoutDashboard />, path: '/dashboard' },
//     { menu: "Service", icon: <MdOutlineHomeRepairService />, path: '/service' },
//     { menu: "Booking", icon: <IoBookmarkOutline />, path: '/booking' },
//     { menu: "Earning", icon: <MdAttachMoney />, path: '/earning' },
//     { menu: "Settings", icon: <IoSettingsOutline />, path: '/settings' },
//   ]
//   return (
//     <div >
//       {/* Logo */}
//       <div className="font-bold text-2xl flex items-center gap-2 text-white cursor-pointer">
//         EasyFind <span className="text-3xl"><FcServices /></span>
//       </div>

//       {/* sidebar menu */}
//       <div>
//         {sidebarMenu.map((menu)=>(
//           <Link to={menu.path} key={menu.menu}>
//             {menu.icon} {menu.menu}
//           </Link>
//         ))}
//       </div>

//       {/* profile */}
//       <div>
//         profile
//       </div>
//     </div>
//   )
// }

// export default Sidbar