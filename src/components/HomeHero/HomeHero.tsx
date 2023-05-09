import Heading from '@components/ui/Heading/Heading';
import scss from './homeHero.module.scss';
import Button from '@components/ui/Button/Button';
import Image from 'next/image';
import img from '@assets/images/image-hero-phone.png';
import HomeHeroBg from '@assets/svg/HomeHeroBg';

type HomeHeroProps = {
	data: {
		title: string;
		description: string;
		button: string;
	};
};

export default function HomeHero({ data }: HomeHeroProps) {
	const { title, description, button } = data;

	return (
		<section className={scss.homeHero}>
			<HomeHeroBg />
			<div className={scss.inner}>
				<div className={scss.content}>
					<Heading type='h1'>{title}</Heading>
					<p>{description}</p>
					<Button
						label={button}
						variant='light'
					/>
				</div>
				<div className={scss.image}>
					<Image
						src={img}
						alt='Image of a phone'
						width={624}
						height={913}
						priority
					/>
				</div>
			</div>
		</section>
	);
}
