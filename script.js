const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
//buscando a informação do button no html, utlizando o dom
const button = document.querySelector("header button")
//ouvidor adicionar a ação click e a função.
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Dia adicionado com sucesso ✌️")
  nlwSetup.addDay(today)
}
function save() {
  //localstorage é um objeto que guarda na memoria do browser as informações.
  localStorage.setItem("chaveGuardaDados", JSON.stringify(nlwSetup.data))
}

 // pega as informações do local storage que está em texto e transforma em objeto.
const data = JSON.parse(localStorage.getItem("chaveGuardaDados")) || {}
nlwSetup.setData(data)
nlwSetup.load()
