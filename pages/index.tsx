import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

export default function Index() {
    return (
        <>
            <Layout>
                <Header></Header>
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
