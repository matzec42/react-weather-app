import Place from './Place';
import Search from './Search';
import Settings from './Settings'
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <Place />
            <Search />
            <Settings />
        </div>
    )
}

export default Header