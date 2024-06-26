import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "../sidebarMenuItem/SidebarMenuItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Sidebar = () => {
	const ROUTES = [
		{
			path: "main",
			title: "Main",
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
		{
			path: "pricing",
			title: "Pricing",
			subTitle: "Pricing with futures clients",
			icon: <IoCalculator width={50} />,
		},
		{
			path: "about",
			title: "About",
			subTitle: "About with futures clients",
			icon: <IoCalculator width={50} />,
		},
	];

	return (
		<div
			id='menu'
			style={{ width: "400px" }}
			className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'>
			<div id='logo' className='my-4 px-6'>
				<h1 className='flex items-center  text-lg md:text-2xl font-bold text-white'>
					<IoLogoReact className='mr-2' />
					<span> Dash</span>
					<span className='text-blue-500'>8</span>.
				</h1>
				<p className='text-slate-500 text-sm'>
					Manage your actions and activities
				</p>
			</div>

			<div id='profile' className='px-6 py-10'>
				<p className='text-slate-500'>Welcome back,</p>
				<Link href='#' className='inline-flex space-x-2 items-center'>
					<span>
						<Image
							className='rounded-full w-8 h-8'
							src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
							alt='User avatar'
							width={50}
							height={50}
							priority
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>
						Fernando Herrera
					</span>
				</Link>
			</div>

			<div id='nav' className='w-full px-6'>
				{ROUTES.map((item) => (
					<SidebarMenuItem key={item.path} {...item} />
				))}

			
			</div>
		</div>
	);
};
