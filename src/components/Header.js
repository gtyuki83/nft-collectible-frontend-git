import './Header.css';

function Header(props) {
    return (
        <header>
            <h1 className="heading gradient-text">
                <a href="https://testnets.opensea.io/collection/yuki-collectible-jxhvznppsw" target='_blank' rel='noreferrer'>
                    🚀YUKI Squirrels🚀
                </a>
            </h1>
            <div>
                <button className='os-button'>
                    <a href="https://testnets.opensea.io/collection/yuki-collectible-jxhvznppsw" target='_blank' rel='noreferrer'>
                        View Collection on Opensea
                    </a>
                </button>
            </div>
        </header>
    )
}

export default Header;
