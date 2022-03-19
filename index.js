import React from "react";
import {render} from "react-dom";
import Link from "./Link.js"
import Button from "./Button.js"
import Container from "./Container.js"
import Input from "./Input.js"

function App() {
    return (<>
        <Link href="https://amazon.ca">Shop Online</Link>
        <Button>Click me</Button>
    <Container></Container>
        <Input placeholder ="Full Name" name="full-name" />

    </>);

}

render(<App />, document.querySelector("#react-root"));
