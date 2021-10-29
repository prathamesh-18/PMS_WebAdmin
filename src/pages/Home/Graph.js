import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2';
function Graph({data}) {
  console.log(data);
  let today = new Date().toISOString().slice(0, 10)
  console.log(today)
  let day=Number.parseInt(today.slice(8,10))
  let year=Number.parseInt(today.slice(0,4))
  let month=Number.parseInt(today.slice(5,7))
  console.log(day,month,year);
  let enddate="";
  enddate=year.toString()+"-"+month.toString()+"-"+day.toString();
  let startdate="";
  let tempmonth="";
  let tempday="";
  if (month>1){
    let newmonth=month-1;
    if (newmonth.toString().length==1)
      tempmonth="0"+newmonth.toString();
    else
      tempmonth=newmonth.toString();
    if (day.toString().length==1)
      tempday="0"+day.toString();
    else
      tempday=day.toString();
    startdate=year.toString()+"-"+tempmonth+"-"+tempday;
  }else{
    let newmonth=12;
    let newyear=year-1;
    if (newmonth.toString().length==1)
      tempmonth="0"+newmonth.toString();
    else
      tempmonth=newmonth.toString();
    if (day.toString().length==1)
      tempday="0"+day.toString();
    else
      tempday=day.toString();
    startdate=newyear.toString()+"-"+tempmonth+"-"+tempday;

  }
  console.log("START DATE",startdate);
  console.log("END DATE",enddate);


  var getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
      let temporary=new Date(dt).toISOString().slice(0, 10);
      let td=temporary.slice(8,10)
      let ty=temporary.slice(0,4)
      let tm=temporary.slice(5,7)
      let final=td+"/"+tm+"/"+ty;
      arr.push(final);
    }
    return arr;
};
  var totalvisit=0
  var daylist = getDaysArray(new Date(startdate),new Date(enddate));
  console.log(daylist);
  var daycount=[]
  for (let i=0;i<daylist.length;i++){
    if (typeof(data.data[daylist[i]]) != "undefined"){
      daycount.push(data.data[daylist[i]].length)
      totalvisit+=data.data[daylist[i]].length
    }
    else{
      daycount.push(0)
    }
  }
  //console.log(data.data[x].length);
  console.log(daycount)


  const [chartData1,setChartData1]=useState({})
  const chart1=()=>{
    setChartData1({
      labels: daylist,
      datasets: [
        {
          label: 'Visitor Count',
          data: daycount,
          backgroundColor:[
              'rgba(75,192,192,0.6)'
          ],
          borderWidth: 2,
          fill: true
        }
      ]
    })
  }


  var total=0
  var profitlist=[]
  for(let i=0;i<daylist.length;i++){
    if (typeof(data.data[daylist[i]]) != "undefined"){
      var costv=0
      for (let j=0;j<data.data[daylist[i]].length;j++){
        costv+=data.data[daylist[i]][j].cost
      }
      total+=costv
      profitlist.push(costv)
    }
      else
      profitlist.push(0)
  }


  console.log(profitlist)


  useEffect(()=>{
    chart1()
  },[])

  const [chartData2,setChartData2]=useState({})
  const chart2=()=>{
    setChartData2({
      labels: daylist,
      datasets: [
        {
          label: 'Profit chart',
          data: profitlist,
          backgroundColor:[
              'rgba(208,182,255,0.6)'
          ],
          borderWidth: 2,
          fill: true
        }
      ]
    })
  }



  useEffect(()=>{
    chart2()
  },[])




  return (
    <div>
      <Line height={"65px"} data={chartData1} options = {{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maintainAspectRatio: false,
                }
            }]
        }
    }}
      />
<Line height={"65px"} data={chartData2} options = {{
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maintainAspectRatio: false,
                }
            }]
        }
    }}
      />


    <p style={{color:"black",textAlign:'center',fontFamily:'monospace',fontWeight:'bold',paddingTop:'30px',fontSize:'20px'}}>Total Revenue: {total} Rs. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Visits: {totalvisit}</p>

    </div>

  )


}

export default Graph
