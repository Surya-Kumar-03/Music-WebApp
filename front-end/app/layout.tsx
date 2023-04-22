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
			<body>
				<div className='flex flex-col h-screen w-screen'>
					<div className='h-auto'>
						<Navbar />
					</div>
					<div className='h-full'>{children}</div>
					<div className='h-10'>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
