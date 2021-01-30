
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Search from '../../components/search';
import { RootState } from '../../store';
import { search, setQuery } from '../../store/reducers/gallery/actions';
import { GalleryState } from '../../store/reducers/gallery/types';
import './index.css';

const mapStateToProps = (state: RootState): GalleryState => state.gallery;

const mapDispatchToProps = {
    search: (x: string) => search(x, 10),
    setQuery: (x: string) => setQuery(x)
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type GalleryProps = ConnectedProps<typeof connector>

const Gallery = (props: GalleryProps) => {
    const { query = '', images = [], search, setQuery } = props;

    return (
        <main>
            <Search 
                value={query} 
                onChange={setQuery} 
                onKeyPress={search}
            />
            <div className="gallery">
                {(images as [x:string]).map((image: string, i: number) => <img src={image} key={i} alt={`dog-${i}`}/>)}
            </div>
        </main>
    )
}

export default connector(Gallery);
