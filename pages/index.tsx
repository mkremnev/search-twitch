import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Search from '@/components/Search';

export default function Index() {
    return (
        <>
            <Layout>
                <Search />
                <Container></Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
