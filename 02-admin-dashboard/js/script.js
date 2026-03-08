const ctx = document.getElementById('salesChart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['Jan','Feb','Mar','Apr','May','Jun'],
datasets: [{
label: 'Sales',
data: [1200,1900,3000,2500,3200,4000],
borderColor: '#4f46e5',
backgroundColor: 'rgba(79,70,229,0.1)',
fill:true,
tension:0.4
}]
},
options: {
responsive:true,
plugins:{
legend:{display:false}
}
}
});
