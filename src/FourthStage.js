import { useState } from "react";

export default function FourthStage({ parentCallback }) {
    const [{ positionTemp, topTemp, leftTemp }, setStyleElem] = useState({});

    function changePosition() {
        setStyleElem({
            positionTemp: "absolute",
            topTemp: Math.floor(Math.random() * 90 + 5) + "%",
            leftTemp: Math.floor(Math.random() * 90 + 5) + "%"
        });
    }

    return (
        <>
            <img src="https://media.tenor.com/3bDvSVpiwjoAAAAi/peach-goma-phone.gif" alt="Loading..." />
            <h1>Manjo na ma'am!!! Kitna bhav khaoge 😭😒</h1>
            <p>Dekh loo mai kidnap kar ke lejaunga ghar se..,😜😝 So sooch loo aache se... 😏😞</p>
            <div className="btn">
                <a className="pr-2" href="javascript:void(0)" onClick={() => parentCallback("5")} >Yes</a>
                <a href="javascript:void(0)" id="doNotAllowClick" onMouseOver={changePosition}
                    style={{ position: positionTemp, top: topTemp, left: leftTemp }}>
                    No
                </a>
            </div>
        </>
    );
}