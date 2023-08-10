
export default function Navbar({params}:{params:string}) {
    const menus = [{'title':'Home','slug':'/'},{'title':'Article','slug':'/article'},{'title':'Skills','slug':'/skills'},{'title':'Project','slug':'/project'},{'title':'Education','slug':'/education'},{'title':'Working Experience','slug':'/working-experience'},{'title':'Contact','slug':'/contact'}];
    const filteredMenus = menus.filter(menu => {
        return menu.slug !== params
      })
    return (
        <div className="navbar h-4">
            <div className="navbar-start w-1/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-neutral-700 font-semibold">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/article' className='text-neutral-700 font-bold font-sans'>Article</a></li>
                        <li><a href='/skills' className='text-neutral-700 font-bold font-sans'>Skills</a></li>
                        <li><a href='/project' className='text-neutral-700 font-bold font-sans'>Project</a></li>
                        <li><a href='/education' className='text-neutral-700 font-bold font-sans'>Education</a></li>
                        <li><a href='/working-experience' className='text-neutral-700 font-bold font-sans'>Working Experience</a></li>
                        <li><a href='/contact' className='text-neutral-700 font-bold font-sans'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-16 text-neutral-700 font-bold font-sans">
                    {
                        filteredMenus.map(menu=>( 
                            <li key={menu.slug}><a href={menu.slug}>{menu.title}</a></li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}
