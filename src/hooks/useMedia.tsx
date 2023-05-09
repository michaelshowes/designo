import { useEffect, useState } from 'react';

export default function useMedia() {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth);
		}
	}, []);

	useEffect(() => {
		let timeoutId: string | number | NodeJS.Timeout | undefined;

		const handleResize = () => {
			clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				setWindowWidth(window.innerWidth);
			}, 100);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (windowWidth! < 768) {
			setIsMobile(true);
			setIsTablet(false);
			setIsDesktop(false);
		} else if (windowWidth! >= 768 && windowWidth! < 1024) {
			setIsMobile(false);
			setIsTablet(true);
			setIsDesktop(false);
		} else {
			setIsMobile(false);
			setIsTablet(false);
			setIsDesktop(true);
		}
	}, [windowWidth]);

	return { windowWidth, isMobile, isTablet, isDesktop };
}
