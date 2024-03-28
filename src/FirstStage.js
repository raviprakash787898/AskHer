export default function FirstStage({ parentCallback }) {
    return (
        <>
            <img src="https://media.tenor.com/p_VEcmrBsLMAAAAi/manja.gif" alt="Loading..." />
            <h1>Will you hang out with me for a movie? 😅🤗😊</h1>
            <p>I know a nice place <b>(Elante Mall)</b>, and I think you would like it too. So, let's meet. 
                Let me know whenever you are available in the upcoming days and we can plan accordingly. 🙂</p>
            <div className="btn">
                <a href="javascript:void(0)" onClick={() => parentCallback("5")}>Yes</a>
                <a href="javascript:void(0)"  onClick={() => parentCallback("2")}>No</a>
            </div>
        </>
    );
}