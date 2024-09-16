export default function Footer() {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <footer className="py-3 text-center border-t border-orange-500">
            {year} - Desarrollado por Alexander Coronell
        </footer>
    )
}