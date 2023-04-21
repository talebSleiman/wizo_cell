export default function MainTitle(props) {
    return (
        <div className="main-title mt-5 mb-5 position-relative ms-auto me-auto">
            <h3 data-text={props.name}>{props.name}</h3>
        </div>
    );
}