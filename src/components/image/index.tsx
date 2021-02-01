import React from 'react';

type ImageProps = {
    src: string,
    alt: string,
    className: string
}
const areEqual = (prevProps: ImageProps, nextProps: ImageProps) => {
    return prevProps.src === nextProps.src
}

const Image = (props: ImageProps) => <img className={props.className} loading="lazy" src={props.src} alt={props.alt}/>

export default React.memo(Image, areEqual);
