import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SearchBar from "@components/Search-Bar/SearchBar";
import HeadingContent from "@components/HeadingContent/HeadingContent";
import MainContent from "@components/MainContent/MainContent";
import Footer from "@components/Footer/Footer";
import { fakeCourses } from "./FakeData";

function App() {
    return (
        <>
            <MainLayout>
                <Header />
                <SearchBar />
                <HeadingContent />
                <MainContent courses={fakeCourses}/>
                <Footer courses={fakeCourses} />
            </MainLayout>
        </>
    );
}

export default App;
