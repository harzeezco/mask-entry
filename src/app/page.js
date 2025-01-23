'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<div className='overflow-hidden'>
			<div className='h-dvh w-full bg-black flex justify-center items-center text-white text-4xl'>
				Section 1
			</div>

			<div className='h-dvh w-full bg-black flex justify-center items-center text-white text-4xl'>
				Section 2
			</div>
			<div ref={ref} className='h-dvh relative'>
				<motion.div style={{ scaleX: scale }}>
					<Image src='/1.webp' alt='1' fill className='w-full' />
				</motion.div>
			</div>
		</div>
	);
}
