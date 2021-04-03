import { Link } from 'react-router-dom';

const DashboardLinks = ({links}) => {
    return(
        <div>
            <h2 className="dash-header" >Important Links</h2>
            <ul>
                {links.map(link => {
                    return (
                        <Link to={link.url} className="link">{link.name}</Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default DashboardLinks;