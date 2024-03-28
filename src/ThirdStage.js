export default function ThirdStage({ parentCallback }) {
    return (
        <>
            <img src="https://media.tenor.com/tzvzrz4famQAAAAi/couple-forgive-me.gif" alt="Loading..." />
            <h1>Ek baar or ache se soch lo ma'am! 🙄😣</h1>
            <p>Saachi me nahi chalna... 😏</p>
            <div className="btn">
                <a href="javascript:void(0)" onClick={() => parentCallback("5")}>Yes</a>
                <a href="javascript:void(0)" onClick={() => parentCallback("4")}>No</a>
            </div>
        </>
    );
}