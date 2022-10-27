import Homepage from './pages/Homepage'
import Collections from './pages/Collections'
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/collections/:rewardType" element={<Collections />} />
                <Route path="/connect" element={<App  />} />

            </Routes>
        </BrowserRouter>
    )
}

export default routes