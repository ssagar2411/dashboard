import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import TopBar from "../dashboard/topbar";
const mdTheme = createTheme();

function Dashboard() {
    return (
        <div>

            <TopBar />
            <div className="App">
                Dashboard
            </div>
        </div>
       
        
    );
}

export default Dashboard;