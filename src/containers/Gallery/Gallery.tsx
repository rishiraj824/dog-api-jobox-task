
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Image from '../../components/image';
import Search from '../../components/search';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
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

    const scrollRef = useInfiniteScroll({ onBottom: () => search(query), loading });

    return (
        <React.Fragment>
            <nav className="header">
                <h5>Search for your Favourite Dog!</h5>
                <Search 
                    value={query} 
                    onChange={search} 
                    options={breeds}
                    className={'select'}
                /> 
            </nav>
            <main>                
                <ul ref={scrollRef} className="gallery">
                    {images.map((image: string, i: number) => <li key={i}>
                        <Image className="thumbnail" alt={`${query}-${i}`} src={image} />
                    </li>)}
                </ul>         
            </main>
        </React.Fragment>
    )
}

export default connector(Gallery);
