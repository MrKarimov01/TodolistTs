import styles from "./../home.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Todo List</h1>
            <button className={styles.addBtn}>
                <div className={styles.btn_icon}>
                <svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><path d="M256,512C114.625,512,0,397.391,0,256C0,114.609,114.625,0,256,0c141.391,0,256,114.609,256,256  C512,397.391,397.391,512,256,512z M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.047,0,192-85.969,192-192  S362.047,64,256,64z M288,384h-64v-96h-96v-64h96v-96h64v96h96v64h-96V384z"/></svg>
                </div>
                <div className={styles.btnText}>add</div>
            </button>
        </div>
    );
};

export default Header;