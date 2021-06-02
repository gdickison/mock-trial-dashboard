import DashboardLinks from './DashboardLinks';
import DashboardHeader from './DashboardHeader';
import NavLinks from './NavigationMenu';

const MyTeam = ({links, headerImage, type}) => {
    return (
        <div>
            <h1>This is the MyTeam page</h1>
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

export default MyTeam;