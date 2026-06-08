import { useContext } from "react";
import { useLanguage } from "./LanguageContext";

export default function Section({id, children}) {

    const {text} = useLanguage()

    return (
        <section id={id} className="section">
            <h3>{text[id]["title"]}<span className="cursor">_</span></h3>
            {children}
        </section>
    );
}