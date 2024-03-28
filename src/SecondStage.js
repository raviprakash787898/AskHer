export default function SecondStage({ parentCallback }) {
    return (
        <>
            <img src="https://media.tenor.com/dltr8Wx24g8AAAAi/mochi.gif" alt="Loading..." />
            <h1>Soch lo ache se ma'am! 🙄😏</h1>
            <p>I know you also wanna hang out... 😊</p>
            <div className="btn">
                <a href="javascript:void(0)"  onClick={() => parentCallback("5")}>Yes</a>
                <a href="javascript:void(0)"  onClick={() => parentCallback("3")}>No</a>
            </div>
        </>
    );
}