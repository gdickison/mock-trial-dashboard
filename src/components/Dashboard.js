import { render } from "@testing-library/react"
import { Fragment } from "react";

import DashboardHeader from './DashboardHeader';
import DashboardLinks from './DashboardLinks';

const Dashboard = ({headerImage, type, links}) => {
    return(
        <div>
            <DashboardHeader
                headerImage={headerImage}
                year={new Date().getFullYear()}
                state="Idaho"
                type={type.charAt(0).toUpperCase() + type.slice(1)}
            />
            <DashboardLinks links={links} />
            <h1>This is the {type} dashboard page</h1>
        </div>
    );
}

export default Dashboard;