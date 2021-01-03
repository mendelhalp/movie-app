const { Jumbotron, Container } = require("react-bootstrap")

const HomePage = () => {


    return (
        <Container>
            <Jumbotron>
                <h1>Movie App</h1>
                <p>Here you can browse your favorite movies and actors</p>
            </Jumbotron>
        </Container>
    )
}

export default HomePage;