import styles from "./styles.module.scss";
import LeftArrow from "@icons/l.svg";
import RightArrow from "@icons/r.svg";

interface course {
    id: number;
    subject: string;
    courseName: string;
    programName: string;
    classSize: number;
    startDate: string;
    endDate: string;
    status: string;
}

interface FooterProps {
    courses: course[];
    filter: string;
    onChangePage: (page: number) => void;
    currentPage: number;
    totalPages: number;
}
function Footer({
    courses,
    filter,
    onChangePage,
    currentPage,
    totalPages,
}: FooterProps) {
    const filteredCourses =
        filter === "Tất cả"
            ? courses
            : courses.filter((c) => c.status === filter);
    return (
        <div className={styles.container}>
            <div>
                Tổng số lớp: <span>{filteredCourses.length}</span>
            </div>
            <div className={styles.pagination}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => onChangePage(currentPage - 1)}
                >
                    <img src={LeftArrow} alt='left arrows' />
                </button>
                <span>
                    {currentPage}/{totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onChangePage(currentPage + 1)}
                >
                    <img src={RightArrow} alt='right arrows' />
                </button>
            </div>
        </div>
    );
}

export default Footer;
