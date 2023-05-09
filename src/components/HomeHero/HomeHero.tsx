import Heading from '@components/ui/Heading/Heading';
import scss from './homeHero.module.scss';
import { homeHeroData as data } from '@api/homeHero';
import Button from '@components/ui/Button/Button';
import Image from 'next/image';
import img from '@assets/images/image-hero-phone.png';
import HomeHeroBg from '@assets/svg/HomeHeroBg';

export default function HomeHero() {
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
						fill
					/>
				</div>
			</div>
		</section>
	);
}
