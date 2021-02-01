import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBreeds } from "../store/reducers/breeds/actions";
import { searchAction } from "../store/reducers/gallery/actions";

export const loadGalleryData = (query: string) => {
    const  dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBreeds());
        const search = searchAction(dispatch);
        search(query);
    });
}