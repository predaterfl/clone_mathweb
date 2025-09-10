import ContentItem from "@components/ContentItem/ContenItem";
import styles from "./styles.module.scss";
interface Course {
    id: number;
    subject: string;
    courseName: string;
    programName: string;
    classSize: number;
    startDate: string;
    endDate: string;
    status: string;
}

interface MainContentProps {
    courses: Course[];
}

function MainContent({ courses }: MainContentProps) {
    return (
        <div className={styles.Maincontainer}>
            {courses.map((course) => (
                <ContentItem key={course.id} course={course} />
            ))}
        </div>
    );
}

export default MainContent;
