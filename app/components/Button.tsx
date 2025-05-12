'use client';

import { FaUser } from 'react-icons/fa';

type ButtonProps = {
	type: 'button' | 'submit';
	title: string;
	icon?: React.ReactNode;
	variant: string;
};

function Button({ type, title, icon, variant }: ButtonProps) {
	return (
		<button type={type} className={`flexCenter gap-2 border rounded-full ${variant}`}>
			{icon && <span>{icon}</span>}
			<span className="whitespace-nowrap cursor-pointer bold-16">{title}</span>
		</button>
	);
}

export default Button;
