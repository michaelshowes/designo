import scss from './button.module.scss';
import cx from 'classnames';

type ButtonProps = {
	variant?: 'dark' | 'light';
	label: string;
};

export default function Button({ variant = 'dark', label }: ButtonProps) {
	return (
		<button
			className={cx([scss.button], {
				[scss.dark]: variant === 'dark',
				[scss.light]: variant === 'light'
			})}
		>
			<span>{label}</span>
		</button>
	);
}
