import { useSelector } from 'react-redux';

export { Home };

function Home() {
    const auth = useSelector(x => x.auth.value);
    return (
        <div>
            <h1>Hi {auth?.firstName}!</h1>
            <p>you are logging in the Acm-Task</p>
            <div>
            <h1>Welcome to Our Website</h1>
            <p>This is the home page of our website. Feel free to explore!</p>
        </div>
        </div>
    );
}