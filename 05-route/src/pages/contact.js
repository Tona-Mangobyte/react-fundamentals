import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <>
            <h3>Hello Contact</h3>
            <button onClick={() => navigate('/')}>Home</button>
        </>
    );
};

export default Contact;