# 📋 Plano de Implementação - Template Certo/Errado

## 🎯 Objetivo

Criar um template Anki para questões de **Certo/Errado** baseado na estrutura do template de **Múltipla Escolha**, mas adaptado para conter apenas **duas alternativas**: "Certo" e "Errado".

---

## 📊 Estrutura Atual vs. Nova Estrutura

### Template Múltipla Escolha (Referência)
- **5 alternativas**: A, B, C, D, E
- **Campos**: `{{Alternativa-A}}`, `{{Alternativa-B}}`, `{{Alternativa-C}}`, `{{Alternativa-D}}`, `{{Alternativa-E}}`
- **Gabarito**: Letra (A, B, C, D ou E) ou texto completo da alternativa
- **Bolinhas**: A, B, C, D, E

### Template Certo/Errado (Novo)
- **2 alternativas**: Certo, Errado (texto estático no HTML)
- **Campos**: Apenas `{{Gabarito}}` (contém "Certo" ou "Errado")
- **Gabarito**: "Certo" ou "Errado" (ou "C" ou "E") - campo `{{Gabarito}}`
- **Bolinhas**: C (Certo), E (Errado)
- **Texto das alternativas**: Fixo no HTML ("Certo" e "Errado")

---

## 🔄 Campos do Template

### Campos do Template (simplificados)
- `{{Tags}}` - Tags do card
- `{{EnunciadoQuestao}}` - Enunciado da questão
- `{{Imagem}}` - Imagem opcional (expandível)
- `{{Anotacoes}}` - Anotações opcionais (expandível)
- `{{Gabarito}}` - Resposta correta ("Certo" ou "Errado", ou "C" ou "E")

### Alternativas (texto estático no HTML)
- **"Certo"** - Texto fixo no HTML (não é um campo)
- **"Errado"** - Texto fixo no HTML (não é um campo)

**Nota**: As alternativas "Certo" e "Errado" são texto estático escrito diretamente no HTML, não campos dinâmicos do Anki.

---

## 📐 Estrutura Visual

### Front.html (Frente do Card)
```
┌─────────────────────────────────┐
│ [Tags]                           │
├─────────────────────────────────┤
│ Enunciado da Questão             │
│                                  │
│ [▶ Imagem] (expandível)         │
│                                  │
│ ┌─────────────────────────────┐  │
│ │ ⚪ C  Certo                 │  │
│ └─────────────────────────────┘  │
│ ┌─────────────────────────────┐  │
│ │ ⚪ E  Errado                │  │
│ └─────────────────────────────┘  │
│                                  │
│ [▶ Anotações] (expandível)      │
└─────────────────────────────────┘
```

### Back.html (Verso do Card)
```
┌─────────────────────────────────┐
│ [Tags]                           │
├─────────────────────────────────┤
│ Enunciado da Questão             │
│                                  │
│ [▶ Imagem] (expandível)         │
│ ──────────────────────────────── │
│                                  │
│ ┌─────────────────────────────┐  │
│ │ ✅ C  Certo (verde se correto)│ │
│ └─────────────────────────────┘  │
│ ┌─────────────────────────────┐  │
│ │ ❌ E  Errado (vermelho se errado)│ │
│ └─────────────────────────────┘  │
│                                  │
│ [▶ Anotações] (expandível)      │
│                                  │
│ [Footer com links de busca]      │
└─────────────────────────────────┘
```

---

## 🛠️ Fases de Implementação

### **FASE 1: Estrutura HTML - Front.html**

#### 1.1 Estrutura Base
- [x] Manter estrutura do `.prettify-flashcard`
- [x] Manter tags (`{{Tags}}`)
- [x] Manter enunciado (`{{EnunciadoQuestao}}`)
- [x] Manter campo de imagem (`{{Imagem}}`) com `<details>`/`<summary>`
- [x] Manter campo de anotações (`{{Anotacoes}}`) com `<details>`/`<summary>`

#### 1.2 Alternativas Certo/Errado (Texto Estático)
- [x] Substituir container de 5 alternativas por 2 alternativas
- [x] Criar alternativa "Certo" com texto fixo:
  ```html
  <label class="alternativa-item" data-letra="C">
    <input type="radio" name="resposta-questao" value="C" class="alternativa-radio">
    <span class="alternativa-letra">C</span>
    <span class="alternativa-texto">Certo</span>
  </label>
  ```
- [x] Criar alternativa "Errado" com texto fixo:
  ```html
  <label class="alternativa-item" data-letra="E">
    <input type="radio" name="resposta-questao" value="E" class="alternativa-radio">
    <span class="alternativa-letra">E</span>
    <span class="alternativa-texto">Errado</span>
  </label>
  ```
- **Importante**: As alternativas não usam campos `{{Certo}}` ou `{{Errado}}`, são texto estático "Certo" e "Errado"

#### 1.3 Scripts JavaScript
- [x] Manter script de split de tags hierárquicas
- [x] Manter script de cores aleatórias para texto em negrito
- [x] Manter script de MathJax
- [x] **Ajustar script de seleção de alternativa**:
  - Manter lógica de `localStorage`
  - Valores serão "C" (Certo) ou "E" (Errado)
  - Manter debug logs
- [x] Manter script de zoom de imagens

---

### **FASE 2: Estrutura HTML - Back.html**

#### 2.1 Estrutura Base
- [x] Manter estrutura do `.prettify-flashcard`
- [x] Manter tags (`{{Tags}}`)
- [x] Manter enunciado (`{{EnunciadoQuestao}}`)
- [x] Manter campo de imagem (`{{Imagem}}`) com `<details>`/`<summary>`
- [x] Adicionar `<hr>` divisor antes das alternativas
- [x] Manter campo de anotações (`{{Anotacoes}}`) com `<details>`/`<summary>`
- [x] Manter footer com links de busca usando `{{EnunciadoQuestao}}`

#### 2.2 Alternativas no Verso (Texto Estático)
- [x] Substituir container de 5 alternativas por 2 alternativas
- [x] Criar alternativa "Certo" (desabilitada) com texto fixo:
  ```html
  <label class="alternativa-item" data-letra="C">
    <input type="radio" name="resposta-questao" value="C" class="alternativa-radio" disabled>
    <span class="alternativa-letra">C</span>
    <span class="alternativa-texto">Certo</span>
  </label>
  ```
- [x] Criar alternativa "Errado" (desabilitada) com texto fixo:
  ```html
  <label class="alternativa-item" data-letra="E">
    <input type="radio" name="resposta-questao" value="E" class="alternativa-radio" disabled>
    <span class="alternativa-letra">E</span>
    <span class="alternativa-texto">Errado</span>
  </label>
  ```
- [x] Adicionar elemento oculto com gabarito:
  ```html
  <span data-gabarito="{{Gabarito}}" style="display:none;"></span>
  ```
- **Importante**: As alternativas não usam campos `{{Certo}}` ou `{{Errado}}`, são texto estático "Certo" e "Errado"

#### 2.3 Scripts JavaScript
- [x] Manter script de split de tags hierárquicas
- [x] Manter script de cores aleatórias
- [x] **Ajustar script de comparação e feedback**:
  - Normalizar gabarito: aceitar "Certo", "Errado", "C", "E"
  - Comparar com resposta do usuário ("C" ou "E")
  - Aplicar classes CSS: `.alternativa-correta`, `.alternativa-errada`, `.alternativa-acertou`
  - Manter debug logs
- [x] Manter script de zoom de imagens

---

### **FASE 3: Estilização CSS - Style.css**

#### 3.1 Estrutura Base
- [x] Copiar todas as variáveis CSS do template anterior
- [x] Manter cores para alternativas e feedback
- [x] Manter estilos de card, campos, tags, imagens, anotações

#### 3.2 Estilos das Alternativas
- [x] **Manter estilos existentes** (já funcionam para 2 alternativas):
  - `.alternativas-container`
  - `.alternativa-item`
  - `.alternativa-radio` (oculto)
  - `.alternativa-letra` (bolinha circular)
  - `.alternativa-texto`
  - `.alternativa-selecionada` (azul no front)
  - `.alternativa-correta` (verde no back)
  - `.alternativa-errada` (vermelho no back)
  - `.alternativa-acertou` (verde com sombra no back)

#### 3.3 Ajustes Específicos (Opcional)
- [x] Considerar layout horizontal para 2 alternativas (opcional) - mantido vertical
- [x] Manter responsividade mobile
- [x] Garantir que as bolinhas "C" e "E" tenham tamanho adequado

---

### **FASE 4: Normalização do Gabarito**

#### 4.1 Lógica de Normalização
O script no `Back.html` deve aceitar gabarito em diferentes formatos:
- "Certo" → normalizar para "C"
- "Errado" → normalizar para "E"
- "C" → manter "C"
- "E" → manter "E"
- "CERTO" → normalizar para "C"
- "ERRADO" → normalizar para "E"

#### 4.2 Implementação
```javascript
// Normalizar gabarito
let gabarito = null;
const gabaritoTexto = gabaritoEl.getAttribute('data-gabarito').trim().toUpperCase();

if (gabaritoTexto === 'CERTO' || gabaritoTexto === 'C') {
  gabarito = 'C';
} else if (gabaritoTexto === 'ERRADO' || gabaritoTexto === 'E') {
  gabarito = 'E';
} else {
  console.warn('Gabarito inválido:', gabaritoTexto);
  return;
}
```

---

## 📝 Checklist de Implementação

### Front.html
- [x] Estrutura base do card
- [x] Tags
- [x] Enunciado
- [x] Campo Imagem (expandível)
- [x] Alternativa "Certo" (C) - **texto estático "Certo"**
- [x] Alternativa "Errado" (E) - **texto estático "Errado"**
- [x] Campo Anotações (expandível)
- [x] Script de tags
- [x] Script de cores aleatórias
- [x] Script MathJax
- [x] Script de seleção e localStorage (valores "C" ou "E")
- [x] Script de zoom de imagens

### Back.html
- [x] Estrutura base do card
- [x] Tags
- [x] Enunciado
- [x] Campo Imagem (expandível)
- [x] Divisor horizontal (`<hr>`)
- [x] Elemento oculto com gabarito (`{{Gabarito}}`)
- [x] Alternativa "Certo" (desabilitada) - **texto estático "Certo"**
- [x] Alternativa "Errado" (desabilitada) - **texto estático "Errado"**
- [x] Campo Anotações (expandível)
- [x] Footer com links de busca
- [x] Script de tags
- [x] Script de cores aleatórias
- [x] Script de comparação e feedback (normalização "Certo"/"Errado" → "C"/"E")
- [x] Script de zoom de imagens

### Style.css
- [x] Todas as variáveis CSS
- [x] Estilos de card, campos, tags
- [x] Estilos de imagem e anotações
- [x] Estilos de alternativas (reutilizar do template anterior)
- [x] Estilos de feedback (verde/vermelho)
- [x] Responsividade mobile
- [x] Estilos de zoom de imagens

---

## 🎨 Design e UX

### Visual
- **Bolinhas**: Círculos com letras "C" e "E"
- **Cores padrão**: Transparente com borda (igual ao template anterior)
- **Cores de seleção**: Azul quando selecionado no front
- **Cores de feedback**: Verde para correto, vermelho para errado no back

### Interação
- **Hover**: Mesmo comportamento do template anterior
- **Seleção**: Radio buttons ocultos, bolinhas visíveis
- **Feedback**: Visual imediato no back após "Show Answer"

---

## 🔧 Considerações Técnicas

### JavaScript
1. **localStorage**: Usar mesma estratégia do template anterior
   - Chave: `anki-resposta-selecionada-{timestamp}`
   - Valor: "C" ou "E"
   - Referência: `anki-resposta-mais-recente`

2. **Normalização do Gabarito**:
   - Aceitar múltiplos formatos
   - Converter para "C" ou "E" internamente
   - Comparar sempre com valores normalizados

3. **Debug**: Manter logs de console para troubleshooting

### CSS
1. **Reutilização**: Maioria dos estilos pode ser reutilizada
2. **Layout**: Considerar se 2 alternativas precisam de layout diferente
3. **Responsividade**: Garantir que funcione bem no mobile

---

## 📋 Ordem de Implementação Sugerida

1. ✅ **FASE 1**: Front.html - Estrutura e alternativas
2. ✅ **FASE 2**: Back.html - Estrutura e feedback
3. ✅ **FASE 3**: Style.css - Estilização (reutilizar do template anterior)
4. ✅ **FASE 4**: Ajustes finais e testes

---

## 🧪 Testes Necessários

- [x] **Guia de Testes criado** (`GUIA_TESTES.md`)
- [ ] Seleção de "Certo" no front
- [ ] Seleção de "Errado" no front
- [ ] Feedback correto no back (verde para acerto)
- [ ] Feedback incorreto no back (vermelho para erro)
- [ ] Normalização de gabarito ("Certo" → "C", "Errado" → "E")
- [ ] Zoom de imagens
- [ ] Expandir/colapsar Imagem e Anotações
- [ ] Responsividade mobile (AnkiDroid)
- [ ] Links do footer funcionando

**📋 Ver guia completo de testes em**: `GUIA_TESTES.md`

---

## 📌 Notas Importantes

1. **Compatibilidade**: Manter compatibilidade com o template de múltipla escolha (mesma estrutura CSS)
2. **Gabarito**: Aceitar tanto texto ("Certo"/"Errado") quanto letras ("C"/"E") no campo `{{Gabarito}}`
3. **Valores**: Usar "C" e "E" internamente para consistência
4. **Reutilização**: Maximizar reutilização de código do template anterior
5. **Alternativas Estáticas**: As alternativas "Certo" e "Errado" são texto fixo no HTML, não campos do Anki
6. **Simplicidade**: Apenas o campo `{{Gabarito}}` é necessário para armazenar a resposta correta

---

## ✅ Status de Implementação

- [x] **FASE 1**: Front.html - ✅ Concluída
- [x] **FASE 2**: Back.html - ✅ Concluída
- [x] **FASE 3**: Style.css - ✅ Concluída
- [ ] **FASE 4**: Ajustes finais e testes - ⏳ Pendente

---

**Data de Criação**: 2024
**Última Atualização**: 2024




