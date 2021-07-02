function NavBarIcon({onClick, className}) {
    return (
        <div onClick={onClick} className="Menu-icon-click">
            <div className={className}></div>
        </div>
    )
}

export default NavBarIcon;