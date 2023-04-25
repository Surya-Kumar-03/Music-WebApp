'use client';
import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Card = () => {
	const [isCardClicked, setCardClicked] = useState(false);

	const handleClick = () => {
		// Handle click event here
		setCardClicked(!isCardClicked);
	};

	return (
		<motion.div
			className="card"
			onClick={handleClick}
			initial={{scale: 1}}
			animate={{scale: isCardClicked ? 1.5 : 1}}
			transition={{duration: 0.5}}
			style={{
				position: 'absolute',
				top: isCardClicked ? '50%' : '0',
				left: isCardClicked ? '50%' : '0',
				transform: isCardClicked ? 'translate(-50%, -50%)' : '',
				width: isCardClicked ? '90%' : '200px',
				height: isCardClicked ? '90%' : '300px',
				background: 'white',
				padding: '16px',
				borderRadius: '8px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				cursor: 'pointer',
				zIndex: isCardClicked ? 2 : 1,
			}}>
			{/* Card content goes here */}
			<h1>Card Title</h1>
			<p>Card Description</p>
		</motion.div>
	);
};

const CardContainer = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardContainer;
