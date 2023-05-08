import scss from './heading.module.scss';

type HeadingProps = {
	type: 'h1' | 'h2' | 'h3';
	children: React.ReactNode;
};

export default function Heading({ type, children }: HeadingProps) {
	return (
		<>
			{type === 'h1' ? (
				<h1 className={scss.heading1}>{children}</h1>
			) : type === 'h2' ? (
				<h2 className={scss.heading2}>{children}</h2>
			) : type === 'h3' ? (
				<h3 className={scss.heading3}>{children}</h3>
			) : (
				<h1 className={scss.heading1}>{children}</h1>
			)}
		</>
	);
}
