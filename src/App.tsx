import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Rooom } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import "../src/styles/global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/rooms/new" exact component={NewRoom} />
					<Route path="/rooms/:id" component={Rooom} />
					<Route path="/admin/rooms/:id" component={AdminRoom} />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
