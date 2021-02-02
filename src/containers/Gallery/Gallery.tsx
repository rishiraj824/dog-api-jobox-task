
import React, { createRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Image from '../../components/image';
import Search from '../../components/search';
import { Spinner } from '../../components/spinner';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { RootState } from '../../store';
import { search, searchAction, setQuery } from '../../store/reducers/gallery/actions';
import './index.css';

const mapStateToProps = (state: RootState): RootState => state;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        search: searchAction(dispatch),
        setQuery: (query: string) => {
            dispatch(setQuery(query));
            search(dispatch);
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type GalleryProps = ConnectedProps<typeof connector>


const Gallery = (props: GalleryProps) => {
    const { breeds = [], gallery, search, setQuery } = props;
    const { query = 'pug', imageStore = {}, loading } = gallery;

    const images: string[] = imageStore[query].images;
    const containerRef = createRef<HTMLElement>()

    const scrollRef = useInfiniteScroll({ onBottom: search, loading, containerRef });

    return (
        <React.Fragment>
            <nav className="header">
                <h5>Search for your Favourite Dog!</h5>
                <Search 
                    value={query} 
                    onChange={setQuery} 
                    options={breeds}
                    className={'select'}
                /> 
            </nav>
            <main className="main" ref={containerRef}>                
                <ul ref={scrollRef} className="gallery">
                    {images.map((image: string, i: number) => <li key={i}>
                        <Image className="thumbnail" alt={`${query}-${i}`} src={image} />
                    </li>)}
                </ul>
                {loading && <Spinner className={'spinner'}/>} 
            </main>
        </React.Fragment>
    )
}

export default connector(Gallery);
