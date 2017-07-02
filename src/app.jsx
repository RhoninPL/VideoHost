import React from 'react';
import ReactDOM from 'react-dom';
import { GridList, GridTile, StarBorder, IconButton, Subheader } from 'material-ui';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 400,
        overflowY: 'auto',
        marginBottom: 24,
    },
};

const tilesData = [
    {
        id: 1,
        img: 'DSC00663.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: 2,
        img: 'DSC00663.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        id: 3,
        img: 'DSC00663.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: 4,
        img: 'DSC00663.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        id: 5,
        img: 'DSC00663.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        id: 6,
        img: 'DSC00663.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        id: 7,
        img: 'DSC00663.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        id: 8,
        img: 'DSC00663.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

const iconButton = (
    <IconButton><StarBorder color="white" /></IconButton>
);

const App = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={200}
            style={styles.gridList}>
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.id}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={IconButton}>
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default App;