
export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "auto",
        bottom: "0%",
        width: "100%",
        margin: "20px 0px 0px 0px"
    };
   
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <div className="text-center p-3 bg-dark" >
                    © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        </footer>
    )
}