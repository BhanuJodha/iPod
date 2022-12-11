import img from "./background.jpg";

const style = {
    display: {
        height: "15em",
        width: "90%",
        margin: ".5em",
        padding: ".5em",
        background: `url(${img}) center center / cover no-repeat `,
        border: "4px solid black"
    },
    list: {
        height: "100%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "flex-start",
        padding: ".5em",
        // overflow: "scroll"
    },
    listItems: {
        width: "100%",
        padding: ".5em",
        textAlign: "left"
    },
    selected: {
        backgroundColor: "lightblue"
    },
    showSelect: {
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: ".5em",
    }
}

const Display = (props) => {
    const { menu } = props;
    return <div style={style.display}>
        {(menu.showMenu && !menu.showSelect &&
            <div style={style.list}>
                <h4 style={style.listItems}>ipod.js</h4>
                {menu.menu.map((item) => {
                    return <span style={menu.selected === item.key ? { ...style.listItems, ...style.selected } : style.listItems} key={item.key}>{item.title}</span>
                })}
            </div>)
            ||
            (menu.showSelect && !menu.showMenu &&
                <h2 style={style.showSelect}>
                    {menu.menu[menu.selected].title}
                </h2>
            )
        }
    </div>
}

export default Display;