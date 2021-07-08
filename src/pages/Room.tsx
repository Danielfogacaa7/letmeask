import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/room.scss";

export function Rooom() {
	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg}></img>
					<div>codigo</div>
				</div>
			</header>
			<main>
				<div className="room-title">
					<h1>Sala React</h1>
					<span>4 perguntas</span>
				</div>
				<form>
					<textarea placeholder="Oque você quer perguntar?" />
					<div className="form-footer">
						<span>
							Para fazer uma pergunta, <button>faça seu login</button>.
						</span>
						<Button type="submit">Enviar pergunta</Button>
					</div>
				</form>
			</main>
		</div>
	);
}
