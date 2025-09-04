import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SearchBar from "@components/Search-Bar/SearchBar";
import HeadingContent from "@components/HeadingContent/HeadingContent";
import MainContent from "@components/MainContent/MainContent";

function App() {
    return (
        <>
            <MainLayout>
                <Header />
                <SearchBar />
                <HeadingContent />
                <MainContent />
            </MainLayout>
        </>
    );
}

export default App;
