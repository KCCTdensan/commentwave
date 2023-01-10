import { invoke } from "@tauri-apps/api/tauri"
import { useState } from "react"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  return (
    <div>
      <h1>Welcome to Tauri!</h1>

      <p>Click on the Tauri, Next, and React logos to learn more.</p>

      <div>
        <input
          id="greet-input"
          onChange={e => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="button" onClick={() => greet()}>
          Greet
        </button>
      </div>

      <p>{greetMsg}</p>
    </div>
  )
}

export default App
