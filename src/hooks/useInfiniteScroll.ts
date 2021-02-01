import { useEffect, useRef } from "react";

type InfiniteScrollProps = {
    onBottom: () => Promise<any>;
    loading: boolean;
}
export const useInfiniteScroll = ({
    onBottom,
    loading
}: InfiniteScrollProps) => {
    const ref = useRef<any>();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);

    const handleScroll = () => {
        if (ref && ref.current) {
            if ((window.scrollY + window.innerHeight >= ref.current.clientHeight + ref.current.offsetTop) && !loading) {
                onBottom();
            }
        }
    };

    return ref;
};
