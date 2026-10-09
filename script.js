// Example scores only. Real scores will come from our shared database later.
const climbers = [{name:'Alex',points:64},{name:'Jamie',points:47},{name:'Sam',points:32}];
const table = document.getElementById('leaderboard');
if (table) {
  const sorted = [...climbers].sort((a,b)=>b.points-a.points);
  sorted.forEach((climber,index)=>{
    const row = document.createElement('tr');
    [String(index+1),climber.name,String(climber.points)].forEach(value=>{
      const cell=document.createElement('td');cell.textContent=value;row.appendChild(cell);
    });
    table.appendChild(row);
  });
}
