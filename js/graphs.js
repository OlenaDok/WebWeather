function chartsFromJSONDay(dataJSON){
    console.log('in charts json');

    console.log(dataJSON['list'][3-1].dt);
    var nd, x, i;
    var d;

    var dataArr = [];
    dataArr[0] = [];


    // alert(dataJSON.list[4].temp.day);

    dataArr[0][0] = 'day';
    dataArr[0][1] = 'temp';

    x = new Date( Number(dataJSON.list[0].dt)*1000);
    //  alert(x);
    dataArr[1] = [];
    dataArr[1][0] = x.toLocaleDateString('en-GB');
    dataArr[1][1] = dataJSON.list[0].temp.day;

    dataArr[2] = [];
    dataArr[2][0] = (new Date( Number(dataJSON.list[1].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[2][1] = dataJSON.list[1].temp.day;

    dataArr[3] = [];
    dataArr[3][0] = (new Date( Number(dataJSON.list[2].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[3][1] = dataJSON.list[2].temp.day;

    dataArr[4] = [];
    dataArr[4][0] = (new Date( Number(dataJSON.list[3].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[4][1] = dataJSON.list[3].temp.day;

    dataArr[5] = [];
    dataArr[5][0] = (new Date( Number(dataJSON.list[4].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[5][1] = dataJSON.list[4].temp.day;

    dataArr[6] = [];
    dataArr[6][0] = (new Date( Number(dataJSON.list[5].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[6][1] = dataJSON.list[5].temp.day;

    dataArr[7] = [];
    dataArr[7][0] = (new Date( Number(dataJSON.list[6].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[7][1] = dataJSON.list[6].temp.day;

    var data = google.visualization.arrayToDataTable(
        dataArr
    );
    console.log('data begin');
    console.log(data);
    console.log('data end');
    var options = {
        title: 'Daily Forecast (Day Temperature)',
        curveType: 'function',
        hAxis: {title: 'day',  titleTextStyle: {color: '#333'}},
        chartArea: {width:'75%',height:'60%'},
        pointSize: 6
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));

    chart.draw(data, options);

}


function chartsFromJSONNight(dataJSON){
    console.log('in charts json');
    var nd, x, i;
    var dataArr = [];
    dataArr[0] = [];


    dataArr[0][0] = 'day';
    dataArr[0][1] = 'temp';

    x = new Date( Number(dataJSON.list[0].dt)*1000);
    //  alert(x);
    dataArr[1] = [];
    dataArr[1][0] = x.toLocaleDateString('en-GB');
    dataArr[1][1] = dataJSON.list[0].temp.day;

    dataArr[2] = [];
    dataArr[2][0] = (new Date( Number(dataJSON.list[1].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[2][1] = dataJSON.list[1].temp.night;

    dataArr[3] = [];
    dataArr[3][0] = (new Date( Number(dataJSON.list[2].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[3][1] = dataJSON.list[2].temp.night;

    dataArr[4] = [];
    dataArr[4][0] = (new Date( Number(dataJSON.list[3].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[4][1] = dataJSON.list[3].temp.night;

    dataArr[5] = [];
    dataArr[5][0] = (new Date( Number(dataJSON.list[4].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[5][1] = dataJSON.list[4].temp.night;

    dataArr[6] = [];
    dataArr[6][0] = (new Date( Number(dataJSON.list[5].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[6][1] = dataJSON.list[5].temp.night;

    dataArr[7] = [];
    dataArr[7][0] = (new Date( Number(dataJSON.list[6].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[7][1] = dataJSON.list[6].temp.night;

    var data = google.visualization.arrayToDataTable(
        dataArr
    );
    console.log('data begin');
    console.log(data);
    console.log('data end');
    var options = {
        title: 'Daily Forecast (Night Temperature)',
        curveType: 'function',
        hAxis: {title: 'day',  titleTextStyle: {color: '#333'}},
        chartArea: {width:'75%',height:'60%'},
        pointSize: 6
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));

    chart.draw(data, options);

}


function chartsFromJSONMax(dataJSON){
    console.log('in charts json');
    var nd, x, i;
    var dataArr = [];
    dataArr[0] = [];


    dataArr[0][0] = 'day';
    dataArr[0][1] = 'temp';

    x = new Date( Number(dataJSON.list[0].dt)*1000);
    //  alert(x);
    dataArr[1] = [];
    dataArr[1][0] = x.toLocaleDateString('en-GB');
    dataArr[1][1] = dataJSON.list[0].temp.day;

    dataArr[2] = [];
    dataArr[2][0] = (new Date( Number(dataJSON.list[1].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[2][1] = dataJSON.list[1].temp.max;

    dataArr[3] = [];
    dataArr[3][0] = (new Date( Number(dataJSON.list[2].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[3][1] = dataJSON.list[2].temp.max;

    dataArr[4] = [];
    dataArr[4][0] = (new Date( Number(dataJSON.list[3].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[4][1] = dataJSON.list[3].temp.max;

    dataArr[5] = [];
    dataArr[5][0] = (new Date( Number(dataJSON.list[4].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[5][1] = dataJSON.list[4].temp.max;

    dataArr[6] = [];
    dataArr[6][0] = (new Date( Number(dataJSON.list[5].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[6][1] = dataJSON.list[5].temp.max;

    dataArr[7] = [];
    dataArr[7][0] = (new Date( Number(dataJSON.list[6].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[7][1] = dataJSON.list[6].temp.max;

    var data = google.visualization.arrayToDataTable(
        dataArr
    );
    console.log('data begin');
    console.log(data);
    console.log('data end');
    var options = {
        title: 'Daily Forecast (Max Temperature)',
        curveType: 'function',
        hAxis: {title: 'day',  titleTextStyle: {color: '#333'}},
        chartArea: {width:'75%',height:'60%'},
        pointSize: 6
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));

    chart.draw(data, options);

}


function chartsFromJSONMin(dataJSON){
    console.log('in charts json');
    var nd, x, i;
    var dataArr = [];
    dataArr[0] = [];


    dataArr[0][0] = 'day';
    dataArr[0][1] = 'temp';

    x = new Date( Number(dataJSON.list[0].dt)*1000);
    //  alert(x);
    dataArr[1] = [];
    dataArr[1][0] = x.toLocaleDateString('en-GB');
    dataArr[1][1] = dataJSON.list[0].temp.day;

    dataArr[2] = [];
    dataArr[2][0] = (new Date( Number(dataJSON.list[1].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[2][1] = dataJSON.list[1].temp.min;

    dataArr[3] = [];
    dataArr[3][0] = (new Date( Number(dataJSON.list[2].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[3][1] = dataJSON.list[2].temp.min;

    dataArr[4] = [];
    dataArr[4][0] = (new Date( Number(dataJSON.list[3].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[4][1] = dataJSON.list[3].temp.min;

    dataArr[5] = [];
    dataArr[5][0] = (new Date( Number(dataJSON.list[4].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[5][1] = dataJSON.list[4].temp.min;

    dataArr[6] = [];
    dataArr[6][0] = (new Date( Number(dataJSON.list[5].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[6][1] = dataJSON.list[5].temp.min;

    dataArr[7] = [];
    dataArr[7][0] = (new Date( Number(dataJSON.list[6].dt)*1000)).toLocaleDateString('en-GB');
    dataArr[7][1] = dataJSON.list[6].temp.min;

    var data = google.visualization.arrayToDataTable(
        dataArr
    );
    console.log('data begin');
    console.log(data);
    console.log('data end');
    var options = {
        title: 'Daily Forecast (Min Temperature)',
        curveType: 'function',
        hAxis: {title: 'day',  titleTextStyle: {color: '#333'}},
        chartArea: {width:'75%',height:'60%'},
        pointSize: 6
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));

    chart.draw(data, options);

}