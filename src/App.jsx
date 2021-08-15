import "./styles.css";

const App = () => {
  return (
    <>
      <div className="top-wrapper">
        <p>本日のTODO</p>
        <button>+</button>
        <input  placeholder="TODOを入力"/>
      </div>

      <div className="main-wrapper">
        <section className="incomplete-area">
          <p className="title">本日の未完了タスク</p>
          <div >
            <ul　className="list-row">
              <li>ああああ</li>
              <button>完了</button>
              <button>削除</button>
            </ul>
          </div>
        </section>

        <section className="complete-area">
          <p className="title">本日の完了タスク</p>
          <div >
            <ul　className="list-row">
              <li>ああああ</li>
              <button>戻す</button>
            </ul>
          </div>
        </section>

        <section className="habit-area">
          <p className="title">習慣リスト</p>
          <div>
            <button>+</button>
            <input/>
            <ul　className="list-row">
              <li>歯を磨く</li>

              <p>0</p>
              <button>カウント</button>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
