import Footer from "./footer/footer";
import "./globals.css";
import Navbar from "./navbar/navbar";

export const metadata = {
	title: "Music Web App",
	description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body className='overflow-auto overflow-x-hidden'>
				<Navbar />
				<div className='flex items-center justify-center'>
					<div className=''>
						<div className=''>{children}</div>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;