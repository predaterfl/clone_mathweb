import styles from './styles.module.scss';
function HeadingContent() {
    const { headingContent, head1, head2, head3, head4, head5 } = styles;
    return (
            <div className={headingContent}>
                <div className={head1}>STT</div>
                <div className={head2}>Lớp</div>
                <div className={head3}>Thông tin lớp</div>
                <div className={head4}>Thời gian</div>
                <div className={head5}>Trạng thái</div>
            </div>
    );
}

export default HeadingContent;
