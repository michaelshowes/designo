'use client';

import Heading from '@components/ui/Heading/Heading';
import scss from './designCards.module.scss';
import Link from 'next/link';
import RightArrowIcon from '@assets/svg/RightArrowIcon';
import Image from 'next/image';
import useMedia from '@hooks/useMedia';
import cx from 'classnames';

type CardProps = {
	count: number;
	data: {
		name: string;
		url: string;
		image: {
			mobile: string;
			tablet: string;
			desktop: {
				sm: string;
				lg?: string;
			};
		};
	};
};

function Card({ data, count }: CardProps) {
	const { name, url, image } = data;
	const { isMobile, isTablet, isDesktop } = useMedia();

	return (
		<Link
			className={scss.card}
			href={url}
		>
			<div className={scss.overlay} />
			<Image
				className={scss.mobile}
				src={image.mobile}
				alt='design image'
				fill
				sizes='(max-width: 767px) 704px, (max-width: 999px) 904px, 545px'
			/>
			<Image
				className={scss.tablet}
				src={image.tablet}
				alt='design image'
				fill
				sizes='(max-width: 767px) 704px, (max-width: 999px) 904px, 545px'
			/>
			{count === 3 && image.desktop.lg ? (
				<Image
					className={scss.desktop}
					src={image.desktop.lg}
					alt='design image'
					fill
					sizes='(max-width: 767px) 704px, (max-width: 999px) 904px, 545px'
				/>
			) : (
				<Image
					className={scss.desktop}
					src={image.desktop.sm}
					alt='design image'
					fill
					sizes='(max-width: 767px) 704px, (max-width: 999px) 904px, 545px'
				/>
			)}

			<div className={scss.text}>
				<Heading type='h2'>{name}</Heading>
				<span>View Projects</span>
				<RightArrowIcon />
			</div>
		</Link>
	);
}

type DesignCardsProps = {
	data: {
		name: string;
		url: string;
		image: {
			mobile: string;
			tablet: string;
			desktop: {
				sm: string;
				lg?: string;
			};
		};
	}[];
};

export default function DesignCards({ data }: DesignCardsProps) {
	return (
		<section className={scss.designCards}>
			<div
				className={cx([scss.inner], {
					[scss.grid]: data.length === 3
				})}
			>
				{data.map((card, i) => (
					<Card
						key={i}
						data={card}
						count={data.length}
					/>
				))}
			</div>
		</section>
	);
}
