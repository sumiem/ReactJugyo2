import React, {useState} from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Input, Button, InputGroupAddon } from "reactstrap";


export default function App() {
  const [value, setValue] = useState("やるぞー");
  const [todos, setTodo] = useState("");
  const addTodo = (text) => {
    const newTodo = [...todos, text];
// 前のやつがtodoの歴代、
    setTodo(newTodo);
    console.log(newTodo,"配列の中身");
  };
// NewTodoという配列の中に、もともとのデータをコピーして（スプレっど演算子）実行したときのデータが上書きされていく
// 状態を保存して、更新するためのsetTodoの中に新しく状態を入れる

  // velue初期値 reactは色んな所に書きたくない、useStateを使っていこう。Inputtypeを使いなさいよーということ
  // setValue更新するための変数valueを変更するにはSetValueにいれるしかない
  // useStateは必ず２つがセット（関数。変更するための関数） test,setTest
    // Formに、、送信するための関数であるhandleSubmitをやる
    // 画面が遷移しないようにpreventDefault, 送信状態を見るようにconsolelog
     const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value);
    console.log(value, "Value変更");
  };

  // addTOdoは更新、handleSubmitは収納
  // 
  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <Container className="Container">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={value} onChange={e => setValue(e.target.value)}
              />
          {/* input valueはHTML {Value}はuseStateの変数名つまり、上記の変数に入れたものをあてはめている（初期値）　｛value｝は初期設定値　 */}
          <InputGroupAddon addonType="append"></InputGroupAddon>
          {/* primaryでおすすめのカラーなどになる（優先） */}
          <Button type="submit" className="button" color="primary">追加する</Button>
        </InputGroup>
      </Form>
      </Container>

      {/* リスト表示ロジック */}
      <Container>
        <table>
          <tbody>
            {/* <tr> */}
              {/* <th>リスト表示</th> */}
              {/* ここでmapをつかう */}
            {/* </tr> */}
        {todos &&
            todos.map((todo, index) => (
              <tr>
                <th key={index}>{todo}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>


    </div>
  );
}