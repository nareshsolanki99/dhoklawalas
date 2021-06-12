import "../../styles/main.scss"

const FeatureCard = (props) => {
    return <div className="feature-card">
        <div className="icon-div">{props.icon && <i className={props.icon}></i>}</div>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
    </div>
}

export default FeatureCard