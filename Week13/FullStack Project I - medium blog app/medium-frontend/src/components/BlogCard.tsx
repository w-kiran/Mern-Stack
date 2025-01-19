import { Link } from "react-router-dom";

interface BlogCardprops{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:number;
}
export const BlogCard =({
    authorName,
    title,
    content,
    publishedDate,
    id,
}: BlogCardprops) => {
    return <Link to={`/blog/${id}`}> 
    <div className="p-4 border border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <Avatar1 name={authorName}/>
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                {authorName}  
            </div>
            <div className="flex justify-center flex-col pl-2 ">
                <Circle/>
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                {publishedDate}
            </div>
        </div>
            
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-2">
                {`${Math.ceil(content.length/100)}minute(s) read`}
            </div>
    </div>
    </Link>
}

export function Avatar1({name}:{name: string}){
    return <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}
export function Avatar2({name}:{name: string}){
    return <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}