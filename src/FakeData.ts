export interface Course {
    id: number;
    subject: string;
    courseName: string;
    programName: string;
    classSize: number;
    startDate: string;
    endDate: string;
    status: string;
}

export const fakeCourses: Course[] = [
    {
        id: 1,
        subject: "CLS148",
        courseName: "Oxford Discover_OD1",
        programName: "Oxford Discover",
        classSize: 1,
        startDate: "19/03/2025",
        endDate: "12/06/2025",
        status: "Đang hoạt động",
    },
    {
        id: 2,
        subject: "CLS244",
        courseName: "Oxford Discover_OD1",
        programName: "Oxford Discover",
        classSize: 3,
        startDate: "04/04/2025",
        endDate: "28/07/2025",
        status: "Đang hoạt động",
    },
    {
        id: 3,
        subject: "CLS345",
        courseName: "Oxford Discover_OD1",
        programName: "Oxford Discover",
        classSize: 2,
        startDate: "01/03/2025",
        endDate: "18/08/2025",
        status: "Đang hoạt động",
    },
    {
        id: 4,
        subject: "CLS910",
        courseName: "HQ Maths",
        programName: "Chuẩn cấu trúc BGD",
        classSize: 4,
        startDate: "12/06/2025",
        endDate: "27/07/2025",
        status: "Đang hoạt động",
    },
    {
        id: 5,
        subject: "CLS511",
        courseName: "English Starter",
        programName: "Cambridge English",
        classSize: 5,
        startDate: "15/01/2025",
        endDate: "15/05/2025",
        status: "Đang hoạt động",
    },
    {
        id: 6,
        subject: "CLS612",
        courseName: "TOEFL Primary",
        programName: "ETS ProgramName",
        classSize: 8,
        startDate: "20/02/2025",
        endDate: "20/06/2025",
        status: "Đã kết thúc",
    },
    {
        id: 7,
        subject: "CLS713",
        courseName: "IELTS Foundation",
        programName: "British Council",
        classSize: 12,
        startDate: "10/03/2025",
        endDate: "10/07/2025",
        status: "Đang hoạt động",
    },
    {
        id: 8,
        subject: "CLS814",
        courseName: "Phonics A-Z",
        programName: "Phonics Mastery",
        classSize: 6,
        startDate: "01/04/2025",
        endDate: "01/08/2025",
        status: "Đang hoạt động",
    },
    {
        id: 9,
        subject: "CLS915",
        courseName: "SAT Prep",
        programName: "College Board",
        classSize: 9,
        startDate: "05/05/2025",
        endDate: "05/09/2025",
        status: "Đang hoạt động",
    },
    {
        id: 10,
        subject: "CLS1016",
        courseName: "Business English",
        programName: "Oxford Business",
        classSize: 7,
        startDate: "15/06/2025",
        endDate: "15/10/2025",
        status: "Đang hoạt động",
    },
];
