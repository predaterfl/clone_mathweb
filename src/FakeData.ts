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

export const fakeCourses: Course[] = Array.from({ length: 100 }, (_, i) => {
    const statuses = [
        "Chưa bắt đầu",
        "Đang diễn ra",
        "Đã hoàn thành",
        "Đã hủy",
    ];
    const subjects = [
        "Toán",
        "Văn",
        "Anh",
        "Lý",
        "Hóa",
        "Sinh",
        "Tin học",
        "Lịch sử",
        "Địa lý",
    ];
    const programs = ["Chương trình A", "Chương trình B", "Chương trình C"];

    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomProgram = programs[Math.floor(Math.random() * programs.length)];

    // Random ngày trong năm 2025
    const randomDate = () => {
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        return `2025-${String(month).padStart(2, "0")}-${String(day).padStart(
            2,
            "0",
        )}`;
    };

    return {
        id: i + 1,
        subject: randomSubject,
        courseName: `Khóa học số ${i + 1}`,
        programName: randomProgram,
        classSize: Math.floor(Math.random() * 40) + 10, // 10 → 50 học viên
        startDate: randomDate(),
        endDate: randomDate(),
        status: randomStatus,
    };
});
