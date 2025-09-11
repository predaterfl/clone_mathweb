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
interface ContentItemProps {
    course: Course;
}
function ContentItem({ course }: ContentItemProps) {
    const StatusColor = (status: string) => {
        switch (status) {
            case "Chưa bắt đầu":
                return styles.StatusNotstart;
            case "Đang diễn ra":
                return styles.StatusInprogress;
            case "Đã hoàn thành":
                return styles.StatusComplete;
            case "Đã hủy":
                return styles.StatusCancel;
            default:
                return "";
        }
    };
    const { containerItem, STT, Class, InfoClass, Time, Status, number } =
        styles;
    return (
        <div className={containerItem}>
            <div className={STT}>{course.id}</div>
            <div className={Class}>{course.subject}</div>
            <div className={InfoClass}>
                <div>
                    Tên khóa học: <span>{course.courseName}</span>
                </div>
                <div>
                    Tên Chương Trình: <span>{course.programName}</span>
                </div>
                <div>
                    Sỹ số lớp:{" "}
                    <span className={number}>{course.classSize}</span>
                </div>
            </div>
            <div className={Time}>
                <div>
                    Ngày bắt đầu: <span>{course.startDate}</span>
                </div>
                <div>
                    Ngày kết thúc: <span>{course.endDate}</span>
                </div>
            </div>
            <div className={`${Status} ${StatusColor(course.status)}`}>
                {course.status}
            </div>
        </div>
    );
}

export default ContentItem;
