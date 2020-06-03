const transactionUl = document.querySelector('[data-trasaction]');
const saldo = document.querySelector('[data-saldo]');
const receita = document.querySelector('[data-receita]');
const despesas = document.querySelector('[data-despesas]')

const listaReceitas = [
    {id:1, nome: 'Bolo de Morango', amount: -20},
    {id:2, nome: 'Sálario', amount: 300},
    {id:3, nome: 'Torta de Frango', amount: -10},
    {id:4, nome: 'Violão', amount: 150}
]

const addTransactionIntoDom = (trasaction) => {
    const operator = trasaction.amount < 0 ? '-' : '+'
    const CSSClass = trasaction.amount < 0 ? 'minus' : 'plus'
    const li = document.createElement('li');
    const amountWithout = Math.abs(trasaction.amount);
    li.classList.add(CSSClass)
    li.innerHTML = `${trasaction.nome} <span>${operator}R$ ${amountWithout}</span><button class="delete-btn">X</button>`;
    transactionUl.append(li)
}

const atualizarSaudo = () => {
    const saldoAmout = listaReceitas.map( item => item.amount).reduce((acumulator, valor) => acumulator + valor).toFixed(2);
    const receitaAmout = listaReceitas.map(item => item.amount).filter( item => item > 0).reduce((acumulator, valor) => acumulator + valor).toFixed(2);
    const despesasAmout = listaReceitas.map(item => item.amount).filter( item => item < 0).reduce((acumulator, valor) => acumulator + valor);
    saldo.textContent = `R$ ${saldoAmout}`;
    receita.textContent = `R$ ${receitaAmout}`;
    despesas.textContent = `R$ ${Math.abs(despesasAmout).toFixed(2)}`;
}


const init = () => {
    listaReceitas.forEach(addTransactionIntoDom);
    atualizarSaudo()
}

init()
