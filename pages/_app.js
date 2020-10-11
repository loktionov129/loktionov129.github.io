import { wrapper } from '../src/store';
import '../src/globals.css';

const WrappedApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(WrappedApp);
