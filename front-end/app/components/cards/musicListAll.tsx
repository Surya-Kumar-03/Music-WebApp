import Link from 'next/link';
import {Music} from '../../utils/datainterface';
import Card from './card';

const MusicListAll = (props: {title: string; musics: Music[]}) => {
	return (
		<>
			<div className="px-10 pt-10 flex flex-col gap-2">
				<div className="flex justify-between px-2">
					<span className=" font-semibold text-2xl">{props.title}</span>
				</div>
				<div className="flex flex-wrap justify-center  gap-2">
					{props.musics.map((music) => {
						return <Card key={music.link} data={music} />;
					})}
				</div>
			</div>
		</>
	);
};

export default MusicListAll;
