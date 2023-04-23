const Footer = () => {
	return (
		<>
			<div className='flex justify-center items-center bg-slate-100 h-12 sm:h-8 w-screen'>
				<span className="sm:m-10"></span>Created by
				<a
					href='https://www.linkedin.com/in/aryan-amish'
					className='px-1 hover:underline font-semibold'
				>
					Aryan
				</a>
				&
				<a
					href='https://www.linkedin.com/in/bandepalli-surya/'
					className='px-1 hover:underline font-semibold'
				>
					Surya
				</a>
			</div>
		</>
	);
};

export default Footer;
