# Weather App ⁺₊⋆ ☁︎ ☀︎ ☁︎ ⋆⁺₊

Aplicação desenvolvida em Next.js para exibir informações climáticas de cidades pré-definidas utilizando a API OpenWeather.

## ✮ Live Demo 

[Weather App](https://weather-app-tds.vercel.app/)

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library
- Docker
- OpenWeather API

## Cidades Disponíveis

- Dallol (NG)
- Fairbanks (US)
- Londres (GB)
- Recife (BR)
- Vancouver (CA)
- Yakutsk (RU)

## Funcionalidades

- Seleção de cidades pré-definidas
- Exibição da temperatura atual
- Temperaturas mínima e máxima do dia
- Exibição das temperaturas para:
  - Dawn (03:00)
  - Morning (09:00)
  - Afternoon (15:00)
  - Night (21:00)
- Informações de:
  - Umidade
  - Velocidade do vento
  - Nascer do sol
  - Pôr do sol
- Ícones climáticos dinâmicos
- Layout responsivo para smartphone, tablet e desktop

## Testes

Para executar os testes:

```bash
pnpm test
```

Os testes cobrem:

- Mapeamento de ícones climáticos
- Cálculo de temperatura mínima e máxima
- Mapeamento dos períodos do dia
- Renderização da página de detalhes da cidade

## Executando Localmente

### 1. Clone o repositório

```bash
git clone <repository-url>
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
OPENWEATHER_API_KEY=your_api_key
```

### 4. Execute o projeto

```bash
pnpm dev
```

A aplicação estará disponível em:

```txt
http://localhost:3000
```

## Docker

Construir a imagem:

```bash
docker build -t weather-challenge .
```

Executar o container:

```bash
docker run -p 3000:3000 weather-challenge
```

## Requisitos Atendidos

- ✅ Next.js
- ✅ Integração com OpenWeather API
- ✅ Fidelidade ao layout fornecido
- ✅ Responsividade para smartphone, tablet e desktop
- ✅ Testes unitários
- ✅ Docker
- ✅ Deploy na Vercel

## 👩🏻‍💻 Autora

**Thaís Neves** - thaisnevesst@gmail.com
