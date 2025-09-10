import styles from "./styles.module.scss";
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
}
function Footer({ courses, filter }: FooterProps) {
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
                <button>1</button>
            </div>
        </div>
    );
}

export default Footer;
