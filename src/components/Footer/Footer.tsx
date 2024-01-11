import {Img, staticFile} from 'remotion';

import './Footer.css';

interface props {
	frame: number;
	name: string;
	size: 'lg' | 'rg';
}

function ReciterName({frame, name, size = 'rg'}: props) {
	return (
		<div
			className="wrapper end"
			style={{
				opacity: Math.min(1, frame / 50),
			}}
		>
			<div className="footer">
				<Img src={staticFile('logo.png')} className={`logo ${size}`} />
				<p className={`rectier ${size}`}>{`القارئ: ${name}`}</p>
			</div>
		</div>
	);
}

export default ReciterName;
