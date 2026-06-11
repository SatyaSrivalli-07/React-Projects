import Button from "./Button";
import List from "./List";
function Header(){
    const navItems=[
        "Home",
        "Menu",
        "Offers",
        "Contact"
    ];
    return(
        <header className="header">
            <h1>Foodie</h1>
            <List
            items={navItems}
            className="nav-list"
            />
            <Button text="Login"/>
        </header>

    );
}
export default Header;