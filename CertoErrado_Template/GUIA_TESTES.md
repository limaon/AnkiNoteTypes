# 🧪 Guia de Testes - Template Certo/Errado

Este guia fornece uma lista completa de testes para validar todas as funcionalidades do template Certo/Errado no Anki.

---

## 📋 Pré-requisitos

1. **Anki instalado** (versão 2.1.x ou superior)
2. **Template importado** no Anki
3. **Campos criados** no tipo de nota:
   - `EnunciadoQuestao`
   - `Imagem` (opcional)
   - `Anotacoes` (opcional)
   - `Gabarito`
   - `Tags` (opcional)

---

## 🎯 Testes Básicos

### Teste 1: Estrutura do Card (Front)

**Objetivo**: Verificar se todos os elementos aparecem corretamente no front do card.

**Passos**:
1. Criar um novo card com o template Certo/Errado
2. Preencher o campo `EnunciadoQuestao` com um texto de teste
3. Visualizar o card no modo de revisão

**Resultado Esperado**:
- ✅ Tags aparecem no topo (se preenchidas)
- ✅ Enunciado da questão aparece centralizado
- ✅ Seção "Imagem" aparece (mesmo vazia, se campo existir)
- ✅ Duas alternativas aparecem: "Certo" (C) e "Errado" (E)
- ✅ Bolinhas circulares com letras "C" e "E" visíveis
- ✅ Seção "Anotações" aparece (mesmo vazia, se campo existir)

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 2: Seleção de Alternativa (Front)

**Objetivo**: Verificar se a seleção de alternativa funciona corretamente.

**Passos**:
1. Abrir um card no modo de revisão
2. Clicar na alternativa "Certo"
3. Verificar feedback visual
4. Clicar na alternativa "Errado"
5. Verificar feedback visual

**Resultado Esperado**:
- ✅ Ao clicar em "Certo", a bolinha "C" fica azul
- ✅ Ao clicar em "Certo", o fundo da alternativa fica azul claro
- ✅ Ao clicar em "Errado", a bolinha "E" fica azul
- ✅ Ao clicar em "Errado", o fundo da alternativa fica azul claro
- ✅ Apenas uma alternativa pode estar selecionada por vez
- ✅ Ao selecionar outra alternativa, a anterior é desmarcada automaticamente

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 3: Feedback Visual no Back (Acerto)

**Objetivo**: Verificar se o feedback visual aparece corretamente quando o usuário acerta.

**Passos**:
1. Criar um card com `Gabarito` = "Certo" (ou "C")
2. Abrir o card no modo de revisão
3. Selecionar a alternativa "Certo"
4. Clicar em "Show Answer"

**Resultado Esperado**:
- ✅ A alternativa "Certo" aparece com fundo verde
- ✅ A bolinha "C" fica verde
- ✅ Aparece sombra verde ao redor da alternativa
- ✅ Console do navegador mostra: "✅✅✅ USUÁRIO ACERTOU!"

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 4: Feedback Visual no Back (Erro)

**Objetivo**: Verificar se o feedback visual aparece corretamente quando o usuário erra.

**Passos**:
1. Criar um card com `Gabarito` = "Certo" (ou "C")
2. Abrir o card no modo de revisão
3. Selecionar a alternativa "Errado"
4. Clicar em "Show Answer"

**Resultado Esperado**:
- ✅ A alternativa "Errado" aparece com fundo vermelho
- ✅ A bolinha "E" fica vermelha
- ✅ A alternativa "Certo" aparece com fundo verde (resposta correta)
- ✅ A bolinha "C" fica verde (resposta correta)
- ✅ Console do navegador mostra: "❌❌❌ USUÁRIO ERROU!"

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 5: Normalização do Gabarito (Texto Completo)

**Objetivo**: Verificar se o gabarito aceita texto completo ("Certo" ou "Errado").

**Passos**:
1. Criar um card com `Gabarito` = "Certo"
2. Selecionar "Certo" no front
3. Clicar em "Show Answer"
4. Repetir com `Gabarito` = "Errado" e selecionar "Errado"

**Resultado Esperado**:
- ✅ Com `Gabarito` = "Certo" e seleção "Certo": feedback verde (acerto)
- ✅ Com `Gabarito` = "Certo" e seleção "Errado": feedback vermelho (erro)
- ✅ Com `Gabarito` = "Errado" e seleção "Errado": feedback verde (acerto)
- ✅ Com `Gabarito` = "Errado" e seleção "Certo": feedback vermelho (erro)

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 6: Normalização do Gabarito (Letras)

**Objetivo**: Verificar se o gabarito aceita letras ("C" ou "E").

**Passos**:
1. Criar um card com `Gabarito` = "C"
2. Selecionar "Certo" no front
3. Clicar em "Show Answer"
4. Repetir com `Gabarito` = "E" e selecionar "Errado"

**Resultado Esperado**:
- ✅ Com `Gabarito` = "C" e seleção "Certo": feedback verde (acerto)
- ✅ Com `Gabarito` = "C" e seleção "Errado": feedback vermelho (erro)
- ✅ Com `Gabarito` = "E" e seleção "Errado": feedback verde (acerto)
- ✅ Com `Gabarito` = "E" e seleção "Certo": feedback vermelho (erro)

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 7: Normalização do Gabarito (Case-Insensitive)

**Objetivo**: Verificar se o gabarito funciona independente de maiúsculas/minúsculas.

**Passos**:
1. Criar cards com:
   - `Gabarito` = "certo"
   - `Gabarito` = "CERTE"
   - `Gabarito` = "errado"
   - `Gabarito` = "ERRADO"
   - `Gabarito` = "c"
   - `Gabarito` = "C"
   - `Gabarito` = "e"
   - `Gabarito` = "E"
2. Testar seleção e feedback para cada um

**Resultado Esperado**:
- ✅ Todas as variações funcionam corretamente
- ✅ Feedback visual aparece corretamente para todas

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 8: Campo Imagem (Expandível)

**Objetivo**: Verificar se o campo de imagem funciona corretamente.

**Passos**:
1. Criar um card com uma imagem no campo `Imagem`
2. Abrir o card no modo de revisão
3. Verificar se a seção "Imagem" aparece
4. Clicar para expandir/colapsar
5. Clicar na imagem para ampliar

**Resultado Esperado**:
- ✅ Seção "Imagem" aparece com ícone ▶ quando fechada
- ✅ Ao clicar, expande mostrando ▼
- ✅ Imagem aparece dentro do container
- ✅ Ao clicar na imagem, ela amplia (zoom)
- ✅ Ao clicar novamente, ela volta ao tamanho normal
- ✅ Overlay escuro aparece quando imagem está ampliada

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 9: Campo Anotações (Expandível)

**Objetivo**: Verificar se o campo de anotações funciona corretamente.

**Passos**:
1. Criar um card com texto no campo `Anotacoes`
2. Abrir o card no modo de revisão
3. Verificar se a seção "Anotações" aparece
4. Clicar para expandir/colapsar

**Resultado Esperado**:
- ✅ Seção "Anotações" aparece com ícone ▶ quando fechada
- ✅ Ao clicar, expande mostrando ▼
- ✅ Texto das anotações aparece formatado
- ✅ Funciona tanto no front quanto no back

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 10: Footer com Links de Busca

**Objetivo**: Verificar se os links do footer funcionam corretamente.

**Passos**:
1. Abrir um card no modo de revisão
2. Clicar em "Show Answer"
3. Verificar se o footer aparece
4. Clicar em cada link do footer

**Resultado Esperado**:
- ✅ Footer aparece no final do card (apenas no back)
- ✅ Links aparecem: Youtube, DuckDuckGo, Qconcusos, Images, GPT-4o, GPT-o1, YouAI
- ✅ Cada link abre em nova aba/janela
- ✅ Links contêm o texto do `EnunciadoQuestao` na URL de busca

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 11: Hover nas Alternativas

**Objetivo**: Verificar se o efeito hover funciona corretamente.

**Passos**:
1. Abrir um card no modo de revisão
2. Passar o mouse sobre a alternativa "Certo"
3. Passar o mouse sobre a alternativa "Errado"

**Resultado Esperado**:
- ✅ Ao passar o mouse, a borda fica azul
- ✅ Ao passar o mouse, o fundo fica azul claro
- ✅ Efeito funciona em ambas as alternativas
- ✅ Transição é suave

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 12: Responsividade Mobile (AnkiDroid)

**Objetivo**: Verificar se o template funciona corretamente no mobile.

**Passos**:
1. Abrir o AnkiDroid
2. Abrir um card com o template Certo/Errado
3. Testar todas as funcionalidades básicas
4. Testar zoom de imagem

**Resultado Esperado**:
- ✅ Layout se adapta ao tamanho da tela
- ✅ Texto é legível
- ✅ Alternativas são clicáveis
- ✅ Zoom de imagem funciona
- ✅ Overlay escuro cobre toda a tela quando imagem está ampliada
- ✅ Anotações e Imagem expandem/colapsam corretamente

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 13: Sem Seleção (Apenas Mostrar Correta)

**Objetivo**: Verificar comportamento quando usuário não seleciona nada.

**Passos**:
1. Criar um card com `Gabarito` = "Certo"
2. Abrir o card no modo de revisão
3. **NÃO** selecionar nenhuma alternativa
4. Clicar diretamente em "Show Answer"

**Resultado Esperado**:
- ✅ A alternativa correta aparece em verde
- ✅ Nenhuma alternativa aparece em vermelho
- ✅ Console mostra: "ℹ️ Usuário não selecionou nenhuma alternativa"

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 14: Console Debug (Desenvolvimento)

**Objetivo**: Verificar se os logs de debug aparecem corretamente.

**Passos**:
1. Abrir o Anki no modo de desenvolvimento (F12 ou DevTools)
2. Abrir a aba Console
3. Selecionar uma alternativa no front
4. Clicar em "Show Answer"

**Resultado Esperado**:
- ✅ No front, aparece: "🔵 [FRONT] Alternativa selecionada: C" (ou E)
- ✅ No front, aparece: "🔵 [FRONT] Salvo no localStorage: ..."
- ✅ No back, aparece: "🟢 [BACK] Script de comparação iniciado"
- ✅ No back, aparece: "🟢 [BACK] Gabarito normalizado: ..."
- ✅ No back, aparece: "🟢 [BACK] Resposta do usuário encontrada: ..."
- ✅ No back, aparece resultado final (acertou/errou)

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

### Teste 15: Múltiplos Cards Sequenciais

**Objetivo**: Verificar se o localStorage funciona corretamente com múltiplos cards.

**Passos**:
1. Criar 3 cards diferentes
2. Revisar o primeiro card, selecionar "Certo"
3. Revisar o segundo card, selecionar "Errado"
4. Revisar o terceiro card, selecionar "Certo"
5. Verificar se cada card mostra o feedback correto

**Resultado Esperado**:
- ✅ Cada card mantém sua própria seleção
- ✅ Feedback aparece corretamente para cada card
- ✅ Não há conflito entre cards diferentes

**Status**: ⬜ Passou / ⬜ Falhou

**Observações**:
```
[Anotar qualquer problema encontrado]
```

---

## 🐛 Problemas Conhecidos

Liste aqui qualquer problema encontrado durante os testes:

1. **Problema**: [Descrição]
   - **Ocorrência**: [Quando acontece]
   - **Severidade**: [Alta/Média/Baixa]
   - **Solução**: [Se encontrada]

---

## ✅ Resumo dos Testes

| Teste | Status | Observações |
|-------|--------|-------------|
| 1. Estrutura do Card (Front) | ⬜ | |
| 2. Seleção de Alternativa | ⬜ | |
| 3. Feedback Visual (Acerto) | ⬜ | |
| 4. Feedback Visual (Erro) | ⬜ | |
| 5. Normalização Gabarito (Texto) | ⬜ | |
| 6. Normalização Gabarito (Letras) | ⬜ | |
| 7. Normalização (Case-Insensitive) | ⬜ | |
| 8. Campo Imagem | ⬜ | |
| 9. Campo Anotações | ⬜ | |
| 10. Footer com Links | ⬜ | |
| 11. Hover nas Alternativas | ⬜ | |
| 12. Responsividade Mobile | ⬜ | |
| 13. Sem Seleção | ⬜ | |
| 14. Console Debug | ⬜ | |
| 15. Múltiplos Cards | ⬜ | |

**Total de Testes**: 15
**Testes Passados**: ___
**Testes Falhados**: ___

---

## 📝 Notas Finais

**Data dos Testes**: ___________

**Testador**: ___________

**Versão do Template**: 1.0

**Versão do Anki**: ___________

**Sistema Operacional**: ___________

---

**Observações Gerais**:
```
[Anotar observações gerais sobre os testes]
```

