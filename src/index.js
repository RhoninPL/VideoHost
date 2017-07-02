import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainPage from 'mainPage/mainPage';

injectTapEventPlugin();
ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);