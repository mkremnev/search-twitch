import Layout from '@/components/Layout';
import Search from '@/components/Search';

export default function Index() {
    return (
        <>
            <Layout>
                <Search />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
