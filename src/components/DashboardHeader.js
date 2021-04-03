import { Fragment } from 'react';

const DashboardHeader = ({headerImage, year, state, type}) => {
    return (
        <div>
            <img className="state-logo" src={headerImage} ></img>
            <h2 className="dash-header">{year} {state} Mock Trial {type} Dashboard</h2>
            <h3 className="dash-header">This will be updated throughout the competition. All times are Mountain Time</h3>
        </div>
    );
}

export default DashboardHeader;