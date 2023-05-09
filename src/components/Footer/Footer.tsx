import Container from '@layout/Container/Container';
import scss from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@assets/images/logo-light.png';
import { footer } from '@api/footer';
import FacebookIcon from '@assets/svg/FacebookIcon';
import YouTubeIcon from '@assets/svg/YouTubeIcon';
import TwitterIcon from '@assets/svg/TwitterIcon';
import PinterestIcon from '@assets/svg/PinterestIcon';
import InstagramIcon from '@assets/svg/InstagramIcon';
import Heading from '@components/ui/Heading/Heading';
import Button from '@components/ui/Button/Button';

function CallToAction() {
	const { cta } = footer;

	return (
		<section className={scss.cta}>
			<div className={scss.bg}></div>
			<div className={scss.ctaInner}>
				<div className={scss.text}>
					<Heading type='h2'>{cta.title}</Heading>
					<p>{cta.text}</p>
				</div>
				<Button
					link
					src={cta.link.url}
					label={cta.link.text}
					variant='light'
				/>
			</div>
		</section>
	);
}

export default function Footer({ cta = true }) {
	const { routes, company } = footer;

	return (
		<>
			{cta && <CallToAction />}
			<footer className={scss.footer}>
				<Container>
					<div className={scss.inner}>
						<div className={scss.upper}>
							<div className={scss.logo}>
								<Link href='/'>
									<Image
										src={logo}
										alt='logo'
										width={202}
										height={27}
									/>
								</Link>
							</div>
							<nav className={scss.footerMenu}>
								<ul>
									{routes.map((route, i) => (
										<li key={i}>
											<Link href={route.path}>{route.name}</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className={scss.lower}>
							<div className={scss.address}>
								<div className={scss.name}>{company.name}</div>
								<div className={scss.street}>{company.address}</div>
								<div className={scss.cityState}>{company.city}</div>
							</div>
							<div className={scss.contact}>
								<div className={scss.title}>Contact Us (Central Office)</div>
								<div className={scss.phone}>P : {company.phone}</div>
								<div className={scss.email}>M : {company.email}</div>
							</div>
							<ul className={scss.socials}>
								{company.socials.map((social, i) => (
									<li key={i}>
										<a href={social.url}>
											{social.name === 'facebook' ? (
												<FacebookIcon />
											) : social.name === 'youtube' ? (
												<YouTubeIcon />
											) : social.name === 'twitter' ? (
												<TwitterIcon />
											) : social.name === 'pinterest' ? (
												<PinterestIcon />
											) : social.name === 'instagram' ? (
												<InstagramIcon />
											) : null}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</footer>
		</>
	);
}
