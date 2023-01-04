import './style.css'
import init, { md5 } from 'wasm-md5'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://rustwasm.github.io/wasm-pack/installer/" target="_blank">
      <img src="/wasm-ferris.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Rust + WebAssembly</h1>
    <div class="card">
      <input type="text" id="input" value="123456"/>
      <button id="cipher" type="button">cipher</button>
    </div>
  </div>
`

init()

document.querySelector<HTMLButtonElement>('#cipher')!.onclick = () => {
  const input = document.querySelector<HTMLInputElement>('#input')!
  
  const result = md5(input.value)
  alert(result)
}
