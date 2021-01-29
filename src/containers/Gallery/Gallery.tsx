
import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/search';
import { search, setQuery } from '../../store/actions';
import './index.css';

export const Gallery: React.FC<GalleryProps> = (props) => {
    const { query, images = [], search, setQuery } = props;

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

const mapStateToProps = (state: any) => ({
    images: state.gallery.images,
    query: state.gallery.query
})

const mapDispatchToProps = {
    search: (dispatch: any) => dispatch(search),
    setQuery: (dispatch: any) => dispatch(setQuery)
}

type GalleryProps = {
    query?: string;
    images?: [x: string];
    search: (data: string) => void;
    setQuery: (data: string) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
