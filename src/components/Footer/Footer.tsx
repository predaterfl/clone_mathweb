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
}
function Footer({ courses }: FooterProps) {
    const TotalClass = courses.length;
    const { container } = styles;
    return (
        <div className={container}>
            <div>
                Tổng số lớp: <span>{TotalClass}</span>
            </div>
        </div>
    );
}

export default Footer;
