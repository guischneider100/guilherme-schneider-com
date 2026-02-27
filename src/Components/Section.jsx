export default function Section({id, title, children}) {
    return (
        <section id={id} className="section">
            <h3>{title}<span className="cursor">_</span></h3>
            {children}
        </section>
    );
}