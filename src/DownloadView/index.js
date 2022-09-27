import React from 'react';

function DownloadView(props) {
    return (
        <div className='ContainerDownload'>
            <h1 className='textWhite'>Download the app now</h1>
            <h2 className='textDownloadOne'>
                Most calendars are
                designed for teams.
            </h2>
            <h2 className='textDownloadTwo'>
                Available on your favorite store. Start your premium experience now
            </h2>
            <div className='ContainerBtnDownload'>
                <button>Buy now</button>
                <button>Try for free</button>
            </div>
        </div>
    );
}

export default DownloadView;