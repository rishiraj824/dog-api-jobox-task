import React from 'react';

type WithInfiniteScrollProps = {
  onScrolled: () => void;
  loading: boolean;
}
export const withInfiniteScroll = <P extends object>(Component: React.ComponentType<P>) =>
  class WithInfiniteScroll extends React.Component<P & WithInfiniteScrollProps> {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }
 
    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
 
    onScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
        this.props.onScrolled();
      }
    }
 
    render() {
      return <Component {...this.props} />;
    }
  }
  