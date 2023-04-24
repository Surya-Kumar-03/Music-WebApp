import Link from 'next/link';
import {InterfaceMusic} from '../../utils/datainterface';
import Card from './card';

const MusicListSmall = (props: {title: string; musics: InterfaceMusic[]}) => {
	return (
		<>
			<div className="px-10 pt-10 flex flex-col gap-2">
				<div className="flex justify-between px-2">
					<span className=" font-semibold text-2xl">{props.title}</span>
					<Link href={`genre/${props.title}`} className="hover:underline">
						<span className="font-semibold">Show all</span>
					</Link>
				</div>
				<div className="flex flex-wrap justify-center  gap-2">
					{props.musics.map((music, index) => {
						return <Card key={music.link + index} data={music} />;
					})}
				</div>
			</div>
		</>
	);
};

export default MusicListSmall;
