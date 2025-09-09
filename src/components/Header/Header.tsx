import styles from "./styles.module.scss";

interface HeaderProps {
    filter: string;
    onFilterChange: (value: string) => void;
    totalCounts: {
        all: number;
        notStarted: number;
        inProgress: number;
        completed: number;
        cancelled: number;
    };
}

function Header({ filter, onFilterChange, totalCounts }: HeaderProps) {
    return (
        <div className={styles.container}>
            <button
                className={`${styles.all} ${
                    filter === "Tất cả" ? styles.activeAll : ""
                }`}
                onClick={() => onFilterChange("Tất cả")}
            >
                Tất cả <span>{totalCounts.all}</span>
            </button>

            <button
                className={`${styles.notStarted} ${
                    filter === "Chưa bắt đầu" ? styles.activeNotStarted : ""
                }`}
                onClick={() => onFilterChange("Chưa bắt đầu")}
            >
                Chưa bắt đầu <span>{totalCounts.notStarted}</span>
            </button>

            <button
                className={`${styles.inProgress} ${
                    filter === "Đang diễn ra" ? styles.activeInProgress : ""
                }`}
                onClick={() => onFilterChange("Đang diễn ra")}
            >
                Đang diễn ra <span>{totalCounts.inProgress}</span>
            </button>

            <button
                className={`${styles.completed} ${
                    filter === "Đã hoàn thành" ? styles.activeCompleted : ""
                }`}
                onClick={() => onFilterChange("Đã hoàn thành")}
            >
                Đã hoàn thành <span>{totalCounts.completed}</span>
            </button>

            <button
                className={`${styles.cancelled} ${
                    filter === "Đã hủy" ? styles.activeCancelled : ""
                }`}
                onClick={() => onFilterChange("Đã hủy")}
            >
                Đã hủy <span>{totalCounts.cancelled}</span>
            </button>
        </div>
    );
}

export default Header;
