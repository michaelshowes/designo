import DesignCards from '@components/DesignCards/DesignCards';
import HomeHero from '@components/HomeHero/HomeHero';
import { home } from '@api/home';
import Stack from '@layout/Stack/Stack';

export default function Home() {
	return (
		<Stack gap={120}>
			<HomeHero data={home.homeHero} />
			<DesignCards data={home.designCards} />
		</Stack>
	);
}
