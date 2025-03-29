import Input from "../components/core/Input";

const login = ()=>{ 
    return(
        <section className="mx-auto max-w-[1440px]">
        <div className="">
            <div className="mx-auto my-auto border rounded-4xl w-xl p-7">
            <form action="">
                <h1 className="text-4xl my-4 text-center">log In</h1>
                <div className="w-full mx-auto my-2.5">
                    <Input label="username" type="text" />
                </div>
                <div className="w-full mx-auto my-2.5">
                    <Input label="password" type="password" />
                </div>
                
            </form>
            </div>
        </div>
            </section>
    )
}
export default login;