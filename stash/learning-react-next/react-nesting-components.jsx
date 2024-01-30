const app = document.getElementById("app")

function Header() {
    return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
    return (
        <div>
            <h3>My Home Page</h3>
            <Header />
            <Header />
        </div>
    );
}

ReactDOM.render(<HomePage />, app)