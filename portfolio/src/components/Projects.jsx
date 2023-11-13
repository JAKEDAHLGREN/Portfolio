import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';
import taskBuddy from '../assets/task-buddy.jpeg'

const Projects = (...args) => {
	const items = [
		{
			src: taskBuddy ,
			altText: 'Project 1',
			caption: 'Task Buddy',
			key: 1,
		},
		{
			src: 'https://picsum.photos/id/456/1200/400',
			altText: 'Project 2',
			caption: 'Tinder Clone',
			key: 2,
		},
		{
			src: 'https://picsum.photos/id/678/1200/400',
			altText: 'Project 3',
			caption: 'To-Do List',
			key: 3,
		},
		{
			src: 'https://picsum.photos/id/678/1200/400',
			altText: 'Project 4',
			caption: 'Pig Latin Translator',
			key: 4,
		},
		{
			src: 'https://picsum.photos/id/678/1200/400',
			altText: 'Project 5',
			caption: 'Treasure Hunt',
			key: 5,
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img
					src={item.src}
					alt={item.altText}
				/>
				<CarouselCaption
					captionText={item.caption}
					captionHeader={item.caption}
				/>
			</CarouselItem>
		);
	});
	return (
		<>
			<Carousel
				activeIndex={activeIndex}
				next={next}
				previous={previous}
				{...args}
			>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction='prev'
					directionText='Previous'
					onClickHandler={previous}
				/>
				<CarouselControl
					direction='next'
					directionText='Next'
					onClickHandler={next}
				/>
			</Carousel>
			{/* <div className='projects'>
				<h1>Projects</h1>
				<div className='tictac'>
					<h2>Tic Tac Toe</h2>
					<img
						className='ttt'
						src='./techpic/TTT.png'
						alt=''
					/>
					<h3>
						This was the first project that I deployed while studying at LEARN
						Academy. I collaborated with a fellow student to build this
						multiplayer Tic Tac Toe application using React.
					</h3>
				</div>
				<div className='treasure'>
					<h2>Treasure Hunt</h2>
					<img
						className='soon'
						src='./techpic/SOON.png'
						alt=''
					/>
					<h3>
						Before I fully started my web developement journey, I took a weekend
						web developer workshop that showed us how to build a simple
						"Treasure hunt" game using JavaScript, HTML, and CSS. I decided to
						revisit this project so that I could refactor the game using React.
					</h3>
				</div>
				<div className='plt'>
					<h2>Pig Latin Translator</h2>
					<img
						className='soon'
						src='./techpic/SOON.png'
						alt=''
					/>
					<h3>
						{' '}
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
						excepturi non perferendis consectetur veniam reprehenderit similique
						culpa,
					</h3>
				</div>
				<div className='tinder'>
					<h2>Cat Tinder</h2>
					<img
						className='soon'
						src='./techpic/SOON.png'
						alt=''
					/>
					<h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
						quibusdam doloremque veniam ad, ex laudantium molestias autem qui
					</h3>
				</div>
				<div className='cap'>
					<h2>Capstone Project</h2>
					<img
						className='soon'
						src='./techpic/SOON.png'
						alt=''
					/>
					<h3>
						{' '}
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
						quod vero asperiores corporis fugit, totam, tempore dolor omnis et
						at
					</h3>
				</div>
			</div> */}
		</>
	);
};

export default Projects;
