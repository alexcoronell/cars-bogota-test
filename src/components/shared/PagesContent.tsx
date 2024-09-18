interface PagesContentProps {
    title: string;
    content: string;
}

import styles from "@/css/pagesContent.module.css"

export default function PagesContent({title, content}: PagesContentProps) {
    return (
        <main className={styles.BrandPagesContent}>
            <div className={styles.BrandPagesContent__container}>
            <h1>{title}</h1>
            <hr />
            <p>{content}</p>
            <hr />
            </div>
        </main>
    )
};
