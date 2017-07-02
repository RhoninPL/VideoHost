import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import React from 'react';
import { AppBar } from 'material-ui';
import App from 'App';

const muiTheme = getMuiTheme({
    palette: {
        textColor: '#FFF',
    },
    appBar: {
        height: 50,
    },
});

class Main extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="My AppBar" />
                    <App />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;