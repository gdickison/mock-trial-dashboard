import DashboardHeader from '../components/DashboardHeader';
import DashboardLinks from '../components/DashboardLinks';
import NavLinks from '../components/NavigationMenu';

const Dashboard = ({headerImage, type, links}) => {
    return(
        <div>
            <h1>This is the {type} dashboard page</h1>
            <NavLinks />
            <DashboardHeader
                headerImage={headerImage}
                year={new Date().getFullYear()}
                state="Idaho"
                type={type.charAt(0).toUpperCase() + type.slice(1)}
            />
            <DashboardLinks links={links} />
        </div>
    );
}

export default Dashboard;