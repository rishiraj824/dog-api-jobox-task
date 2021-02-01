import { useCallback, useEffect, useRef } from "react";

export const useInfiniteScroll = ({
    onBottom,
    loading
}: {
    onBottom: () => Promise<any>;
    loading: boolean;
}) => {
    const ref = useRef<any>();

    const handleScroll = useCallback(
        async (e: any) => {
            if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && !loading) {
                await onBottom();
            }
        },
        [onBottom, loading]
    );
    useEffect(() => {
        let targetElement: any;
        if (ref && ref.current) {
            targetElement = ref.current;
            ref.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll, ref]);
    return ref;
};
