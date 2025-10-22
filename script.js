// script.js — handles UI, calculation, sharing
// total & average
const total = people.reduce((s,p)=>s + p.paid, 0);
const avg = total / people.length;


// Compute balances
people.forEach(p => p.balance = +(p.paid - avg).toFixed(2));


// Separate creditors and debtors
let creditors = people.filter(p=>p.balance > 0).map(p=>({...p}));
let debtors = people.filter(p=>p.balance < 0).map(p=>({...p}));


// Sort to make settlement deterministic
creditors.sort((a,b)=>b.balance - a.balance); // largest creditor first
debtors.sort((a,b)=>a.balance - b.balance); // largest debtor (most negative) first


const settlements = [];


let i = 0, j = 0;
while(i < debtors.length && j < creditors.length){
const debtor = debtors[i];
const creditor = creditors[j];
const pay = Math.min( Math.abs(debtor.balance), creditor.balance );
if(pay <= 0.004) { // negligible
if(Math.abs(debtor.balance) <= 0.004) i++; else j++;
continue;
}
settlements.push({from: debtor.name, to: creditor.name, amount: +(pay).toFixed(2)});
debtor.balance += pay; // closer to zero (since debtor.balance is negative)
creditor.balance -= pay;
if(Math.abs(debtor.balance) <= 0.004) i++;
if(creditor.balance <= 0.004) j++;
}


// render result
let html = '';
html += `<div class="summary">Total: ₹${total.toFixed(2)} • Each should pay: ₹${avg.toFixed(2)}</div>`;
if(settlements.length === 0){
html += '<div class="muted">All settled up — no transfers required.</div>';
} else {
html += '<div class="settlements">';
settlements.forEach(s => {
html += `<div class="result-row"><div>${escapeHtml(s.from)} → <strong>${escapeHtml(s.to)}</strong></div><div>₹${s.amount.toFixed(2)}</div></div>`;
});
html += '</div>';
}


resultEl.innerHTML = html;


// prepare share text
let shareLines = [];
shareLines.push('SplitMate results:');
shareLines.push(`Total: ₹${total.toFixed(2)}`);
shareLines.push(`Each: ₹${avg.toFixed(2)}`);
if(settlements.length === 0) shareLines.push('All settled up — no transfers required.');
else {
settlements.forEach(s => shareLines.push(`${s.from} wi