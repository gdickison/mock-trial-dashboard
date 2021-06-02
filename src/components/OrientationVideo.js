import { Fragment } from 'react';
import NavLinks from './NavigationMenu';

const OrientationVideo = ({video}) => {
    return (
        <Fragment>
            <h1>This is the Orientation Video page</h1>
            <NavLinks />
            <h2 className="headline">Judge Orientation Video</h2>
            <div className="video-wrapper" >
                <iframe title="orientation video" width="560" height="349" src={video} allowFullScreen={true} />
            </div>
        </Fragment>
    )
}

export default OrientationVideo;