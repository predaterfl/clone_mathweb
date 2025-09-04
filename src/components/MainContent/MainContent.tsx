import ContentItem from "@components/ContentItem/ContenItem";
import styles from './styles.module.scss';

function MainContent() {
    const { Maincontainer } = styles;
    return ( 
        <div className={Maincontainer}>
            <ContentItem />
        </div>
    );
}

export default MainContent;