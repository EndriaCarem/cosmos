<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1280px-NGC_4414_%28NASA-med%29.jpg" alt="Galáxia espiral NGC 4414 — NASA/ESA Hubble" width="100%" />

# ✦ COSMOS ✦

### Um universo infinito, navegável e ultra-realista — direto no navegador

*Voe pelo espaço com a liberdade de um foguete. Atravesse nebulosas, descubra galáxias,
encontre buracos negros e sistemas estelares reais — com dados verdadeiros da NASA.*

<br>

[![Acessar o Cosmos](https://img.shields.io/badge/🚀_ENTRAR_NO_COSMOS-cosmos--mauve--nu.vercel.app-4f9cff?style=for-the-badge)](https://cosmos-mauve-nu.vercel.app)

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
| 🌈 **Física relativística** | Efeito *warp* (aberração da luz), *Doppler* (azul/vermelho) e **dilatação temporal** (fator de Lorentz no HUD) em alta velocidade. |
| 🪐 **Órbitas Keplerianas** | Planetas seguem a 3ª Lei de Kepler — os externos orbitam mais devagar, com período real da NASA quando há. |
| 🛰️ **ISS ao vivo** | A **Estação Espacial Internacional** em tempo real: posição (lat/lon/altitude/velocidade) sobre um globo da Terra + quem está a bordo agora. |
| 🛰️ **Área de exploração** | Acesso embutido ao *NASA Eyes on the Solar System* — incluindo a aba **ISS** — em tempo real. |
| 🧭 **Minimapa** | Radar de canto mostrando os objetos ao seu redor. |

## 🎮 Como navegar

| Ação | Controle |
|---|---|
| Olhar ao redor | Arrastar o mouse |
| Acelerar / frear | `W` / `S`, scroll ou o acelerador lateral |
| **Travar e observar** | `Espaço` — para a nave **e** congela a câmera; qualquer `W`/`S` ou arraste volta a navegar |
| Zoom | Pinça (2 dedos) ou `+` / `−` |
| Viajar entre objetos | Tecla `G` — vai ao **objeto mais próximo**; toque `G` de novo para ir ao **próximo**, e assim por diante. O piloto automático mira e voa até lá sozinho |
| Explorar (NASA Eyes) | Botão **🛰 Explorar** |

> 💡 **Quer contemplar algo?** Aperte `G` para voar até o objeto mais próximo (toque `G`
> de novo para saltar ao seguinte), depois `Espaço` para travar a cena e admirá-lo com
> calma. Quando quiser seguir viagem, é só acelerar de novo.

## 🔬 A física por trás (o que torna surreal)

O Cosmos não inventa o visual — ele aplica **fenômenos físicos reais** para criar a
sensação de viajar pelo espaço de verdade:

| Fenômeno | O que é | Como aparece |
|---|---|---|
| **Aberração da luz** | Perto da velocidade da luz, a luz à frente se "comprime" no seu campo de visão | Em alta velocidade, as estrelas próximas **passam voando e viram riscos** de luz, formando um túnel — o efeito *warp*. |
| **Efeito Doppler relativístico** | A luz de objetos se aproximando fica mais **azul**; se afastando, mais **vermelha** | Ao acelerar, o que vem na frente azula e o que fica atrás avermelha. |
| **Dilatação temporal** | Quanto mais rápido você viaja, mais devagar o tempo passa a bordo | O HUD mostra o **fator de Lorentz** `γ = 1/√(1−v²/c²)` — perto da luz, seu relógio corre menos que o do universo (paradoxo dos gêmeos). |
| **3ª Lei de Kepler** | `T² ∝ a³` — quanto mais distante do sol, mais lenta a órbita | Nos sistemas estelares, os planetas internos voam e os externos se arrastam — como Mercúrio vs. Netuno. Usa o **período orbital real** da NASA quando disponível. |
| **Geração procedural (ruído fractal)** | Estruturas naturais nascem de funções matemáticas em várias escalas | O gás das nebulosas e a poeira cósmica são *fbm* (fractional Brownian motion). |
| **Renderização volumétrica (raymarching)** | A luz é integrada ponto a ponto ao atravessar um meio | É o que dá profundidade e densidade reais ao gás das nebulosas. |
| **Floating origin** | Truque para manter precisão numérica em distâncias enormes | A nave fica **sempre em (0,0,0)** e o universo se desloca ao redor — permite viajar distâncias cósmicas sem o mundo "tremer". |

> O resultado: quanto mais rápido você vai, mais o universo se distorce ao seu redor —
> exatamente como a relatividade prevê.

## 📏 Distância e escala — por que os objetos são tão grandes

O Cosmos usa uma escala em que **1 unidade do mundo ≈ 1 ano-luz**. Isso explica duas coisas
que você sente ao navegar:

- **Os objetos são imensos.** Uma nebulosa tem centenas de unidades de raio — ou seja,
  *centenas de anos-luz* de ponta a ponta, como as nebulosas reais. Você não "pega" um
  objeto desses como pega uma bola: você **entra** e atravessa por dentro.
- **A velocidade é relativa à escala — o "efeito pirâmide".** Longe, no vazio, você é um
  foguete cruzando o nada. Ao se aproximar de um gigante, a velocidade vira a *escala do
  seu corpo*: você desacelera para se mover devagar e preciso, como uma pessoa caminhando
  ao pé de uma pirâmide — o objeto continua colossal à sua frente.

Por isso "chegar perto" parece levar tempo: você está se aproximando de algo do tamanho de
**centenas de anos-luz**, e o sistema te dá controle fino para explorá-lo de perto em vez
de atravessá-lo num piscar. O HUD mostra a todo momento sua **velocidade** (em km/s ou
múltiplos da luz), a **distância** já percorrida e o **objeto mais próximo**.

> 🛰️ **Dica:** use `G` para deixar o piloto automático te levar até o objeto, e `Espaço`
> para travar e contemplá-lo na escala certa.

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
- **wheretheiss.at** — posição da ISS em tempo real (atualiza a cada poucos segundos)
- **open-notify.org** — astronautas a bordo da ISS neste momento

---

<div align="center">

### Feito com 🤍 por **Endria Carem**

*Todos os direitos reservados. Veja a [LICENÇA](./LICENSE).*

</div>
