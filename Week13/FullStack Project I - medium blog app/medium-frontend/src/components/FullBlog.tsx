import { Blog } from "../hooks"
import { Appbar } from "./appbar"
import { Avatar2 } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-40 w-full pt-12 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 4th Oct 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-2 flex flex-col justify-center">
                            <Avatar2 name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrse abour the author's ability to grab the users attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
