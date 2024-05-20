import { BrowserRouter, Route, Routes as Switch, Navigate, HashRouter } from "react-router-dom";
import { Eventos, Participantes, Principal } from "../pages";
export const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" element={<Principal />} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/alunos" element={<Participantes/>} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Switch>
        </HashRouter>
    );
}
