import {App} from '../src/components/App';
import {wrapper} from '../src/store';
import {PAGE_LOADED_SUCCESS} from '../src/store/Page/actionTypes';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Aleksandr Loktionov's CV (Full Stack .NET Developer)</title>
            </Head>
            <App />
        </>
    );
}

async function loadLocale(lang) {
    const file = await require('fs').promises.readFile(`./public/assets/locales/${lang}.json`);

    return JSON.parse(file);
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    const ru = await loadLocale('ru');
    const en = await loadLocale('en');

    store.dispatch({type: PAGE_LOADED_SUCCESS, data: {ru, en}});

    return {
        props: null
    }
});