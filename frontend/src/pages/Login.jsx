import Form from "../components/Form.jsx";

function Login() {
    return <Form route="/api/user/login/"
                 method="login"/>
}

export default Login;