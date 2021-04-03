import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Search from '@/components/Search';

export default function Index() {
    return (
        <>
            <Layout>
                <Header>
                    <Search />
                </Header>
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
