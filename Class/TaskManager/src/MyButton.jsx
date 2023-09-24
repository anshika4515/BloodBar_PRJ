import "./buttonStyle.css"
function MyButton(props) {
    console.log(props)
    return <button className ={props.class}>{props.title}</button>
}

export default MyButton;