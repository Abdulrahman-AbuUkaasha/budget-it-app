let savedIncome = JSON.parse(localStorage.getItem('income')) || []
let savedEspenses = JSON.parse(localStorage.getItem('expenses')) || []
const incomeList = [...savedIncome]
const expensesList = [...savedEspenses]
let records = []
let totalInc = 0
let totalExp = 0
document.querySelector('.btn_e').addEventListener('click', ()=>{
    //alert('hello')
    const operation = document.querySelector('.selection').value
    const nameVal = document.querySelector('#description').value
    const costVal = document.querySelector('#val').value

    console.log(nameVal,operation,costVal);
    
    if (nameVal == '' || costVal == '') {
        return
    }

    

    const divNode = `
    
                <tr>
                    <td> ${nameVal}</td>
                    <td> ${costVal}</td>
                </tr>
    `
    if (operation == 'addition') {
        // alert('addition')
        document.querySelector('.tblInc').insertAdjacentHTML('beforeend', divNode)
        incomeList.push({
            description:nameVal,
            price:costVal
        })
        console.log(incomeList);

        localStorage.setItem('income', JSON.stringify(incomeList))

         totalInc = incomeList.reduce((a,c)=>{
            return a + parseInt(c.price)
        }, 0)
        console.log(totalInc);
        document.querySelector('.totalIncVal').innerHTML = `+$${totalInc}`
    } else {
        // alert('subtraction')
        document.querySelector('.tblExp').insertAdjacentHTML('beforeend', divNode)
        expensesList.push({
            description:nameVal,
            price:costVal
        })
        console.log(expensesList);

        localStorage.setItem('expenses', JSON.stringify(expensesList))

         totalExp = expensesList.reduce((a,c)=>{
            return a + parseInt(c.price)
        }, 0)
        console.log(totalExp);
        document.querySelector('.totalExpVal').innerHTML = `-$${totalExp}`
    }

    let balance = totalInc - totalExp
    document.querySelector('.balanceBoard').innerHTML = `$${balance}`
})