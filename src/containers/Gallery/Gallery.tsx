
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Search from '../../components/search';
import { withInfiniteScroll } from '../../mixins/InfiniteScroll';
import { RootState } from '../../store';
import { searchAction } from '../../store/reducers/gallery/actions';
import './index.css';

const mapStateToProps = (state: RootState): RootState => state;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        search: searchAction(dispatch),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type GalleryProps = ConnectedProps<typeof connector>


const Gallery = (props: GalleryProps) => {
    const { breeds = [], gallery, search } = props;
    const { query = '', imageStore = {}, loading } = gallery;

    const images: string[] = imageStore[query].images;

    const Scrollable = withInfiniteScroll(()=> <ul className="gallery">
        {images.map((image: string, i: number) => <li key={i}><img loading="lazy" src={image} alt={`${query}-${i}`}/></li>)}
    </ul>)

    return (
        <React.Fragment>
            <header className="header">
                <h4>Search for your Favourite Dog!</h4>
                <Search 
                    value={query} 
                    onChange={search} 
                    options={breeds}
                    className={'select'}
                /> 
            </header>
            <main>
                <Scrollable 
                    loading={loading} 
                    onScrolled={()=>search(query)}
                />            
            </main>
        </React.Fragment>
    )
}

export default connector(Gallery);
