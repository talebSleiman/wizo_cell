import './Up.css';

export default function Up() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scroll = () => {
        this.scrollY >= 500 ? this.classList.add("show") : this.classList.remove("show");
    };

    return (
        <span className="up" onClick={scrollUp} onScroll={scroll}>Up</span>
    );
}