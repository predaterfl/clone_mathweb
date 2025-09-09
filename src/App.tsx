import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SearchBar from "@components/Search-Bar/SearchBar";
import HeadingContent from "@components/HeadingContent/HeadingContent";
import MainContent from "@components/MainContent/MainContent";
import Footer from "@components/Footer/Footer";
import { fakeCourses } from "./FakeData";
import { useState } from "react";

function App() {
    const [SearTerm, setSearTerm] = useState<string>("");
    const [filter, setFilter] = useState<string>("Tất cả");

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
    return (
        <>
            <MainLayout>
                <Header
                    filter={filter}
                    onFilterChange={setFilter}
                    totalCounts={totalCounts}
                />
                <SearchBar SearTerm={SearTerm} onSearchChange={setSearTerm} />
                <HeadingContent />
                <MainContent courses={fakeCourses} filter={filter} SearTerm={SearTerm}/>
                <Footer courses={fakeCourses} filter={filter} />
            </MainLayout>
        </>
    );
}

export default App;
