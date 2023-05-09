import scss from './button.module.scss';
import cx from 'classnames';

type ButtonProps = {
	variant?: 'dark' | 'light';
	label: string;
	link?: boolean;
	src?: string;
};

export default function Button({
	variant = 'dark',
	label,
	link = false,
	src
}: ButtonProps) {
	return (
		<>
			{link ? (
				<a
					href={src}
					className={cx([scss.button], {
						[scss.dark]: variant === 'dark',
						[scss.light]: variant === 'light'
					})}
				>
					<span>{label}</span>
				</a>
			) : (
				<button
					className={cx([scss.button], {
						[scss.dark]: variant === 'dark',
						[scss.light]: variant === 'light'
					})}
				>
					<span>{label}</span>
				</button>
			)}
		</>
	);
}
