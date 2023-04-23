"use client";
import { useState } from "react";
import { Music } from "../utils/datainterface";

const Card = (props: { data: Music }) => {
	const [cardHover, setCardHover] = useState(false);
	const data = props.data;
	return (
		<>
			<div
				className='relative flex flex-col p-3 gap-3 shadow-lg w-60 cursor-pointer transition-colors hover:bg-slate-200 rounded-xl justify-center items-center'
				onMouseEnter={() => {
					setCardHover(true);
				}}
				onMouseLeave={() => {
					setCardHover(false);
				}}
			>
				<div className='h-56 w-56 rounded-xl'>
					{data.poster === "" || data.poster === undefined ? (
						<div className='border border-1 rounded-lg h-full w-full flex items-center p-1 animate animate-pulse'>
							<svg
								className='text-gray-300'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 640 512'
							>
								<path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
							</svg>
						</div>
					) : (
						<img src={data.poster} className='w-full h-full rounded-xl' />
					)}
				</div>

				<div
					className={
						(cardHover ? "opacity-1 bottom-12" : "opacity-0 bottom-6") +
						" absolute flex transition-all justify-center items-center action-color shadow-lg w-10 h-10 rounded-full right-5"
					}
				>
					<div className=''>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
							/>
						</svg>
					</div>
				</div>
				<div className='flex h-5 w-56 justify-start items-center relative'>
					<span className='font-semibold'>{data.title}</span>
				</div>
			</div>
		</>
	);
};

export default Card;
