import styles from './styles.module.scss';

function ContentItem() {
    const { containerItem, STT, Class, InfoClass, Time, Status } = styles;
    return ( 
        <div className={containerItem}>
            <div className={STT}>1</div>
            <div className={Class}>Math</div>
            <div className={InfoClass}>
                <div>Tên khóa học: <span>OD1</span></div>
                <div>Tên Chương Trình: <span>OD</span></div>
                <div>Sỹ số lớp: <span>3</span></div>
            </div>
            <div className={Time}>
                <div>Ngày bắt đầu: <span>19/03/2025</span></div>
                <div>Ngày kết thúc: <span>12/06/2025</span></div>
            </div>
            <div className={Status}>Đang hoạt động</div>
        </div>
    );
}

export default ContentItem;