# centralizar div

- Aplicar esses atributor no body, centraliza a div filha do body
- Todas as divs dentro do body ficam alinhadas

```css
body {
    margin: 0;               
    min-height: 100vh;     
    display: flex;
    justify-content: center;
    align-items: center;

/*  min-height: 100vh garante que o body ocupe a altura total da janela sem mexer na largura.
    margin: 0 remove a margem padrão que desloca o conteúdo.
    display:flex + justify-content/align-items: center centralizam horizontal e verticalmente o .UserForm-container. */
}
```

# Mover elementos (transform, margin)

transform: translate() é uma ótima opção — e, na maioria dos casos, é a forma mais recomendada de mover elementos visualmente.

- Não afeta o fluxo do layout (ou seja, os outros elementos não “se movem” junto).
- É suavizável com animação (transition, keyframes etc.).
- É muito performático, pois o navegador usa aceleração via GPU.

⚠️ Atenção: o elemento ainda ocupa o espaço original — ele só é movido “visualmente”

## translateX()

Move na horizontal
    - valor positivo → direita
    - valor negativo → esquerda

```css
h1 {
  transform: translateX(50px); /* move 50px para a direita */
}

h1:hover {
  transform: translateX(-30px); /* move 30px para a esquerda */
}
```

## translateY()

Move na vertical
    - valor negativo → para cima
    - valor positivo → para baixo

```css
h1 {
  transform: translateY(-20px); /* sobe 20px */
}

p {
  transform: translateY(15px); /* desce 15px */
}
```

## translate(x, y) (os dois eixos juntos)

Permite mover horizontal e vertical ao mesmo tempo.

```css
h1 {
  transform: translate(30px, -10px); 
  /* 30px pra direita, 10px pra cima */
}
```

## margem 

Simples e intuitivo.
⚠️ Mas: afeta o fluxo do layout — empurra (ou puxa) os outros elementos ao redor.
Isso pode bagunçar o espaçamento se não for usado com cuidado.

```css
h1 {
  margin-top: -10px;
}
```