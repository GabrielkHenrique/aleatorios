function change(){
    var texto = document.querySelector(".res");
    var botao = document.querySelector(".botao")
    var mintxt = document.querySelector(".min-txt") 
    var aleatorio = (num) => Math.floor(Math.random() * num)
    
    if (aleatorio(11) == 1){
        texto.innerHTML = "你好"
        mintxt.innerHTML = "chines"
    } 
    if (aleatorio(11) == 2){
        texto.innerHTML = "Hi"
        mintxt.innerHTML = "africânes"
    } 
    if (aleatorio(11) == 3){
        texto.innerHTML = "Hola"
        mintxt.innerHTML = "Espanhol"
    } 
    if (aleatorio(11) == 4){
        texto.innerHTML = "היי"
        mintxt.innerHTML = "Hebraico"
    } 
    if (aleatorio(11) == 5){
        texto.innerHTML = "Hello"
        mintxt.innerHTML = "Inglês"
    } 
    if (aleatorio(11) == 6){
        texto.innerHTML = "こんにちは"
        mintxt.innerHTML = "Japonês"
    } 
    if (aleatorio(11) == 7){
        texto.innerHTML = "Привет"
        mintxt.innerHTML = "Russo"
    } 
    if (aleatorio(11) == 8){
        texto.innerHTML = "Hæ"
        mintxt.innerHTML = "islandês"
    } 
    if (aleatorio(11) == 9){
        texto.innerHTML = "Здраво"
        mintxt.innerHTML = "Bulgaro"
    } 
    if (aleatorio(11) == 10){
        texto.innerHTML = "Moi"
        mintxt.innerHTML = "Finlandes"
    } 
    
}
