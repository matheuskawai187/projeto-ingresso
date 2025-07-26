# 🎫 e-Ticket

Uma plataforma web moderna e elegante para compra de ingressos online com interface intuitiva e gerenciamento inteligente de disponibilidade em tempo real.

## 📋 Sobre o Projeto

O **e-Ticket** é uma aplicação web que simula um sistema completo de venda de ingressos para eventos. Com design futurista e funcionalidades robustas, oferece uma experiência de usuário otimizada para compra de ingressos com diferentes tipos de assentos e controle automático de estoque.

## ✨ Funcionalidades

- 🎪 **Tipos de ingresso**: Três categorias disponíveis (Pista, Cadeira Superior, Cadeira Inferior)
- 📊 **Controle de estoque**: Monitoramento em tempo real da disponibilidade
- 🔢 **Validação de quantidade**: Limites mínimo (1) e máximo (10) por compra
- 💳 **Sistema de compra**: Processo simplificado com confirmação imediata
- 📈 **Atualização dinâmica**: Quantidade disponível atualizada automaticamente
- 🚫 **Detecção de esgotamento**: Alerta quando todos os ingressos se esgotam
- ✅ **Validações inteligentes**:
  - Quantidade deve ser maior que zero
  - Não permite compra além do disponível
  - Limpa campo após cada transação
  - Feedback imediato para o usuário

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com formulários otimizados
- **CSS3**: Estilização avançada incluindo:
  - Gradientes lineares complexos
  - Background images e overlays
  - Layout flexível e responsivo
  - Customização completa de elementos form
  - Box-shadow e efeitos visuais
- **JavaScript**: Lógica robusta com:
  - Funções modulares para cada tipo de ingresso
  - Validações em tempo real
  - Manipulação dinâmica do DOM
  - Sistema de verificação de estoque
  - Controle de estado da aplicação

## 🎨 Design

Interface com temática futurista e elegante:
- **Paleta de cores**:
  - Verde neon: `#00F4BF` (destaque e bordas)
  - Azul vibrante: `#1875E8` (botões e acentos)
  - Gradiente escuro: Do preto ao azul escuro
- **Tipografia**:
  - Chakra Petch para títulos (700)
  - Inter para textos (400, 700)
- **Elementos visuais**:
  - Background com imagem de evento
  - Grafismos decorativos em SVG
  - Logo personalizada e hachuras estilizadas

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd e-ticket
   ```

2. **Estrutura necessária**:
   Certifique-se de ter as pastas organizadas:
   ```
   assets/
   ├── PNG/
   ├── SVG/
   styles/
   js/
   ```

3. **Abra a aplicação**:
   - Abra o arquivo `index.html` em qualquer navegador moderno

4. **Compre ingressos**:
   - Selecione o tipo de ingresso desejado
   - Digite a quantidade (1-10 ingressos)
   - Clique em "Comprar" para finalizar
   - Acompanhe a disponibilidade sendo atualizada

## 📁 Estrutura do Projeto

```
e-ticket/
├── index.html                    # Página principal
├── styles/
│   ├── style.css                # Estilos principais
│   └── _reset.css               # Reset CSS customizado
├── js/
│   └── app.js                   # Lógica JavaScript
├── assets/
│   ├── PNG/
│   │   ├── Logo e-tricket.png   # Logo da aplicação
│   │   ├── Imagem com borda.png # Background do container
│   │   └── Arrow down.png       # Ícone do dropdown
│   ├── SVG/
│   │   ├── Grafismo verde.svg   # Elemento decorativo
│   │   └── Hachuras.svg         # Padrão visual
│   └── Ingresso.svg             # Ilustração de ingresso
└── README.md                    # Documentação
```

## 🎫 Tipos de Ingressos Disponíveis

| Tipo | Quantidade Inicial | Descrição |
|------|-------------------|-----------|
| **Pista** | 100 unidades | Área próxima ao palco, experiência imersiva |
| **Cadeira Superior** | 200 unidades | Visão privilegiada do evento |
| **Cadeira Inferior** | 400 unidades | Assentos confortáveis com boa visibilidade |

## 🔧 Funcionalidades Técnicas

### Sistema Modular de Compra
```javascript
// Cada tipo de ingresso tem sua função específica
function comprarPista(quantidadeIngresso) { ... }
function comprarSuperior(quantidadeIngresso) { ... }
function comprarInferior(quantidadeIngresso) { ... }
```

### Controle de Estoque Inteligente
```javascript
// Verificação automática de disponibilidade
if (quantidadeIngresso > qtdDisponivel) {
    alert('Quantidade indisponível para este tipo');
} else {
    // Processa a compra e atualiza estoque
}
```

### Sistema de Esgotamento
```javascript
function verificarEsgotado() {
    if (qtdPista === 0 && qtdSuperior === 0 && qtdInferior === 0) {
        document.getElementById('titulo-disponibilidade')
            .textContent = "Ingressos esgotados!";
    }
}
```

### Validações Implementadas
- **Quantidade válida**: Deve ser número positivo
- **Limite de compra**: Máximo 10 ingressos por transação
- **Disponibilidade**: Não permite compra além do estoque
- **Limpeza automática**: Campo quantidade resetado após compra

## 🌟 Características Especiais

- **Interface responsiva**: Layout fixo otimizado para desktop (1440px)
- **Feedback imediato**: Alertas de sucesso e erro para cada ação
- **Atualização em tempo real**: Estoque atualizado instantaneamente
- **Design imersivo**: Background temático e elementos visuais
- **Acessibilidade**: Labels semânticos e navegação intuitiva
- **Performance**: Código otimizado e carregamento rápido

## 🎭 Temática Visual

O projeto utiliza uma estética de evento/espetáculo:
- **Gradiente atmosférico**: Simula iluminação de palco
- **Elementos neon**: Cores vibrantes para destacar informações
- **Tipografia impactante**: Fontes que transmitem energia
- **Grafismo decorativo**: SVGs que complementam o tema

## 🛠️ Customização

### Alterar Quantidades Iniciais
No HTML, modifique os spans com IDs específicos:
```html
<li>Pista<span id="qtd-pista">150</span></li> <!-- Era 100 -->
```

### Adicionar Novos Tipos
1. **HTML**: Adicione nova option no select
2. **JavaScript**: Crie nova função de compra
3. **CSS**: Ajuste estilos se necessário

### Modificar Limites
No input HTML, ajuste os atributos:
```html
<input type="number" id="qtd" min="1" max="20"> <!-- Era max="10" -->
```

## 🔍 Melhorias Futuras

### Funcionalidades Planejadas
- **Sistema de preços**: Valores diferentes por tipo de ingresso
- **Carrinho de compras**: Múltiplas seleções antes da compra
- **Formas de pagamento**: Integração com gateways
- **Histórico de compras**: Registro de transações
- **Sistema de usuário**: Login e perfil personalizado

### Melhorias Técnicas
- **Responsividade completa**: Adaptação para mobile
- **Persistência de dados**: LocalStorage ou banco de dados
- **Animações**: Transições suaves entre estados
- **Acessibilidade aprimorada**: ARIA labels e navegação por teclado

## 🎯 Casos de Uso

- **Eventos musicais**: Shows, festivais, concertos
- **Teatro**: Peças, musicais, espetáculos
- **Esportes**: Jogos, campeonatos, competições
- **Conferências**: Palestras, workshops, seminários
- **Cinema**: Sessões especiais, pré-estreias

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovoTipoIngresso`)
3. Commit suas mudanças (`git commit -m 'Add: Novo tipo de ingresso VIP'`)
4. Push para a branch (`git push origin feature/NovoTipoIngresso`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por Matheus + Alura!

---

**Garante já o seu ingresso! 🎉**
