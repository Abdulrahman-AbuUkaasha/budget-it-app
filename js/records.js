const income = localStorage.getItem('income')
const fetchIncome = JSON.parse(income)
console.log(fetchIncome);

fetchIncome.forEach((element, index)=>{
    const divNode = `
    
                <tr>
                    <td> ${element.description}</td>
                    <td> ${element.price}</td>
                    <td><button name="btn" id="${index}">view</button><td>
                </tr>
    `
    
    document.querySelector('.tblInc').insertAdjacentHTML('beforeend', divNode)

    totalInc = fetchIncome.reduce((a,c)=>{
        return a + parseInt(c.price)
    }, 0)
    console.log(totalInc);
})


const expenses = localStorage.getItem('expenses')
const fetchExpenses = JSON.parse(expenses)
fetchExpenses.forEach((element, index)=>{
    const divNode = `
    
                <tr>
                    <td> ${element.description}</td>
                    <td> ${element.price}</td>
                    <td><button name="btn" id="${index}">view</button><td>
                </tr>
    `
    console.log(expenses);
    document.querySelector('.tblExp').insertAdjacentHTML('beforeend', divNode)

    totalExp = fetchExpenses.reduce((a,c)=>{
        return a + parseInt(c.price)
    }, 0)
    console.log(totalExp);
})



let balance = totalInc - totalExp
document.querySelector('.balanceBoard').innerHTML = `$${balance}`

document.querySelector('.tblInc').addEventListener('click', (event)=>{
    const tagName = event.target.name
    const tagId = event.target.id
    if (tagName!== 'btn') return
    console.log(fetchIncome[tagId]);

    const buttNode = `
    <div class="butt">${fetchIncome[tagId].description}<span class="butt_2">${fetchIncome[tagId].price}</span></div>
`
document.querySelector('.butt').innerHTML = buttNode

    
})

document.querySelector('.tblExp').addEventListener('click', (event)=>{
    const tagName = event.target.name
    const tagId = event.target.id
    if (tagName!== 'btn') return
    console.log(fetchExpenses[tagId]);

    const butNode = `
    <div class="butt">${fetchExpenses[tagId].description}<span class="butt_2">${fetchExpenses[tagId].price}</span></div>
`

document.querySelector('.butt').innerHTML = butNode
})

