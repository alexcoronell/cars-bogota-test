interface BrandPagesContentProps {
    title: string;
    content: string;
}

import styles from "@/css/brandPagesContent.module.css"

export default function BrandPagesContent({title, content}: BrandPagesContentProps) {
    return (
        <main className={styles.BrandPagesContent}>
            <div className={styles.BrandPagesContent__container}>
            <h3>{title}</h3>
            <hr />
            <p>{content}</p>
            <hr />
            </div>
        </main>
    )
};
