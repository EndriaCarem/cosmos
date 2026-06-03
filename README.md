<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1280px-NGC_4414_%28NASA-med%29.jpg" alt="Galáxia espiral NGC 4414 — NASA/ESA Hubble" width="100%" />

# ✦ COSMOS ✦

### Um universo infinito, navegável e ultra-realista — direto no navegador

*Voe pelo espaço com a liberdade de um foguete. Atravesse nebulosas, descubra galáxias,
encontre buracos negros e sistemas estelares reais — com dados verdadeiros da NASA.*

<br>

[![Acessar o Cosmos](https://img.shields.io/badge/🚀_ENTRAR_NO_COSMOS-nebulosa--zeta.vercel.app-4f9cff?style=for-the-badge)](https://nebulosa-zeta.vercel.app)

![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=flat-square&logo=three.js)
![NASA API](https://img.shields.io/badge/NASA-API_Oficial-0B3D91?style=flat-square&logo=nasa)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)
![Licença](https://img.shields.io/badge/Licença-Proprietária-red?style=flat-square)

</div>

---

## 🌌 O que é

**Cosmos** é uma experiência imersiva de exploração espacial, construída do zero em
**JavaScript + Three.js + GLSL**, que roda inteira no navegador. O espaço é **gerado
proceduralmente** — então é literalmente infinito: você pode viajar para sempre e nunca
chegará ao fim.

A cada região, novos corpos celestes surgem à frente. De longe, são pontos de luz; ao se
aproximar, **revelam suas formas reais** em 3D volumétrico.

## ✨ Recursos

| | |
|---|---|
| 🌠 **Universo infinito** | Gerado por matemática (ruído + chunks). Nunca acaba, e é estável: o mesmo lugar sempre tem o mesmo objeto. |
| ☁️ **Nebulosas volumétricas** | Gás cósmico real com *raymarching* em shader — você entra e atravessa por dentro. |
| 🌀 **Galáxias únicas** | Cada espiral tem braços, abertura e núcleo diferentes. |
| 🕳️ **Buracos negros** | Com disco de acreção giratório e anel de fóton. |
| ☀️ **Sistemas estelares reais** | Planetas com **texturas reais** da NASA e dados do *Exoplanet Archive*. |
| 📷 **Fotos reais da NASA** | Ao chegar num objeto conhecido, a imagem verdadeira do Hubble/JWST aparece. |
| 🚀 **Navegação de foguete** | Velocidade proporcional à escala — rápido no vazio, preciso perto dos gigantes. |
| 🌈 **Física relativística** | Efeito *warp* (aberração da luz) e *Doppler* (azul/vermelho) em alta velocidade. |
| 🛰️ **Área de exploração** | Acesso embutido ao *NASA Eyes on the Solar System* em tempo real. |
| 🧭 **Minimapa** | Radar de canto mostrando os objetos ao seu redor. |

## 🎮 Como navegar

| Ação | Controle |
|---|---|
| Olhar ao redor | Arrastar o mouse |
| Acelerar / frear | `W` / `S`, scroll ou o acelerador lateral |
| Parar | `Espaço` |
| Zoom | Pinça (2 dedos) ou `+` / `−` |
| Viajar até o objeto | Botão **"Viajar até aqui"** ou tecla `G` |
| Explorar (NASA Eyes) | Botão **🛰 Explorar** |

## 🔬 A física por trás (o que torna surreal)

O Cosmos não inventa o visual — ele aplica **fenômenos físicos reais** para criar a
sensação de viajar pelo espaço de verdade:

| Fenômeno | O que é | Como aparece |
|---|---|---|
| **Aberração da luz** | Perto da velocidade da luz, a luz à frente se "comprime" no seu campo de visão | Em alta velocidade, as estrelas viram **riscos** e formam um túnel — o efeito *warp*. |
| **Efeito Doppler relativístico** | A luz de objetos se aproximando fica mais **azul**; se afastando, mais **vermelha** | Ao acelerar, o que vem na frente azula e o que fica atrás avermelha. |
| **Geração procedural (ruído fractal)** | Estruturas naturais nascem de funções matemáticas em várias escalas | O gás das nebulosas e a poeira cósmica são *fbm* (fractional Brownian motion). |
| **Renderização volumétrica (raymarching)** | A luz é integrada ponto a ponto ao atravessar um meio | É o que dá profundidade e densidade reais ao gás das nebulosas. |
| **Escala proporcional** | Seu movimento relativo depende do tamanho do que está perto | Rápido no vazio, lento e preciso perto de objetos gigantes — o "efeito pirâmide". |
| **Floating origin** | Truque para manter precisão numérica em distâncias enormes | Permite viajar distâncias cósmicas sem o mundo "tremer". |
| **Órbitas (Kepler)** | Planetas orbitam suas estrelas | Os mundos dos sistemas estelares giram em torno do sol. |

> O resultado: quanto mais rápido você vai, mais o universo se distorce ao seu redor —
> exatamente como a relatividade prevê.

## 🛠️ Tecnologia

- **Three.js** + **WebGL** — renderização 3D
- **GLSL** — shaders de nebulosas, estrelas e efeitos físicos
- **Funções Serverless (Vercel)** — proxy seguro para as APIs da NASA
- **APIs da NASA** — *Image Library*, *Exoplanet Archive*, *Eyes on the Solar System*

## 🔭 Dados reais

Os dados astronômicos vêm de fontes públicas oficiais:
- **NASA Image Library** — fotografias de nebulosas e galáxias
- **NASA Exoplanet Archive** — catálogo de planetas reais descobertos
- Catálogos **Messier / NGC** — magnitude, constelação e distância

---

<div align="center">

### Feito com 🤍 por **Endria Carem**

*Todos os direitos reservados. Veja a [LICENÇA](./LICENSE).*

</div>
