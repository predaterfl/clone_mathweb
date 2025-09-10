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
    filter: string;
    SearchTerm: string;
}

function MainContent({ courses, filter, SearchTerm }: MainContentProps) {

    const filteredCourses = courses.filter((c) => {
        const matchFilter = filter === "Tất cả" || c.status === filter;
        const matchSearch = c.subject
            .toLowerCase()
            .includes(SearchTerm.toLowerCase());
        return matchFilter && matchSearch;
    });

    return (
        <div className={styles.Maincontainer}>
            {filteredCourses.map((course) => (
                <ContentItem key={course.id} course={course} />
            ))}
        </div>
    );
}

export default MainContent;
