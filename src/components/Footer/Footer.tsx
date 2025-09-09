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
}
const Footer: React.FC<FooterProps> = ({ courses, filter }) => {
    const filteredCourses =
        filter === "Tất cả"
            ? courses
            : courses.filter((c) => c.status === filter);

    return (
        <div className={styles.container}>
            Tổng số lớp: <span>{filteredCourses.length}</span>
        </div>
    );
};

export default Footer;
