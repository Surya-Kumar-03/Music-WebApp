const ProfileSkeleton = () => {
	return (
		<div className="flex justify-center items-center w-full">
			<div className="w-10 h-10 rounded-full skeleton-bg-color animate animate-pulse"></div>
		</div>
	);
};

const NavbarSkeleton = {
	Profile: ProfileSkeleton,
};

export default NavbarSkeleton;
