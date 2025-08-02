function toggleMode() {
    const html = document.documentElement
    // Fazendo o Javascript alterar o toggle mode através da condicional
    // html = documento html; classList = lista de classe do html;
    // constains = verifica se na lista de classe existe a classe 'light'.
    // if(html.classList.contains('light')) {
    //     se existir a classe light ele remove
    //     html.classList.remove('light')
    // } else {  se não existir a classe light ele adiciona
    //     html.classList.add('light')
    // }
    // Javascript possui funcionalidade de toggle 
    // pronto que adiciona e remove automaticamente:
    html.classList.toggle('light')
}
