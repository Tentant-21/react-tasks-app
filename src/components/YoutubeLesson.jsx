import { MdCelebration } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export function YoutubeLesson() {
  return (
    <div>
      <h1>
        Welcome to your React App <MdCelebration style={{color:"darkorange"}}/>
      </h1>
      <h3>The last time you was on the "Separando Componentes"</h3>
      <p style={{ color: "darkblue", fontSize:"26px", fontWeight:"bolder" }}>
        Time: 03:43:00
        <br />
        <a href="https://www.youtube.com/watch?v=rLoWMU4L_qE&list=WL&index=9&t=1298s&ab_channel=Fazt">
          <button className="btn_yt" style={{fontSize:"16px", fontWeight:"normal"}}>
            Go to <b>YouTube</b> Lesson <FaYoutube style={{color:"red", fontSize:"26px", fontWeight:"bolder", marginBottom:"-8px"}}/>
          </button>
        </a>
      </p>
    </div>
  );
}
