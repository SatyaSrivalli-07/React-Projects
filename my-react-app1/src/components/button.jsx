function Button({text,className,onclick}){
    return(
        <button className={className}
        onclick={onclick}>
            {text}
        </button>
    );
}
export default Button;