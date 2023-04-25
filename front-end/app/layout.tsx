import Footer from './components/footer/footer';
import './globals.css';
import Navbar from './components/navbar/navbar';
import PlayAudio from './components/playback/audio';
import {Providers} from './redux/provider';
import Player from './redux/features/audioPlayer';
import dynamic from 'next/dynamic';
import PlayVideo from './components/playback/video';

export const metadata = {
	title: 'Music Web App',
	description: '',
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<html lang="en">
			<body className="overflow-auto overflow-x-hidden flex justify-center flex-col">
				<Navbar />
				<Providers>
					<>
						<PlayVideo />
						{/* <div className="flex items-center justify-center">
							<div className="container">
								<div className="">{children}</div>
								<div className="sticky bottom-0 flex justify-center items-center">
									<PlayAudio />
								</div>
								<Footer />
							</div>
						</div> */}
					</>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
