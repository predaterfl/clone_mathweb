import styles from "./styles.module.scss";
function Header() {
    const { container, all, notStarted, inProgress, completed, canceled } = styles;
    return (
        <div className={container}>
            <button className={all}>
                Tất cả<span>7</span>
            </button>
            <button className={notStarted}>
                Chưa bắt đầu<span>1</span>
            </button>
            <button className={inProgress}>
                Đang diễn ra<span>4</span>
            </button>
            <button className={completed}>
                Đã hoàn thành<span>0</span>
            </button>
            <button className={canceled}>
                Đã hủy<span>2</span>
            </button>
        </div>
    );
}

export default Header;
