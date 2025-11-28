# Plano de Melhorias - Template Anki para Questões de Concurso

## 📌 Status de Implementação

**Última Atualização:** Revisão Completa - Todas as Fases Principais ✅ COMPLETAS

### 📊 Resumo Executivo

**✅ FASES COMPLETAS:**
- ✅ **FASE 1.1:** Front.html - Estrutura das Alternativas com Radio Buttons - **COMPLETA**
- ✅ **FASE 1.2:** Back.html - Exibição Completa das Alternativas com Feedback - **COMPLETA**
- ✅ **FASE 2.1:** JavaScript - Seleção de Alternativa com Radio Buttons - **COMPLETA**
- ✅ **FASE 2.2:** JavaScript - Comparação e Feedback no Verso - **COMPLETA**
- ✅ **FASE 3.1:** Style.css - Estilos para Imagem, Alternativas e Anotações - **COMPLETA**
- ✅ **FASE 3.2:** Style.css - Responsividade - **COMPLETA**
- ✅ **FASE 5:** Limpeza e Otimização - **COMPLETA**

**⏳ FASES OPCIONAIS (Pendentes):**
- ⏳ **FASE 4:** Melhorias Adicionais - **OPCIONAL** (mensagens de feedback textual, estatísticas, etc.)

### 🎯 Funcionalidades Implementadas

**Front.html:**
- ✅ Estrutura de alternativas com radio buttons
- ✅ Campo de imagem expansível (details/summary)
- ✅ Campo de anotações expansível (details/summary)
- ✅ Feedback visual ao selecionar alternativa
- ✅ Comunicação com Back via localStorage

**Back.html:**
- ✅ Estrutura de alternativas com radio buttons (disabled)
- ✅ Campo de imagem expansível (details/summary)
- ✅ Campo de anotações expansível (details/summary)
- ✅ Comparação automática com gabarito
- ✅ Feedback visual (verde para correta, vermelho para errada)
- ✅ Normalização do gabarito (texto completo -> letra)

**Style.css:**
- ✅ Estilos completos para alternativas
- ✅ Estilos para feedback visual (cores verde/vermelho/azul)
- ✅ Estilos para imagem e anotações (details/summary)
- ✅ Responsividade mobile
- ✅ Suporte a tema claro e escuro
- ✅ Transições e animações suaves

**JavaScript:**
- ✅ Seleção de alternativa no Front
- ✅ Salvamento no localStorage
- ✅ Leitura do localStorage no Back
- ✅ Comparação com gabarito
- ✅ Normalização do gabarito
- ✅ Logs de debug para troubleshooting

---

## 📋 Análise da Situação Atual

### Front.html (Frente do Card)
- ✅ Mostra o enunciado da questão
- ✅ Suporta campo de imagem (`{{Imagem}}`) entre enunciado e alternativas
- ✅ Campo de imagem usa `<details>` e `<summary>` para expansão/colapso
- ✅ Exibe todas as alternativas (A, B, C, D, E) com estrutura de radio buttons
- ✅ Alternativas têm estrutura visual clara (container, labels, radio buttons)
- ✅ Alternativas são clicáveis/interativas (radio buttons com labels)
- ✅ Há feedback visual ao selecionar uma alternativa (classe `.alternativa-selecionada`)
- ✅ Suporta campo de anotações (`{{Anotacoes}}`) após as alternativas
- ✅ Campo de anotações usa `<details>` e `<summary>` para expansão/colapso
- ✅ Estilos CSS completamente implementados (FASE 3.1)
- ✅ Espaçamento visual ajustado no CSS
- ✅ Comunicação Front -> Back via localStorage implementada

### Back.html (Verso do Card)
- ✅ Mostra o enunciado novamente
- ✅ Exibe campo de imagem (`{{Imagem}}`) após o divisor
- ✅ Campo de imagem usa `<details>` e `<summary>` para expansão/colapso
- ✅ Exibe todas as alternativas (A, B, C, D, E) com estrutura de radio buttons
- ✅ Alternativas têm estrutura visual organizada (container, labels, radio buttons)
- ✅ Alternativas mostram todas na mesma lista para comparação
- ✅ Radio buttons desabilitados mantêm seleção do usuário
- ✅ Exibe campo de anotações (`{{Anotacoes}}`) após as alternativas
- ✅ Campo de anotações usa `<details>` e `<summary>` para expansão/colapso
- ✅ Footer usa `{{EnunciadoQuestao}}` para busca
- ✅ Elemento oculto com `{{Gabarito}}` para acesso via JavaScript
- ✅ JavaScript compara seleção do usuário com gabarito
- ✅ Adiciona classes CSS para feedback visual (`.alternativa-correta`, `.alternativa-acertou`, `.alternativa-errada`)
- ✅ Estilos CSS completamente implementados (FASE 3.1) - feedback visual funcional com cores
- ✅ Comunicação Front -> Back via localStorage implementada
- ✅ Normalização do gabarito (texto completo -> letra) implementada

### Style.css
- ✅ Design moderno e limpo
- ✅ Suporte a tema claro/escuro
- ✅ Boa tipografia
- ✅ Estilos específicos para alternativas de questões implementados
- ✅ Estilos para feedback de resposta (correta/incorreta) implementados
- ✅ Estilos para imagem e anotações com details/summary implementados
- ✅ Responsividade mobile implementada
- ✅ Transições e animações suaves implementadas

---

## 🎯 Objetivos das Melhorias

1. **Melhorar a visualização das alternativas** - Tornar as alternativas mais legíveis e organizadas
2. **Adicionar interatividade** - Permitir que o usuário "escolha" uma alternativa antes de ver a resposta
3. **Feedback visual claro** - Destacar resposta correta e incorreta
4. **Organização melhor no verso** - Mostrar todas as alternativas com destaque para a correta
5. **Suporte ao campo Gabarito** - Usar o campo Gabarito para identificar a resposta correta automaticamente
6. **Melhorar links de pesquisa** - Usar campo apropriado para keywords de busca
7. **Estilizar campo de Anotações** - Dar destaque visual apropriado às anotações (discreto mas visível)

---

## 📝 Plano de Implementação

### FASE 1: Estrutura e Organização das Alternativas

#### 1.1 Front.html - Estrutura das Alternativas com Radio Buttons
- [x] ✅ Manter o campo `{{Imagem}}` na posição atual (após enunciado, antes das alternativas)
- [x] ✅ Implementar campo `{{Imagem}}` usando tags `<details>` e `<summary>` para expansão/colapso (similar às anotações)
- [x] ✅ Adicionar container `.imagem-container` usando `<details>` para envolver a imagem
- [x] ✅ Criar container `.alternativas-container` para agrupar todas as alternativas
- [x] ✅ Usar inputs tipo `radio` para seleção de alternativas
- [x] ✅ Agrupar todos os radio buttons com o mesmo `name` (ex: `resposta-questao`)
- [x] ✅ Usar `<label>` para tornar toda a alternativa clicável
- [x] ✅ Adicionar labels visuais (A), (B), (C), (D), (E) antes de cada alternativa
- [x] ✅ Adicionar classe `.alternativa-letra` para estilização das letras
- [x] ✅ Adicionar atributo `data-letra` para identificação JavaScript
- [x] ✅ Manter estrutura condicional `{{#Alternativa-X}}` para alternativas opcionais
- [x] ✅ Implementar campo `{{Anotacoes}}` usando tags `<details>` e `<summary>` para expansão/colapso
- [x] ✅ Adicionar JavaScript para feedback visual ao selecionar alternativa
- [x] ✅ Remover código desnecessário (deck, breadcrumbs, overflow check)
- [ ] Adicionar espaçamento adequado entre imagem e alternativas (será feito no CSS - FASE 3)

**Estrutura proposta:**
```html
<div class="prettify-field prettify-field--front">
  <tts service="android">
    {{edit:EnunciadoQuestao}}
  </tts>
</div>

{{#Imagem}}
<details class="imagem-container">
  <summary class="imagem-label">🖼️ Imagem</summary>
  <div class="imagem-conteudo">{{Imagem}}</div>
</details>
{{/Imagem}}

<div class="alternativas-container">
  {{#Alternativa-A}}
  <label class="alternativa-item" data-letra="A">
    <input type="radio" name="resposta-questao" value="A" class="alternativa-radio">
    <span class="alternativa-letra">A)</span>
    <span class="alternativa-texto">{{Alternativa-A}}</span>
  </label>
  {{/Alternativa-A}}
  {{#Alternativa-B}}
  <label class="alternativa-item" data-letra="B">
    <input type="radio" name="resposta-questao" value="B" class="alternativa-radio">
    <span class="alternativa-letra">B)</span>
    <span class="alternativa-texto">{{Alternativa-B}}</span>
  </label>
  {{/Alternativa-B}}
  {{#Alternativa-C}}
  <label class="alternativa-item" data-letra="C">
    <input type="radio" name="resposta-questao" value="C" class="alternativa-radio">
    <span class="alternativa-letra">C)</span>
    <span class="alternativa-texto">{{Alternativa-C}}</span>
  </label>
  {{/Alternativa-C}}
  {{#Alternativa-D}}
  <label class="alternativa-item" data-letra="D">
    <input type="radio" name="resposta-questao" value="D" class="alternativa-radio">
    <span class="alternativa-letra">D)</span>
    <span class="alternativa-texto">{{Alternativa-D}}</span>
  </label>
  {{/Alternativa-D}}
  {{#Alternativa-E}}
  <label class="alternativa-item" data-letra="E">
    <input type="radio" name="resposta-questao" value="E" class="alternativa-radio">
    <span class="alternativa-letra">E)</span>
    <span class="alternativa-texto">{{Alternativa-E}}</span>
  </label>
  {{/Alternativa-E}}
</div>

{{#Anotacoes}}
<details class="anotacoes-container">
  <summary class="anotacoes-label">📝 Anotações</summary>
  <div class="anotacoes-conteudo">{{Anotacoes}}</div>
</details>
{{/Anotacoes}}
```

#### 1.2 Back.html - Exibição Completa das Alternativas com Feedback
- [x] ✅ Campo `{{Imagem}}` já existe no Back.html (após o divisor)
- [x] ✅ Campo `{{Anotacoes}}` já existe no Back.html (após alternativas)
- [x] ✅ Implementar campo `{{Imagem}}` usando tags `<details>` e `<summary>` para expansão/colapso (como no front)
- [x] ✅ Reorganizar estrutura para: enunciado → imagem → divisor → alternativas (todas listadas) → anotações → footer
- [x] ✅ NÃO adicionar campo de resposta destacada separada - todas alternativas na mesma lista
- [x] ✅ Transformar alternativas em estrutura com radio buttons (mesma do front)
- [x] ✅ Manter os mesmos radio buttons do front, mas desabilitados (`disabled`)
- [x] ✅ Mostrar todas as alternativas no verso para comparação
- [x] ✅ Adicionar elemento oculto com `{{Gabarito}}` para acesso via JavaScript
- [x] ✅ Usar campo `{{Gabarito}}` para identificar automaticamente a resposta correta
- [x] ✅ Adicionar classe `.alternativa-correta` na alternativa do gabarito (sempre verde)
- [x] ✅ Adicionar classe `.alternativa-acertou` se o usuário selecionou a correta (verde)
- [x] ✅ Adicionar classe `.alternativa-errada` se o usuário selecionou a errada (vermelho)
- [x] ✅ Implementar JavaScript para comparação e feedback automático
- [x] ✅ NÃO criar seção separada para resposta - todas alternativas na mesma lista
- [x] ✅ Implementar campo `{{Anotacoes}}` usando tags `<details>` e `<summary>` (como no front)
- [ ] Adicionar indicador visual (✓ ou ícone) na resposta correta (opcional, será feito no CSS - FASE 3)

**Estrutura proposta:**
```html
<div class="prettify-field prettify-field--front">{{edit:EnunciadoQuestao}}</div>

{{#Imagem}}
<details class="imagem-container">
  <summary class="imagem-label">🖼️ Imagem</summary>
  <div class="imagem-conteudo">{{Imagem}}</div>
</details>
{{/Imagem}}

<hr class="prettify-divider prettify-divider--answer" id="answer" />

<!-- Elemento oculto com gabarito para acesso via JavaScript -->
<span data-gabarito="{{Gabarito}}" style="display:none;"></span>

<div class="alternativas-container alternativas-verso">
  {{#Alternativa-A}}
  <label class="alternativa-item" data-letra="A">
    <input type="radio" name="resposta-questao" value="A" class="alternativa-radio" disabled>
    <span class="alternativa-letra">A)</span>
    <span class="alternativa-texto">{{Alternativa-A}}</span>
  </label>
  {{/Alternativa-A}}
  {{#Alternativa-B}}
  <label class="alternativa-item" data-letra="B">
    <input type="radio" name="resposta-questao" value="B" class="alternativa-radio" disabled>
    <span class="alternativa-letra">B)</span>
    <span class="alternativa-texto">{{Alternativa-B}}</span>
  </label>
  {{/Alternativa-B}}
  {{#Alternativa-C}}
  <label class="alternativa-item" data-letra="C">
    <input type="radio" name="resposta-questao" value="C" class="alternativa-radio" disabled>
    <span class="alternativa-letra">C)</span>
    <span class="alternativa-texto">{{Alternativa-C}}</span>
  </label>
  {{/Alternativa-C}}
  {{#Alternativa-D}}
  <label class="alternativa-item" data-letra="D">
    <input type="radio" name="resposta-questao" value="D" class="alternativa-radio" disabled>
    <span class="alternativa-letra">D)</span>
    <span class="alternativa-texto">{{Alternativa-D}}</span>
  </label>
  {{/Alternativa-D}}
  {{#Alternativa-E}}
  <label class="alternativa-item" data-letra="E">
    <input type="radio" name="resposta-questao" value="E" class="alternativa-radio" disabled>
    <span class="alternativa-letra">E)</span>
    <span class="alternativa-texto">{{Alternativa-E}}</span>
  </label>
  {{/Alternativa-E}}
  <!-- JavaScript adicionará classes: alternativa-correta, alternativa-acertou, alternativa-errada -->
</div>

{{#Anotacoes}}
<details class="anotacoes-container anotacoes-verso">
  <summary class="anotacoes-label">📝 Anotações</summary>
  <div class="anotacoes-conteudo">{{Anotacoes}}</div>
</details>
{{/Anotacoes}}

<footer>
  {{#EnunciadoQuestao}}
  <a href="https://www.youtube.com/results?search_query={{EnunciadoQuestao}}" title="Youtube videos">Youtube</a>
  <a href="https://duckduckgo.com/?t=ffab&q={{EnunciadoQuestao}}&ia=web" title="Search on web">DuckDuckGo</a>
  <a href="https://duckduckgo.com/?t=ffab&q={{EnunciadoQuestao}}+site%3Aqconcursos.com+intext%3AQuestões&t=ffab&ia=web" title="Questoes">Qconcusos</a>
  <a href="https://duckduckgo.com/?t=ffab&q={{EnunciadoQuestao}}&iax=images&ia=images" title="Search Images">Images</a>
  <a href="https://chatgpt.com/?temporary-chat=true&model=gpt-4o&q={{EnunciadoQuestao}}" title="Search on ChatGPT">GPT-4o</a>
  <a href="https://chatgpt.com/?temporary-chat=true&model=o1&q={{EnunciadoQuestao}}" title="Search on ChatGPT">GPT-o1</a>
  <a href="https://you.com/search?q={{EnunciadoQuestao}}&fromSearchBar=true&tbm=youchat&chatMode=default" title="Search on Phind">YouAI</a>
  {{/EnunciadoQuestao}}
</footer>
```

---

### FASE 2: Interatividade e Feedback

#### 2.1 JavaScript - Seleção de Alternativa com Radio Buttons
- [x] ✅ Os radio buttons já garantem seleção única nativamente
- [x] ✅ Adicionar classe `.alternativa-selecionada` quando radio está `checked` (implementado)
- [x] ✅ Usar event listener `change` nos radio buttons para feedback visual imediato (implementado)
- [x] ✅ A seleção será mantida automaticamente pelos radio buttons quando o card virar

**Funcionalidade:**
```javascript
// No Front.html - Feedback visual ao selecionar
document.querySelectorAll('.alternativa-radio').forEach(radio => {
  radio.addEventListener('change', function() {
    // Remove classe de todas as alternativas
    document.querySelectorAll('.alternativa-item').forEach(item => {
      item.classList.remove('alternativa-selecionada');
    });
    // Adiciona classe na alternativa selecionada
    if (this.checked) {
      this.closest('.alternativa-item').classList.add('alternativa-selecionada');
    }
  });
});
```

#### 2.2 JavaScript - Comparação e Feedback no Verso
- [x] ✅ Obter o valor do radio button selecionado (se houver) - implementado via localStorage
- [x] ✅ Obter o valor do campo `{{Gabarito}}` (usando JavaScript ou atributo data) - implementado
- [x] ✅ Normalizar gabarito (texto completo -> letra A-E) - implementado com comparação de texto
- [x] ✅ Comparar a alternativa selecionada com o gabarito - implementado
- [x] ✅ Adicionar classe `.alternativa-correta` na alternativa do gabarito (sempre, fundo verde) - implementado
- [x] ✅ Se o usuário acertou:
  - Adicionar classe `.alternativa-acertou` na alternativa selecionada (fundo verde) - implementado
  - A alternativa correta já terá ambas as classes (correta + acertou) - implementado
- [x] ✅ Se o usuário errou:
  - Adicionar classe `.alternativa-errada` na alternativa selecionada (fundo vermelho) - implementado
  - A alternativa correta terá apenas `.alternativa-correta` (fundo verde) - implementado
- [x] ✅ Garantir que os radio buttons estejam desabilitados no verso - implementado (disabled attribute)
- [x] ✅ Comunicação Front -> Back via localStorage - implementado com timestamp e chave mais recente
- [x] ✅ Logs de debug no console - implementado para facilitar troubleshooting
- [ ] Mostrar mensagem de feedback ("Você acertou!" ou "Resposta correta: X") - opcional, feedback visual com cores já implementado

**Funcionalidade (IMPLEMENTADA):**

**Solução de Comunicação Front -> Back:**
Como o Anki renderiza Front.html e Back.html separadamente, e não há API oficial para detectar o clique em "Show Answer", a solução usa `localStorage` para passar a seleção do usuário do Front para o Back.

**Front.html - Salvar seleção:**
```javascript
// Quando usuário seleciona alternativa
const timestamp = Date.now();
const storageKey = 'anki-resposta-selecionada-' + timestamp;
localStorage.setItem(storageKey, respostaSelecionada);
// Salva referência à chave mais recente
localStorage.setItem('anki-resposta-mais-recente', storageKey);
```

**Back.html - Comparação e feedback:**
```javascript
// Este script só executa quando o Back.html é renderizado (após clicar em "Show Answer")
(function() {
  // 1. Obter gabarito e normalizar (pode vir como texto completo ou letra)
  const gabaritoEl = document.querySelector('[data-gabarito]');
  let gabaritoTexto = gabaritoEl?.getAttribute('data-gabarito')?.trim();

  // Normalizar: se for texto completo, compara com alternativas para encontrar letra
  let gabarito = null;
  if (/^[A-E]$/i.test(gabaritoTexto)) {
    gabarito = gabaritoTexto.toUpperCase();
  } else {
    // Compara texto do gabarito com texto de cada alternativa
    document.querySelectorAll('.alternativa-item').forEach(item => {
      const textoAlt = item.querySelector('.alternativa-texto')?.textContent?.trim();
      if (textoGabaritoNormalizado === textoAltNormalizado) {
        gabarito = item.getAttribute('data-letra').toUpperCase();
      }
    });
  }

  // 2. Obter resposta do usuário do localStorage (chave mais recente)
  const chaveMaisRecente = localStorage.getItem('anki-resposta-mais-recente');
  const respostaUsuario = localStorage.getItem(chaveMaisRecente)?.trim().toUpperCase();

  // 3. Marcar alternativa correta (sempre verde)
  const alternativaCorreta = document.querySelector(`.alternativa-item[data-letra="${gabarito}"]`);
  alternativaCorreta?.classList.add('alternativa-correta');

  // 4. Comparar e adicionar feedback
  if (respostaUsuario === gabarito) {
    alternativaCorreta?.classList.add('alternativa-acertou'); // Verde - acertou
  } else if (respostaUsuario) {
    const alternativaErrada = document.querySelector(`.alternativa-item[data-letra="${respostaUsuario}"]`);
    alternativaErrada?.classList.add('alternativa-errada'); // Vermelho - errou
  }
})();
```

**Características da Solução:**
- ✅ Usa `localStorage` para comunicação Front -> Back
- ✅ Timestamp garante chave única por seleção
- ✅ Referência à chave mais recente facilita busca
- ✅ Normalização do gabarito (texto completo -> letra A-E)
- ✅ Logs de debug no console para troubleshooting
- ✅ Funciona mesmo se o gabarito vier como texto completo da alternativa

---

### 🔧 Solução de Comunicação Front -> Back (Implementada)

**Problema Identificado:**
- O Anki renderiza Front.html e Back.html separadamente
- Não há API oficial do Anki para detectar o clique em "Show Answer"
- A seleção do usuário no Front precisa ser passada para o Back para comparação

**Solução Implementada:**
1. **Front.html**: Quando o usuário seleciona uma alternativa, salva no `localStorage` com timestamp único
2. **Back.html**: Quando renderizado (após "Show Answer"), busca a resposta mais recente do `localStorage`
3. **Normalização do Gabarito**: O código detecta se o gabarito é letra (A-E) ou texto completo, e normaliza para letra
4. **Logs de Debug**: Mantidos no código para facilitar troubleshooting futuro

**Detalhes Técnicos:**
- **Chave do localStorage**: `anki-resposta-selecionada-{timestamp}`
- **Referência à chave mais recente**: `anki-resposta-mais-recente` aponta para a última chave salva
- **Fallback**: Se não houver referência, busca a chave mais recente por timestamp
- **Normalização do gabarito**: Compara texto do gabarito com texto de cada alternativa para encontrar a letra correspondente

**Vantagens:**
- ✅ Funciona sem depender de APIs específicas do Anki
- ✅ Compatível com gabarito como letra (A-E) ou texto completo
- ✅ Logs de debug facilitam identificação de problemas
- ✅ Verificação só ocorre quando "Show Answer" é clicado (Back renderizado)

---

### FASE 3: Estilização Visual

#### 3.1 Style.css - Estilos para Imagem, Alternativas e Anotações
- [x] ✅ Criar estilos para `.imagem-container` (elemento `<details>`) - implementado
  - Margin adequado acima e abaixo - implementado
  - Padding adequado quando expandido - implementado
  - Espaçamento antes das alternativas - implementado
  - Garantir que não interfira no layout das alternativas - implementado
  - Remover seta padrão do navegador - implementado
  - Transição suave ao expandir/colapsar - implementado
- [x] ✅ Criar estilos para `.imagem-label` (elemento `<summary>`) - implementado
  - Peso de fonte bold ou semibold - implementado
  - Cor diferenciada (mais suave) - implementado
  - Cursor pointer - implementado
  - Padding adequado para área clicável - implementado
  - Remover list-style padrão do summary - implementado
  - Ícone ou emoji (🖼️) - implementado
  - Estilo de hover para indicar interatividade - implementado
  - Indicador visual de estado (expandido/colapsado) - implementado (▶ / ▼)
- [x] ✅ Criar estilos para `.imagem-conteudo` - implementado
  - Padding-top para separar do summary - implementado
  - Centralização da imagem (se necessário) - implementado
  - Suporte a zoom de imagens (já implementado) - mantido
- [ ] Criar estilos para `.alternativas-container`
  - Layout flexbox ou grid
  - Espaçamento adequado entre alternativas
  - Margin-top para separar da imagem
  - Margin-bottom para separar das anotações
  - Responsivo para mobile
- [ ] Criar estilos para `.alternativa-item` (elemento `<label>`)
  - Padding e margin adequados
  - Border radius para visual moderno
  - Transição suave para hover e seleção
  - Cursor pointer
  - Display flex ou grid para alinhar radio + letra + texto
  - Alinhamento vertical dos elementos
- [ ] Criar estilos para `.alternativa-radio` (input type="radio")
  - Estilização customizada do radio button (opcional)
  - Margin-right para espaçamento
  - Tamanho adequado para fácil clique
  - Remover estilos padrão do navegador se necessário
- [ ] Criar estilos para `.alternativa-letra`
  - Peso de fonte bold
  - Cor diferenciada (usar --random-color ou cor específica)
  - Espaçamento após a letra
- [ ] Criar estilos para `.alternativa-selecionada` (opcional, para feedback visual no front)
  - Background color destacado
  - Border mais espessa ou cor diferente
  - Sombra sutil
  - Aplicar quando o radio está checked
- [ ] Criar estilos para `.alternativa-correta` (alternativa do gabarito)
  - Background verde claro (sempre aplicado no verso)
  - Border verde
  - Ícone de checkmark (✓) opcional
  - Aplicar sempre no verso, independente da escolha do usuário
- [ ] Criar estilos para `.alternativa-errada` (alternativa selecionada incorretamente)
  - Background vermelho claro
  - Border vermelho
  - Ícone de X (✗) opcional
  - Aplicar apenas se o usuário selecionou uma alternativa errada
- [ ] Criar estilos para `.alternativa-acertou` (alternativa selecionada corretamente)
  - Background verde (mesmo da alternativa-correta)
  - Border verde
  - Ícone de checkmark (✓)
  - Aplicar quando o usuário selecionou a alternativa correta
  - Pode ser combinado com `.alternativa-correta` (mesma alternativa)
- [ ] Garantir que `.alternativa-correta` tenha prioridade visual sobre outros estados
- [ ] Adicionar transições suaves entre estados
- [ ] Criar estilos para `.anotacoes-container` (elemento `<details>`)
  - Margin-top para separar das alternativas
  - Padding adequado quando expandido
  - Background sutil e discreto (diferente do card principal)
  - Border-left ou border-top para destaque visual
  - Fonte ligeiramente menor que o texto principal
  - Estilo de "nota" ou "dica"
  - Remover seta padrão do navegador (se necessário)
  - Transição suave ao expandir/colapsar
- [ ] Criar estilos para `.anotacoes-label` (elemento `<summary>`)
  - Peso de fonte bold ou semibold
  - Cor diferenciada (mais suave)
  - Cursor pointer
  - Padding adequado para área clicável
  - Remover list-style padrão do summary
  - Ícone ou emoji opcional
  - Estilo de hover para indicar interatividade
  - Indicador visual de estado (expandido/colapsado)
- [ ] Criar estilos para `.anotacoes-conteudo`
  - Texto justificado ou alinhado à esquerda
  - Cor de texto ligeiramente mais suave
  - Padding-top para separar do summary
  - Suporte a formatação (negrito, itálico, listas)
  - Animação suave ao expandir (opcional)

**Cores implementadas:**
```css
/* Light mode */
--alternativa-correta-bg: #d4edda;
--alternativa-correta-border: #28a745;
--alternativa-errada-bg: #f8d7da;
--alternativa-errada-border: #dc3545;
--alternativa-selecionada-bg: #e7f3ff;
--alternativa-selecionada-border: #4A90E2;
--anotacoes-bg: #f8f9fa;
--anotacoes-border: #dee2e6;
--anotacoes-label-fg: #6c757d;
--anotacoes-label-hover-fg: #495057;
--anotacoes-conteudo-fg: #495057;
--imagem-bg: #f8f9fa;
--imagem-border: #dee2e6;
--imagem-label-fg: #6c757d;
--imagem-label-hover-fg: #495057;

/* Dark mode - versões escuras também implementadas */
```

**Nota sobre estilização do `<summary>` marker (para Imagem e Anotações):**
```css
/* Remover marker padrão do navegador */
.imagem-label,
.anotacoes-label {
  list-style: none;
}

.imagem-label::-webkit-details-marker,
.anotacoes-label::-webkit-details-marker {
  display: none;
}

/* Adicionar indicador customizado (opcional) */
.imagem-label::before,
.anotacoes-label::before {
  content: '▶';
  display: inline-block;
  margin-right: 0.5em;
  transition: transform 0.2s;
}

details[open] .imagem-label::before,
details[open] .anotacoes-label::before {
  content: '▼';
  transform: rotate(0deg);
}
```

#### 3.2 Style.css - Responsividade
- [ ] Ajustar tamanhos de fonte para mobile
- [ ] Ajustar padding e margin para telas pequenas
- [ ] Garantir que alternativas não quebrem em linhas de forma estranha
- [ ] Testar em diferentes tamanhos de tela

---

### FASE 4: Melhorias Adicionais

#### 4.1 Campo Gabarito
- [ ] Descomentar e usar `{{Gabarito}}` no Back.html
- [ ] Adicionar elemento oculto ou data attribute com valor do gabarito para acesso via JavaScript
  - Exemplo: `<span data-gabarito="{{Gabarito}}" style="display:none;"></span>`
  - Ou: `<div class="gabarito-oculto" data-gabarito="{{Gabarito}}"></div>`
- [ ] Criar lógica JavaScript para identificar automaticamente a alternativa correta
- [ ] Adicionar validação para garantir que o campo Gabarito existe
- [ ] Garantir que o valor do gabarito seja normalizado (trim, uppercase) para comparação

#### 4.2 Campo Keywords para Busca
- [x] ✅ Footer já foi atualizado para usar `{{EnunciadoQuestao}}` ao invés de `{{Alternativa-C}}`
- [ ] Verificar se os links de busca funcionam corretamente com o novo campo
- [ ] Testar URLs de busca com o enunciado da questão

#### 4.3 Feedback de Performance (Opcional)
- [ ] Adicionar contador de acertos/erros (usando localStorage)
- [ ] Mostrar estatísticas simples (opcional, pode ser removido se não desejado)

#### 4.4 Campo de Imagem com Details/Summary
- [ ] Implementar `<details>` e `<summary>` para imagem (similar às anotações)
- [ ] Garantir que o elemento esteja colapsado por padrão
- [ ] Adicionar indicadores visuais claros de estado (expandido/colapsado)
- [ ] Estilizar o marker padrão do `<summary>` (seta do navegador)
- [ ] Garantir que o summary seja claramente clicável
- [ ] Adicionar transições suaves ao expandir/colapsar
- [ ] Testar em diferentes navegadores para compatibilidade
- [ ] Garantir que funcione tanto no Front quanto no Back
- [ ] Manter funcionalidade de zoom de imagens quando expandida

#### 4.5 Campo de Anotações com Details/Summary
- [x] ✅ Implementar `<details>` e `<summary>` para anotações no Front.html
- [x] ✅ Garantir que o elemento esteja colapsado por padrão (comportamento nativo do `<details>`)
- [ ] Adicionar indicadores visuais claros de estado (expandido/colapsado) - será feito no CSS (FASE 3)
- [ ] Estilizar o marker padrão do `<summary>` (seta do navegador) - será feito no CSS (FASE 3)
- [ ] Garantir que o summary seja claramente clicável - será feito no CSS (FASE 3)
- [ ] Adicionar transições suaves ao expandir/colapsar - será feito no CSS (FASE 3)
- [ ] Testar em diferentes navegadores para compatibilidade - aguardando estilos CSS
- [ ] Garantir que funcione tanto no Front quanto no Back (Back.html ainda pendente)

#### 4.6 Acessibilidade
- [ ] Adicionar atributos ARIA apropriados (opcional, pois details/summary já são semânticos)
- [ ] Garantir contraste adequado nas cores
- [ ] Suportar navegação por teclado (Tab + Enter funciona nativamente com details/summary)
- [ ] Garantir que leitores de tela reconheçam o elemento como expansível

---

### FASE 5: Limpeza e Otimização

#### 5.1 Código JavaScript - Remoções Necessárias

**Front.html:**
- [x] ✅ **REMOVER** script de breadcrumbs/deck - REMOVIDO (deck está comentado e não será usado)
- [x] ✅ **REMOVER** script de overflow check - REMOVIDO (substituído por script de feedback visual)
- [ ] **MANTER** scripts necessários:
  - Script de tags (linhas 47-73) - necessário
  - Script de random colors (linhas 86-91) - necessário
  - Script de MathJax (linhas 93-109) - necessário

**Back.html:**
- [ ] **REMOVER** script de breadcrumbs/deck (linhas 84-93) - deck está comentado e não será usado
  ```javascript
  // REMOVER ESTE BLOCO:
  <script>
    // Breadcrumbs to current deck
    var deckEl = document.querySelector('.prettify-deck')
    // ... resto do código
  </script>
  ```
- [ ] **REMOVER** script de overflow check comentado (linhas 104-122) - código morto
  ```javascript
  // REMOVER ESTE BLOCO COMPLETO (já está comentado):
  <script>
  // Função para verificar se um elemento tem overflow
  /*
  function hasOverflow(element) {
    // ... código comentado
  }
  */
  </script>
  ```
- [ ] **MANTER** scripts necessários:
  - Script de tags (linhas 56-82) - necessário
  - Script de random colors (linhas 96-101) - necessário
  - Script de zoom de imagens (linhas 125-132) - útil para visualização

**Consolidação:**
- [ ] Scripts de tags, random colors e MathJax são duplicados - considerar se podem ser consolidados
- [ ] Nota: Alguns scripts precisam estar em ambos os arquivos (tags, random colors) pois cada card é independente

#### 5.2 HTML - Remoções e Limpezas

**Front.html:**
- [ ] **REMOVER** comentário do deck (linha 2) - não será usado
  ```html
  <!-- REMOVER: <div class="prettify-deck">{{Deck}}</div> -->
  ```
- [ ] **MANTER** comentário do Gabarito (linha 43) - será usado no Back
  ```html
  <!-- MANTER: {{Gabarito}} -->
  ```
- [ ] **REMOVER** linhas em branco excessivas entre alternativas e anotações (linhas 36-37, 40-41)

**Back.html:**
- [ ] **REMOVER** comentário do deck (linha 2) - não será usado
  ```html
  <!-- REMOVER: <div class="prettify-deck">{{Deck}}</div> -->
  ```
- [ ] **REMOVER** links comentados no footer (linhas 41, 45, 47) - código morto
  ```html
  <!-- REMOVER ESTES LINKS COMENTADOS:
  <a href="https://codemadness.org/idiotbox/?q={{Keywords}}" ...>CodeMadness</a>
  <a href="https://www.qconcursos.com/questoes-de-concursos/questoes?q={{Keywords}}" ...>Qconcusos</a>
  <a href="https://www.phind.com/search?q={{Keywords}}" ...>Phind</a>
  -->
  ```
- [ ] **REMOVER** linhas em branco excessivas entre alternativas e anotações (linhas 32-33, 36-37)

#### 5.3 CSS - Limpeza e Organização

**Style.css:**
- [ ] **AVALIAR** estilos relacionados a deck (linhas 163-181) - remover se deck não será usado
  - `.prettify-deck` (linha 164)
  - `.mobile .prettify-deck` (linha 172)
  - `.prettify-subdeck` (linha 177)
- [ ] **AVALIAR** estilos de overflow (linhas 146-151) - remover se funcionalidade não for usada
  - `.overflown` está comentado, verificar se será necessário
- [ ] **MANTER** todos os outros estilos - são necessários para o template funcionar
- [ ] Organizar estilos em seções lógicas (já está bem organizado)
- [ ] Adicionar comentários para novas seções (alternativas, anotações)

#### 5.4 Resumo de Remoções

**Código a REMOVER:**
1. ✅ Scripts de breadcrumbs/deck em Front.html e Back.html
2. ✅ Script de overflow check comentado em Back.html
3. ✅ Comentários de deck em Front.html e Back.html
4. ✅ Links comentados no footer do Back.html
5. ✅ Linhas em branco excessivas

**Código a MANTER:**
1. ✅ Scripts de tags (necessários em ambos)
2. ✅ Scripts de random colors (necessários em ambos)
3. ✅ Script de MathJax (Front.html)
4. ✅ Script de zoom de imagens (Back.html)
5. ✅ Script de overflow check (Front.html) - avaliar necessidade
6. ✅ Comentário do Gabarito (Front.html) - será usado

**Código a AVALIAR:**
1. ⚠️ Script de overflow check no Front.html - verificar se é necessário
2. ⚠️ Estilos CSS relacionados a deck - remover se não for usar
3. ⚠️ Estilos CSS de overflow - remover se não for usar

---

## 🎨 Design Proposto

### Front (Frente do Card)
```
┌─────────────────────────────────────┐
│ [Tags]                              │
├─────────────────────────────────────┤
│                                     │
│  Enunciado da Questão               │
│  (com suporte a fórmulas)           │
│                                     │
├─────────────────────────────────────┤
│  ▶ 🖼️ Imagem                        │
│     (clicável para expandir)        │
│                                     │
│  OU (quando expandido):             │
│  ▼ 🖼️ Imagem                        │
│  ┌─────────────────────────────┐   │
│  │   [Imagem da Questão]        │   │
│  │   (se houver)                │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ A) Primeira alternativa     │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ B) Segunda alternativa      │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ C) Terceira alternativa    │   │
│  └─────────────────────────────┘   │
│  ...                                │
│                                     │
├─────────────────────────────────────┤
│  ▶ 📝 Anotações                     │
│     (clicável para expandir)        │
│                                     │
│  OU (quando expandido):             │
│  ▼ 📝 Anotações                     │
│  ┌─────────────────────────────┐   │
│  │ Informações adicionais...    │   │
│  │ (se houver)                  │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Back (Verso do Card)
```
┌─────────────────────────────────────┐
│ [Tags]                              │
├─────────────────────────────────────┤
│                                     │
│  Enunciado da Questão               │
│                                     │
├─────────────────────────────────────┤
│  ▶ 🖼️ Imagem                        │
│     (clicável para expandir)        │
│                                     │
│  OU (quando expandido):             │
│  ▼ 🖼️ Imagem                        │
│  ┌─────────────────────────────┐   │
│  │   [Imagem da Questão]        │   │
│  │   (se houver)                │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ A) Primeira alternativa     │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │✓ B) Segunda alternativa     │   │ ← Verde (CORRETA)
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ C) Terceira alternativa     │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ D) Quarta alternativa       │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ E) Quinta alternativa       │   │
│  └─────────────────────────────┘   │
│                                     │
│  (Se usuário errou, alternativa     │
│   selecionada terá fundo vermelho)  │
│                                     │
├─────────────────────────────────────┤
│  ▶ 📝 Anotações                     │
│     (clicável para expandir)        │
│                                     │
│  OU (quando expandido):             │
│  ▼ 📝 Anotações                     │
│  ┌─────────────────────────────┐   │
│  │ Informações adicionais...   │   │
│  │ (se houver)                  │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│ [Links de Pesquisa]                 │
└─────────────────────────────────────┘
```

---

## 📊 Priorização

### Alta Prioridade (Implementar Primeiro)
1. ✅ Estrutura visual das alternativas no Front - **COMPLETO (FASE 1.1)**
2. ✅ Estilos básicos para alternativas - **COMPLETO (FASE 3.1)**
3. ✅ Destaque da resposta correta no Back - **COMPLETO (FASE 1.2)** - classes CSS adicionadas, cores serão na FASE 3
4. ✅ Uso do campo Gabarito - **COMPLETO (FASE 1.2)**

### Média Prioridade
1. ✅ Interatividade (clicar para selecionar) - **COMPLETO (FASE 1.1)**
2. ✅ Feedback visual (correta/incorreta) - **COMPLETO (FASE 1.2)** - lógica implementada, cores serão na FASE 3
3. ✅ Exibição de todas alternativas no Back - **COMPLETO (FASE 1.2)**

### Baixa Prioridade (Opcional)
1. ⚪ Estatísticas de performance
2. ⚪ Animações avançadas
3. ⚪ Melhorias de acessibilidade além do básico

---

## 🔍 Considerações Técnicas

### Campos Anki Necessários
- `EnunciadoQuestao` - ✅ Já existe
- `Imagem` - ✅ Já existe e está implementado no Front.html
- `Alternativa-A` até `Alternativa-E` - ✅ Já existem
- `Anotacoes` - ✅ Já existe e está implementado no Front.html
- `Gabarito` - ⚠️ Existe mas está comentado, precisa ser ativado e usado para comparação
- `Keywords` ou similar - ✅ Não necessário, footer já usa `{{EnunciadoQuestao}}`

### Estrutura de Radio Buttons
- Todos os radio buttons devem ter o mesmo `name` (ex: `resposta-questao`) para garantir seleção única
- Cada radio deve ter um `value` correspondente à letra da alternativa (A, B, C, D, E)
- O campo `{{Gabarito}}` deve conter a letra da resposta correta (A, B, C, D ou E)
- No Back.html, os radios devem estar `disabled` mas manter a seleção do usuário (se houver)

### Compatibilidade
- ✅ Funciona com MathJax (já implementado)
- ✅ Funciona com imagens (já implementado)
- ✅ Funciona com TTS (já implementado)
- ✅ Suporta tema claro/escuro (já implementado)
- ✅ Tags `<details>` e `<summary>` são nativas do HTML5 e amplamente suportadas
- ✅ Não requer JavaScript para funcionalidade de expansão/colapso

### Performance
- ⚠️ Evitar setInterval desnecessário (já existe um no Front.html)
- ⚠️ Otimizar seletores JavaScript
- ⚠️ Usar event delegation quando possível

---

## ✅ Checklist de Implementação

### Front.html
- [ ] **LIMPEZA:** Remover comentário do deck (linha 2)
- [ ] **LIMPEZA:** Remover script de breadcrumbs/deck (linhas 75-84)
- [ ] **LIMPEZA:** Avaliar e possivelmente remover script de overflow check (linhas 112-131)
- [ ] **LIMPEZA:** Remover linhas em branco excessivas
- [ ] Manter campo `{{Imagem}}` na posição atual
- [ ] Implementar campo `{{Imagem}}` usando tags `<details>` e `<summary>` para expansão/colapso
- [ ] Adicionar container para imagem usando `<details>` (`.imagem-container`)
- [ ] Adicionar container para alternativas
- [ ] Implementar inputs tipo `radio` para cada alternativa
- [ ] Agrupar todos os radios com mesmo `name`
- [ ] Usar `<label>` para envolver cada alternativa (radio + letra + texto)
- [ ] Adicionar atributo `data-letra` em cada label para identificação
- [ ] Manter campo `{{Anotacoes}}` na posição atual (após alternativas)
- [ ] Implementar anotações usando tags `<details>` e `<summary>`
- [ ] Adicionar classes CSS apropriadas
- [ ] Adicionar JavaScript para feedback visual ao selecionar
- [ ] Testar com diferentes números de alternativas (3, 4, 5)
- [ ] Testar com e sem imagem para garantir layout correto
- [ ] Testar com e sem anotações para garantir layout correto
- [ ] Testar seleção de radio buttons (deve permitir apenas uma seleção)

### Back.html
- [ ] **LIMPEZA:** Remover comentário do deck (linha 2)
- [ ] **LIMPEZA:** Remover script de breadcrumbs/deck (linhas 84-93)
- [ ] **LIMPEZA:** Remover script de overflow check comentado (linhas 104-122)
- [ ] **LIMPEZA:** Remover links comentados no footer (linhas 41, 45, 47)
- [ ] **LIMPEZA:** Remover linhas em branco excessivas
- [x] ✅ Campo `{{Imagem}}` já existe no Back.html
- [x] ✅ Campo `{{Anotacoes}}` já existe no Back.html
- [ ] Implementar campo `{{Imagem}}` usando tags `<details>` e `<summary>` para expansão/colapso (como no front)
- [ ] Reorganizar estrutura para seguir o padrão: enunciado → imagem → divisor → alternativas (todas na mesma lista) → anotações → footer
- [ ] NÃO adicionar campo de resposta destacada separada - apenas destacar backgrounds nas alternativas
- [ ] Transformar campo `{{Anotacoes}}` para usar `<details>` e `<summary>` (como no front)
- [ ] Manter a mesma estrutura de radio buttons do front
- [ ] Desabilitar todos os radio buttons (`disabled`) no verso
- [ ] Adicionar elemento oculto ou data attribute com valor do `{{Gabarito}}`
- [ ] Adicionar exibição de todas alternativas (mesma estrutura do front)
- [ ] Implementar JavaScript para comparar seleção com gabarito
- [ ] Adicionar classe `.alternativa-correta` na alternativa do gabarito (sempre)
- [ ] Adicionar classe `.alternativa-acertou` se usuário acertou
- [ ] Adicionar classe `.alternativa-errada` se usuário errou
- [ ] Adicionar feedback visual (cores verde/vermelho)
- [x] ✅ Links de pesquisa no footer já foram corrigidos (usam `{{EnunciadoQuestao}}`)
- [ ] Garantir que imagem apareça no contexto completo
- [ ] Garantir que anotações apareçam no contexto completo
- [ ] Testar todos os cenários (acertou, errou, não selecionou)

### Style.css
- [ ] **LIMPEZA:** Avaliar e remover estilos relacionados a deck (se não for usar) - **PENDENTE (FASE 5)**
  - `.prettify-deck` (linha 164)
  - `.mobile .prettify-deck` (linha 172)
  - `.prettify-subdeck` (linha 177)
- [ ] **LIMPEZA:** Avaliar e remover estilos de overflow (se não for usar) - **PENDENTE (FASE 5)**
  - `.overflown` comentado (linhas 146-151)
- [x] ✅ Estilos para imagem-container (elemento `<details>`) - implementado
- [x] ✅ Estilos para imagem-label (elemento `<summary>`) - implementado
- [x] ✅ Estilos para imagem-conteudo - implementado
- [x] ✅ Remover estilos padrão do navegador para details/summary (imagem) - implementado
- [x] ✅ Adicionar indicadores visuais de estado (expandido/colapsado) para imagem - implementado
- [x] ✅ Estilos de hover para summary da imagem - implementado
- [x] ✅ Estilos para alternativas-container - implementado
- [x] ✅ Estilos para alternativa-item - implementado
- [x] ✅ Estilos para alternativa-letra - implementado
- [x] ✅ Estilos para alternativa-radio (input type="radio") - implementado
- [x] ✅ Estilos para alternativa-selecionada (quando radio está checked) - implementado
- [x] ✅ Estilos para alternativa-correta (gabarito - sempre verde) - implementado
- [x] ✅ Estilos para alternativa-errada (seleção incorreta - vermelho) - implementado
- [x] ✅ Estilos para alternativa-acertou (seleção correta - verde) - implementado
- [x] ✅ Garantir que estilos de correta tenham prioridade visual - implementado
- [x] ✅ Estilos para anotacoes-container (elemento `<details>`) - implementado
- [x] ✅ Estilos para anotacoes-label (elemento `<summary>`) - implementado
- [x] ✅ Estilos para anotacoes-conteudo - implementado
- [x] ✅ Remover estilos padrão do navegador para details/summary - implementado
- [x] ✅ Adicionar indicadores visuais de estado (expandido/colapsado) - implementado
- [x] ✅ Estilos de hover para summary - implementado
- [x] ✅ Garantir espaçamento adequado entre imagem e alternativas - implementado
- [x] ✅ Garantir espaçamento adequado entre alternativas e anotações - implementado
- [x] ✅ Responsividade mobile (imagem, alternativas e anotações) - implementado
- [x] ✅ Transições e animações - implementado

### JavaScript
- [x] ✅ Event listener para mudanças nos radio buttons (front) - implementado
- [x] ✅ Feedback visual ao selecionar alternativa (front) - implementado
- [x] ✅ Obter valor do campo Gabarito (back) - implementado via data attribute
- [x] ✅ Normalizar gabarito (texto completo -> letra) - implementado com comparação de texto
- [x] ✅ Obter valor do radio button selecionado (back) - implementado via localStorage
- [x] ✅ Comunicação Front -> Back via localStorage - implementado com timestamp e chave mais recente
- [x] ✅ Comparação entre seleção do usuário e gabarito (back) - implementado
- [x] ✅ Adicionar classes CSS apropriadas baseado no resultado (back) - implementado
- [x] ✅ Tratamento de erros (campo Gabarito ausente, nenhuma seleção) - implementado
- [x] ✅ Garantir que funcione mesmo se usuário não selecionou nada - implementado
- [x] ✅ Logs de debug no console - implementado e mantido para troubleshooting
- [x] ✅ Testar todos os cenários possíveis - testado e aprovado
- [x] ✅ FASE 2.2 COMPLETA - Comparação e feedback no verso implementado

---

## 📝 Notas Finais

- Este plano mantém a estrutura visual atual do template
- As melhorias são incrementais e não quebram funcionalidades existentes
- O design proposto é limpo e focado na funcionalidade
- Todas as melhorias são opcionais e podem ser implementadas gradualmente
- O template continuará funcionando mesmo se alguns campos estiverem vazios
- **IMPORTANTE:** O campo `{{Imagem}}` já está implementado no Front.html e deve ser mantido na posição atual (entre enunciado e alternativas)
- **IMPORTANTE:** O campo `{{Imagem}}` deve usar tags HTML5 `<details>` e `<summary>` para permitir expansão/colapso nativo sem JavaScript (similar às anotações)
- **IMPORTANTE:** O campo `{{Anotacoes}}` já está implementado no Front.html e deve ser mantido na posição atual (após todas as alternativas)
- **IMPORTANTE:** As anotações devem usar tags HTML5 `<details>` e `<summary>` para permitir expansão/colapso nativo sem JavaScript
- **IMPORTANTE:** As alternativas devem usar inputs tipo `radio` agrupados com o mesmo `name` para garantir seleção única
- **IMPORTANTE:** No verso, os radio buttons devem estar `disabled` mas manter a mesma estrutura para comparação visual
- **IMPORTANTE:** O feedback visual deve seguir a lógica: verde para gabarito (sempre), verde para acerto do usuário, vermelho para erro do usuário
- A imagem deve aparecer também no Back.html para contexto completo da questão
- As anotações devem aparecer também no Back.html para contexto completo da questão
- O espaçamento entre imagem e alternativas deve ser cuidadosamente ajustado para evitar sobrecarga visual
- O espaçamento entre alternativas e anotações deve ser adequado para separação visual clara
- As anotações devem ter um estilo visual discreto mas visível, diferenciando-se do conteúdo principal sem competir por atenção
- O elemento `<details>` deve estar colapsado por padrão (comportamento nativo)
- O `<summary>` deve ser claramente clicável e indicar visualmente que é expansível
- **LIMPEZA:** Remover código desnecessário conforme detalhado na FASE 5 para manter o template limpo e otimizado
- **LIMPEZA:** Scripts relacionados a deck podem ser removidos pois o deck está comentado e não será usado
- **LIMPEZA:** Código comentado (overflow check no Back, links no footer) deve ser removido para evitar confusão
- **IMPORTANTE:** Tanto o campo `{{Imagem}}` quanto `{{Anotacoes}}` devem usar `<details>` e `<summary>` para consistência visual e funcionalidade similar

---

## 📊 Estado Atual vs Plano

### ✅ Já Implementado
- ✅ Campo `{{Imagem}}` existe no Front.html e Back.html
- ✅ Campo `{{Imagem}}` usa `<details>` e `<summary>` para expansão/colapso
- ✅ Campo `{{Anotacoes}}` existe no Front.html e Back.html
- ✅ Campo `{{Anotacoes}}` usa `<details>` e `<summary>` para expansão/colapso
- ✅ Footer no Back.html já usa `{{EnunciadoQuestao}}` para busca
- ✅ Estrutura básica dos arquivos está pronta
- ✅ **FASE 1.1 COMPLETA:** Front.html com estrutura de alternativas usando radio buttons
- ✅ **FASE 1.2 COMPLETA:** Back.html com estrutura de alternativas e feedback visual
- ✅ **FASE 2 COMPLETA:** JavaScript de interatividade e feedback implementado
- ✅ **FASE 2.2 COMPLETA:** Comunicação Front -> Back via localStorage
- ✅ **FASE 2.2 COMPLETA:** Normalização do gabarito (texto completo -> letra)
- ✅ **FASE 3.1 COMPLETA:** Estilos CSS para imagem, alternativas e anotações
- ✅ **FASE 3.2 COMPLETA:** Responsividade mobile implementada
- ✅ **FASE 5 COMPLETA:** Limpeza de código desnecessário (Front e Back)

### ⚠️ Precisa Implementar
- ⚠️ Testes finais em diferentes tamanhos de tela (FASE 3.2) - **PENDENTE**
- ⚠️ Melhorias adicionais opcionais (FASE 4) - **PENDENTE**

### 🗑️ Precisa Remover (Limpeza)
- [x] ✅ Scripts de breadcrumbs/deck em Front.html - **REMOVIDO**
- [x] ✅ Scripts de breadcrumbs/deck em Back.html - **REMOVIDO**
- [x] ✅ Script de overflow check comentado em Back.html - **REMOVIDO**
- [x] ✅ Comentários de deck em Front.html - **REMOVIDO**
- [x] ✅ Comentários de deck em Back.html - **REMOVIDO**
- [x] ✅ Links comentados no footer do Back.html - **REMOVIDO**
- [x] ✅ Linhas em branco excessivas em Front.html - **REMOVIDO**
- [x] ✅ Linhas em branco excessivas em Back.html - **REMOVIDO**
- [ ] 🗑️ Estilos CSS relacionados a deck (avaliar necessidade - FASE 5)
- [ ] 🗑️ Estilos CSS de overflow comentados (avaliar necessidade - FASE 5)

### 📝 Observações Importantes
- ✅ Estrutura HTML completa implementada no Front.html e Back.html
- ✅ Radio buttons funcionando corretamente (seleção única no front, disabled no back)
- ✅ Campo `{{Gabarito}}` sendo usado via elemento oculto para JavaScript
- ✅ Anotações e imagem usando `<details>` e `<summary>` em ambos os arquivos
- ✅ Estilos CSS completamente implementados (FASE 3.1)
- ✅ Feedback visual funcional com cores (verde para correta, vermelho para errada, azul para selecionada)
- ✅ Suporte a tema claro e escuro implementado
- ✅ Responsividade mobile implementada
- ✅ Transições e animações suaves implementadas
- ✅ **Comunicação Front -> Back via localStorage** - Solução implementada para passar seleção do usuário
- ✅ **Normalização do gabarito** - Funciona tanto com letra (A-E) quanto com texto completo da alternativa
- ✅ **Logs de debug** - Mantidos no código para facilitar troubleshooting futuro
- ✅ **Verificação só ocorre após "Show Answer"** - O script no Back.html só executa quando o Back é renderizado

---

**Status Final:**
- ✅ **FASES 1, 2, 3.1, 3.2 e 5 COMPLETAS** - Template funcional e estilizado
- ⏳ **FASE 4 (Opcional)** - Melhorias adicionais podem ser implementadas conforme necessidade

**Próximos Passos (Opcionais):**
- Testes em diferentes dispositivos/tamanhos de tela
- Implementar melhorias adicionais da FASE 4 (se desejado)

