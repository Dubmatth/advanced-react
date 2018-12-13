import app, { Container } from 'next/app'
import Page from '../components/Page'

class Myapp extends app {
    render (){
        const { Component } = this.props

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }


}

export default Myapp