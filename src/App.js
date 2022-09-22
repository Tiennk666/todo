import "./App.css";
import React, { useState } from "react";

function App() {
  const [add_task, set_task] = useState("");
  const [leght, set_leght] = useState(2);
  const [edit, set_edit] = useState(false);
  const [task_edit, set_task_edit] = useState("");
  const [val_index, set_val_index] = useState(0);
   const [list_task, set_list_task] = useState([
    { id: 1, name: "katana", complete: false },
    { id: 2, name: "shurieken", complete: false },
  ]);

  const  changeTask= (e) => {
    set_task(e.target.value);
  };

  const addList = (e) => {
    e.preventDefault();
    if (add_task !== "") {
      set_leght(leght + 1);
      const new_task = {};
      new_task.id = leght + 1;
      new_task.name = add_task;
      new_task.complete = false;
      set_list_task([...list_task, new_task]);
      set_task("");
    }
  };

  const isComplete = (id) => {
    const task_complete = list_task.findIndex((task) => task.id === id);
    const new_list = [...list_task];
    if (list_task[task_complete].complete === false) {
      new_list[task_complete] = {
        ...new_list[task_complete],
        complete: true,
      };
      set_list_task(new_list);
    } else {
      new_list[task_complete] = {
        ...new_list[task_complete],
        complete: false,
      };
      set_list_task(new_list);
    }
  };

  const Edit = (id) => {
    const item_edit = list_task.findIndex((task) => task.id === id);
    set_task_edit(list_task[item_edit].name);
    set_edit(true);
    set_val_index(item_edit);
    
  };

  const completeEdit = () => {
    console.log('a')
    const new_list = [...list_task];
    new_list[val_index] = {
      ...new_list[val_index],
      name: task_edit,
    };
    set_list_task(new_list);
    set_val_index(0);
    set_edit(false);
  };

  const changeData = (e) => {
    set_task_edit(e.target.value);
     
  };

  const Delete = (id) => {
    set_list_task(list_task.filter((t) => t.id !== id));
  };
  const deleteAll = () => {
    set_list_task([]);
  }
  return (
    <div className="App-header">
      <div>
        <div className="form_add">
          <form onSubmit={(e) => addList(e)}>
            <input value={add_task} onChange={(e) => changeTask(e)} />
            <button>Add</button>
          </form>
        </div>
        <div className="list_item">
          {list_task !== [] ? (
            <div>
              {edit === false ? (
                <div>
                  {list_task.map((task) => (
                    <div
                      key={task.id}
                      id="item"
                      className={task.complete === false ? "" : "complete"}
                    >
                      <div>
                        <input
                          type="checkbox"
                          onClick={() => isComplete(task.id)}
                        />
                        {task.name}
                      </div>
                      <div>
                        <button onClick={() => Delete(task.id)}>Delete</button>
                        <button onClick={() => Edit(task.id)}>Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <input
                    value={task_edit}
                    onChange={(e) => changeData(e)}
                  ></input>
                  <button onClick={()=>completeEdit()}>Ok</button>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div ><button onClick={()=>deleteAll()}>Delete All</button></div>
      </div>
    </div>
  );
}
export default App;
