import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomProps = {
	code: string;
};

export function RoomCode(props: RoomProps) {
	function copyRoomCodeToClipBoars() {
		navigator.clipboard.writeText(props.code);
	}

	return (
		<button className="room-code" onClick={copyRoomCodeToClipBoars}>
			<div>
				<img src={copyImg} alt="Copiar" />
			</div>
			<span>Sala #{props.code}</span>
		</button>
	);
}
