import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { YoutubeLesson } from "./components/YoutubeLesson";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        {/* <YoutubeLesson /> */}
      </div>
    </main>
  );
}

export default App;
