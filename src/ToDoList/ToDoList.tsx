import { ChangeEvent, useState } from "react"

const ToDoList = () => {

  interface IChore {
    task: string
  }

  const [chore, setChore] = useState('')
  const [list, setList] = useState<IChore[]>([])

  const addChore = (event: MouseEvent): void => {
    event.preventDefault()
    const newTask = {task:chore}
    setList([...list, newTask])
    setChore('')
  }

  const dunChore = (removeChore : string): void => {
    setList(list.filter((chore) => {
      return chore.task !== removeChore
    }))
  }

  return (
    <>
      
      <h1 className="text-center">Git'R'Dun!</h1>
      <div className="App">
        <div className="top">
          <div className="input text-center">
            <input 
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setChore(event.target.value)}}
            placeholder="What needs to git dun?"
            className="input" 
            type="text"
            value={chore}
            />
          </div>
            <button className="btn btn-danger" onClick={addChore}>ADD</button>
        </div>
        
        <div className="bottom">
          <div className="chores">
            {list.map((chore, idx) => {
              return <span
              className="todo" 
              key={idx}
              >
              <p>{chore.task}</p>
            <button 
              className="dun_btn" 
              onClick={() => {dunChore(chore.task)}}
            >
                DUN!
            </button>
              </span>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default ToDoList