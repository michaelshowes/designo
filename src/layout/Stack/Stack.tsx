import scss from './stack.module.scss';

type StackProps = {
	children: React.ReactNode;
	gap: number;
};

export default function Stack({ children, gap }: StackProps) {
	return (
		<div
			className={scss.stack}
			style={{
				gap: gap
			}}
		>
			{children}
		</div>
	);
}
