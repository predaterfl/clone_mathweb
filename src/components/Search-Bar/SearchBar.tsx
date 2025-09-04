import styles from "./styles.module.scss";
function SearchBar() {
    const { searchBar } = styles;
    return (
        <div className={searchBar}>
            <input type='text' placeholder='Tìm kiếm lớp...' />
        </div>
    );
}

export default SearchBar;
