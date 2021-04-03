import { render } from "@testing-library/react"
import { Fragment } from "react";

import DashboardHeader from './DashboardHeader';

const Dashboard = ({headerImage, type}) => {
    return(
        <Fragment>
            <DashboardHeader
                headerImage={headerImage}
                year={new Date().getFullYear()}
                state="Idaho"
                type={type.charAt(0).toUpperCase() + type.slice(1)}
            />
            <h1>This is the {type} dashboard page</h1>
        </Fragment>
    );
}

export default Dashboard;