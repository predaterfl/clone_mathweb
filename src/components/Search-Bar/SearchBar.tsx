import styles from "./styles.module.scss";
interface SearchBarProps {
    onSearchChange: (value: string) => void;
    SearchTerm: string;
}

function SearchBar({ onSearchChange, SearchTerm }: SearchBarProps) {
    return (
        <div className={styles.searchBar}>
            <input
                type='text'
                placeholder='Tìm kiếm lớp...'
                value={SearchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={styles.searchInput}
            />
        </div>
    );
}

export default SearchBar;
