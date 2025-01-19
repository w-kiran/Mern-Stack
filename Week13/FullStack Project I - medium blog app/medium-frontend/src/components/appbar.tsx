import { Link } from "react-router-dom"
import { Avatar2 } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer">
            <div>
                Medium
            </div>
        </Link>
        <div>
            <Link to={"/publish"}>
                <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">New</button>
            </Link>

            <Avatar2 name="Kiran" />
        </div>
    </div>
}