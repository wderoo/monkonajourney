export default function Navbar() {
    return (
        <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
            <div className="flex-none w-56 flex flex-row items-center">
                <img src="img/logo.png" className="w-10 flex-none" alt="logo" />
                <strong className="capitalize ml-1 flex-1">cleopatra</strong>

                <button
                    id="sliderBtn"
                    className="flex-none text-right text-gray-900 hidden md:block"
                >
                    <i className="fad fa-list-ul"></i>
                </button>
            </div>
            <button
                id="navbarToggle"
                className="hidden md:block md:fixed right-0 mr-6"
            >
                <i className="fad fa-chevron-double-down"></i>
            </button>
            <div
                id="navbar"
                className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center"
            >
                {' '}
                <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
                    <a
                        className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
                        href="#"
                        title="email"
                    >
                        <i className="fad fa-envelope-open-text"></i>
                    </a>
                    <a
                        className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
                        href="#"
                        title="email"
                    >
                        <i className="fad fa-comments-alt"></i>
                    </a>
                    <a
                        className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
                        href="#"
                        title="email"
                    >
                        <i className="fad fa-check-circle"></i>
                    </a>
                    <a
                        className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
                        href="#"
                        title="email"
                    >
                        <i className="fad fa-calendar-exclamation"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
