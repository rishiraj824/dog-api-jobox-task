
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Search from '../components/search';
import { search } from '../store/actions';
import './index.css';

export const Gallery = (props: GalleryProps) => {
    const { query, images, search } = props;

    return (
        <Search value={query} onChange={(e: Event)=>setQuery(e.target.value)} onKeyPress={(e: Event)=> if(e.key === 'Enter' { search(e.target.value) })} />
        <div className={css.gallery}>
            {images.map((image, i) => <img src={image} key={i} alt={`dog-${i}`}/>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    images: state.gallery.images
})

const mapDispatchToProps = {
    search: (dispatch: Dispatch<Function>) => dispatch(search)
}

interface GalleryProps {
    query: String,
    images: Array<String>,
    search: Function
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)

