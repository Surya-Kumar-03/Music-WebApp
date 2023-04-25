'use client';

import {Provider} from 'react-redux';
import {store} from './store';

export function Providers(props: {children: JSX.Element}) {
	return <Provider store={store}>{props.children}</Provider>;
}
