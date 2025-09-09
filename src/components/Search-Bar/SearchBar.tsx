import styles from "./styles.module.scss";
interface SearchBarProps {
    onSearchChange: (value: string) => void;
    SearTerm: string;
}

function SearchBar({onSearchChange, SearTerm}: SearchBarProps) {
    return (
        <div className={styles.searchBar}>
            <input type='text' placeholder='Tìm kiếm lớp...' value={SearTerm} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    );
}

export default SearchBar;
