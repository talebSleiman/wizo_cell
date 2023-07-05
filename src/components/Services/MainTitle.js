const MainTitle = (props) => {
    return (
        <div className="main-title my-5 position-relative ms-auto me-auto wow fadeInUp" data-wow-delay="0.3s">
            <h3 className="">{props.name}</h3>
        </div>
    );
}

export default MainTitle;