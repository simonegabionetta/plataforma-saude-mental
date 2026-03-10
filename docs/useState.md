Anatomia do useState:


const [email, setEmail] = useState('')
//     👆       👆              👆
//   valor    função          valor
//   atual    para           inicial
//            atualizar

email → guarda o valor atual do campo
setEmail → função para atualizar o valor
useState('') → começa com string vazia


Como funciona na prática:
// Campo de email no JSX:
<Input
  value={email}                          // mostra o valor atual
  onChange={(e) => setEmail(e.target.value)}  // atualiza quando digita
/>
```

Quando a usuária digita `ana@email.com`:
```
1. onChange dispara
2. setEmail('ana@email.com') é chamado
3. email agora vale 'ana@email.com'
4. React atualiza a tela automaticamente


Exemplos práticos:
// Valor de um campo de formulário
const [email, setEmail] = useState('')

// Se um modal está aberto ou fechado
const [isOpen, setIsOpen] = useState(false)

// Se está carregando ou não
const [isLoading, setIsLoading] = useState(false)

// Mensagem de erro
const [error, setError] = useState('')

// Item selecionado numa lista
const [selectedPatient, setSelectedPatient] = useState(null)