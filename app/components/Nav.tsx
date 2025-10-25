import styles from "./Nav.module.css"
export default function Nav(){
    return (
        <nav className = "bg-[#adadad] p-2 rounded-2xl m-5">
        Navigation bar:
        <a href="/" className = "bg-linear-to-r from-[#667A56] to-[#0b3754] rounded-4xl pl-3 pr-3 pt-1 pb-1 text-[#ffffff] m-4"> Go to Home page</a>
        <a href="/profile" className="bg-linear-to-r from-[#667A56] to-[#0b3754] rounded-4xl pl-3 pr-3 pt-1 pb-1 text-[#ffffff] m-4">Go to Profile</a>
        </nav>
    );
}