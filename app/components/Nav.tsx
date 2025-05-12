import { LINKS } from '@/constant';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = ({ containerStyles, linkStyles }: navProps) => {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return (
		<nav className={`${containerStyles}`}>
			{LINKS.map((link) => {
				// For About, Services, Projects, and Contact, always use regular Link
				if (link.path === 'about' || link.path === 'services' || link.path === 'projects' || link.path === 'contact') {
					return (
						<Link
							key={link.title}
							href={`/${link.path}`}
							className={`${linkStyles} ${pathname === `/${link.path}` ? 'active' : ''}`}
						>
							{link.title}
						</Link>
					);
				}
				// For Home, use ScrollLink on homepage and regular Link elsewhere
				else if (isHomePage) {
					return (
						<ScrollLink
							key={link.title}
							to={link.path}
							offset={link.offset}
							spy={true}
							smooth={true}
							duration={500}
							activeClass="active"
							className={`${linkStyles}`}
						>
							{link.title}
						</ScrollLink>
					);
				} else {
					return (
						<Link
							key={link.title}
							href={`/${link.path === 'home' ? '' : link.path}`}
							className={`${linkStyles} ${pathname === `/${link.path === 'home' ? '' : link.path}` ? 'active' : ''}`}
						>
							{link.title}
						</Link>
					);
				}
			})}
		</nav>
	);
};

type navProps = {
	containerStyles: string;
	linkStyles: string;
};

export default Nav;
