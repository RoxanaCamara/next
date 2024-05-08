import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "../sidebarMenuItem/SidebarMenuItem";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const ROUTES = [
    {
      path: "main",
      title: "Dashboard",
      subTitle: "Visualization",
      icon: <IoBrowsersOutline width={50} />,
    },
    {
      path: "counter",
      title: "Counter",
      subTitle: "Conunter Cliente Side",
      icon: <IoCalculator width={50} />,
    },
    {
      path: "contact",
      title: "Contact",
      subTitle: "Contact with futures clients",
      icon: <IoCalculator width={50} />,
    },
  ];

  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span className="text-blue-500">Dash</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User photo"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Narela Camara</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {ROUTES.map((e) => (
          <SidebarMenuItem key={e.title} {...e} />
        ))}
      </div>
    </div>
  );
};