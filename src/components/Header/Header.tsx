'use client';

import Image from 'next/image';
import scss from './header.module.scss';
import logo from '@assets/images/logo-dark.png';
import MenuIcon from '@assets/svg/MenuIcon';
import Link from 'next/link';
import { useState } from 'react';
import CloseIcon from '@assets/svg/CloseIcon';
import cx from 'classnames';

const routes = [
	{
		name: 'Our Company',
		path: '/our-company'
	},
	{
		name: 'Locations',
		path: '/locations'
	},
	{
		name: 'Contact',
		path: '/contact'
	}
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={scss.header}>
			<div className={scss.inner}>
				<Link
					href='/'
					className={scss.image}
				>
					<Image
						src={logo}
						alt='logo'
						width={404}
						height={54}
					/>
				</Link>
				<nav className={scss.desktopMenu}>
					<ul>
						{routes.map((route, i) => (
							<li key={i}>
								<Link href={route.path}>{route.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<button onClick={() => setIsOpen(!isOpen)}>
					{!isOpen ? <MenuIcon /> : <CloseIcon />}
				</button>
			</div>
			<nav
				className={cx([scss.mobileMenu], {
					[scss.open]: isOpen
				})}
			>
				<ul>
					{routes.map((route, i) => (
						<li key={i}>
							<Link href={route.path}>{route.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div
				className={cx([scss.overlay], {
					[scss.open]: isOpen
				})}
				onClick={() => setIsOpen(false)}
			/>
		</header>
	);
}
