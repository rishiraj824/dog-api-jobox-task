import { useCallback, useEffect, useRef } from "react";

type InfiniteScrollProps = {
    onBottom: () => Promise<any>;
    loading: boolean;
    containerRef: any
}
export const useInfiniteScroll = ({
    onBottom,
    loading,
    containerRef
}: InfiniteScrollProps) => {
    const ref = useRef<any>();

    useEffect(() => {
        if(containerRef && containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            return () => {
                if(containerRef && containerRef.current) {
                    containerRef.current.removeEventListener('scroll', handleScroll);
                }
            }
        }
    }, [containerRef]);

    const handleScroll = useCallback(async (e:any) => {
        if ((e.target.scrollHeight - e.target.scrollTop ===
            e.target.clientHeight) && !loading) {
                await onBottom();
            }
    }, [ref, containerRef]);

    return ref;
};
