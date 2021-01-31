import React from 'react';
import { Spinner } from '../../components/spinner';

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
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
        this.props.onScrolled();
      }
    }
 
    render() {
      return <React.Fragment>{this.props.loading ? <Spinner /> : ''}<Component {...this.props} /></React.Fragment>;
    }
  }
  