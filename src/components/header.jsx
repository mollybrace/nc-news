import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/');
    }

        return (
        <section className="header">
            <h1 onClick={navigateHome}>Northcoders News Desk</h1>
        </section>
    )
}

export default Header;