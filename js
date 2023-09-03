document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value){
      alert("Prontinho! Você agora vai receber todas as novidades por email!")
  }else{
      alert("Preencha todos os campos do formulário.")
  }
}
