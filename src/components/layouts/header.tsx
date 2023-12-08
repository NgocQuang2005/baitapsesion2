import Navigation from "../Navigation"




export const Header = ()=>{
    return (
        <header className="bg-indigo-500 py-5 text-white">
            <div className="container mx-auto">
                <div className="header_wrapper flex justify-between px-5">
                    <div className="logo">FakeShop</div>
                    <Navigation/>
                    
                </div>
            </div>
        </header>
    )
}
export default Header