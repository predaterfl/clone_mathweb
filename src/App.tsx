import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SearchBar from "@components/Search-Bar/SearchBar";
import HeadingContent from "@components/HeadingContent/HeadingContent";
import MainContent from "@components/MainContent/MainContent";
import Footer from "@components/Footer/Footer";
import { fakeCourses } from "./FakeData";
import { useEffect, useMemo, useState } from "react";

function App() {
    const [SearchTerm, setSearTerm] = useState<string>("");
    const [filter, setFilter] = useState<string>("Tất cả");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;

    const totalCounts = {
        all: fakeCourses.length,
        notStarted: fakeCourses.filter((c) => c.status === "Chưa bắt đầu")
            .length,
        inProgress: fakeCourses.filter((c) => c.status === "Đang diễn ra")
            .length,
        completed: fakeCourses.filter((c) => c.status === "Đã hoàn thành")
            .length,
        cancelled: fakeCourses.filter((c) => c.status === "Đã hủy").length,
    };

    const filteredCourses = useMemo(() => {
        return fakeCourses.filter((c) => {
            const matchFilter = filter === "Tất cả" || c.status === filter;
            const matchSearch = c.subject
                .toLowerCase()
                .includes(SearchTerm.toLowerCase());
            return matchFilter && matchSearch;
        });
    }, [filter, SearchTerm]);
    const totalPages = Math.ceil(filteredCourses.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCourses = filteredCourses.slice(
        startIndex,
        startIndex + pageSize,
    );
    useEffect(() => {
        setCurrentPage(1);
    }, [filter, SearchTerm]);

    return (
        <>
            <MainLayout>
                <Header
                    filter={filter}
                    onFilterChange={setFilter}
                    totalCounts={totalCounts}
                />
                <SearchBar
                    SearchTerm={SearchTerm}
                    onSearchChange={setSearTerm}
                />
                <HeadingContent />
                <MainContent courses={paginatedCourses} />
                <Footer
                    courses={fakeCourses}
                    filter={filter}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChangePage={setCurrentPage}
                />
            </MainLayout>
        </>
    );
}

export default App;
