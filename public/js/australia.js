$(function(){
  $.ajax({
      url: "/Australia.json",
      dataType: "json",
      method: "get",
      success: function(data) {
         echarts.registerMap('Australia', data); 
         var myChart = echarts.init(document.getElementById('map')); 
         var option = { backgroundColor: 'white', title: { text: 'Scroll your mouse and click any state to see real time weather.', top: "5%", x: 'center', textStyle: { color: '#2980B9' } }, tooltip: { trigger: 'item', formatter: function (params) { return params.name + ' : ' + params.value[2]; } }, legend: { orient: 'vertical', y: 'bottom', x: 'right', data: ['pm2.5'], textStyle: { color: '#fff' } }, visualMap: { min: 0, max: 200, calculable: true, inRange: { color: ['#50a3ba', '#eac736', '#d94e5d'] }, textStyle: { color: '#fff' } }, geo: { map: 'Australia', roam: true, aspectScale: 1, nameMap: { 'South Australia': 'South Australia', 'New South Wales': 'New South Wales', 'Queensland': 'Queensland', 'Tasmania': 'Tasmania', 'Victoria': 'Victoria', 'Western Australia': 'Western Australia', 'Australian Capital Territory': 'Australia Capital Territory', 'Northern Territory': 'Northern Territory', 'Norfolk Island': 'Norfolk Island', 'Jervis Bay Territory': 'Jervis Bay Territory','Macquarie Island': 'Macquarie Island' }, label: { normal: { show: true, color: "black" }, emphasis: { show: true, color: "#fff" } }, itemStyle: { normal: { areaColor: '#64cdc5', borderColor: '#111' }, emphasis: { areaColor: '#2e669a' } } }, series: [] }; 
         myChart.setOption(option); 
         window.addEventListener("resize", function () { myChart.resize(); });

         myChart.on('click',function(params) {
              for(var i=0;i<data.features.length;i++){
                 if(data.features[i].properties.name == params.region.name){
                    window.location.href="/state_cities_weather?object_id1="+data.features[i].properties.OBJECTID_1;
                    //alert(data.features[i].properties.OBJECTID_1);
                 }
              }
         });
      },
      error: function(data) {
         alert("There has been an error");
      }
  });  

});


