var appId = "5774969bd8e251383ef40397b3f458ca";

var baseUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";

var curUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

var spURL = '&mode=json&units=metric&cnt=';

var dataW;

function getWD(city) {
    var requestURL = curUrl + city + '&appid=' + appId + '&units=metric';
    console.log(requestURL);

    $.ajax({
        url: requestURL,
        data: {
            format: 'json'
        },
        error: function (e) {
            $('#info').html('<p>An error was occurred.</p>');
        },
        dataType: 'jsonp',
        success: function(data){
            $('#info').html('');
            setDataDay(data);
        }
    })
}

function getWW(city) {
    url = baseUrl + city + spURL + '7' + '&appid=' + appId;
    console.log(url);

    $.ajax({
        url: url,
        data: {
            format: 'json'
        },
        error: function (e) {
            $('#info').html('<p>An error was occurred.</p>');

        },
        dataType: 'jsonp',
        success: function(data){
            $('#info').html('');
            setDataWeek(data);

            dataW = data;
        }
    })
}

function roundTemp(data) {
    var temp = Number(data);

    return Math.round(temp);
}

function setDataDay(data) {
    $('#city').html(data['name'] + ', ' + data['sys'].country + '<br>');
    var temp = Number(data['main'].temp);

    $('#dayData').html(Math.round(temp) + ' &#176;C');
    $('#descr').html(data['weather'][0].description + '<br><br>');

    var iconLink = '<img src="/WebWeather/img/' + data['weather'][0].icon +
        '.png" width="85" height="85" alt="Weather Image" title="Weather Image" />';

    // $('#icon').innerHTML = iconLink;
    $('#icon').html(iconLink);
    $('#pressure').html(data['main'].pressure + '  hpa');
    $('#humidity').html(data['main'].humidity + '  %');
    $('#wind').html(data['wind'].speed + '  meter/sec');
}

function setDataWeek(data){
    var nd;
    var d;

    for (var i = 0; i<7; i++){
        nd = Number(data['list'][i].dt);
        d = new Date(nd*1000);
        $('#' + i).html(d.toLocaleDateString('en-GB'));
    }

    for (var i = 0; i<7; i++){
        nd = roundTemp(data['list'][i].temp['day']);
        $('#d' + i).html(nd + '&#176;C');
    }

    for (var i = 0; i<7; i++){
        nd = roundTemp(data['list'][i].temp['night']);
        $('#n' + i).html(nd + '&#176;C');
    }

    for (var i = 0; i<7; i++){
        nd = roundTemp(data['list'][i].temp['max']);
        $('#max' + i).html(nd + '&#176;C');
    }

    for (var i = 0; i<7; i++){
        nd = roundTemp(data['list'][i].temp['min']);
        $('#min' + i).html(nd + '&#176;C');
    }

    for (var i = 0; i<7; i++){
        nd = data['list'][i].pressure;
        $('#p' + i).html(nd + '  hpa');
    }

    for (var i = 0; i<7; i++){
        nd = data['list'][i].humidity;
        $('#h' + i).html(nd + '  %');
    }
}

function loadData() {
    location = (document.getElementById("cityForSearch").value);
    console.log("in loaddata ");
    if(location == null){
        //  location = "Holon";
    }
    console.log(location);
    getWD(location);

    getWW(location);
}

getWD('Holon');
getWW('Holon');

$('body').on('click', '#btn', function () {
    var location = (document.getElementById("cityForSearch").value);
    getWD(location);
    getWW(location);

    var $this = $(this);
    $this.siblings().removeClass("selected");
    document.getElementById("chart").innerHTML = '';
});

$('body').on('click', '#day', function () {
    console.log('day is clicked');
    var $this = $(this);
    $this.siblings().removeClass("selected");

    $this.toggleClass("selected");
    if(data !=undefined){
        chartsFromJSONDay(dataW);
    }
});

$('body').on('click', '#night', function () {
    var $this = $(this);
    $this.siblings().removeClass("selected");

    $this.toggleClass("selected");

    if(data !=undefined){
        chartsFromJSONNight(dataW);
    }
    $this.siblings().removeClass("selected");
});

$('body').on('click', '#max', function () {
    var $this = $(this);
    $this.siblings().removeClass("selected");

    $this.toggleClass("selected");

    if(data !=undefined){
        chartsFromJSONMax(dataW);
    }
    $this.siblings().removeClass("selected");
});

$('body').on('click', '#min', function () {
    var $this = $(this);
    $this.siblings().removeClass("selected");

    $this.toggleClass("selected");

    if(data !=undefined){
        chartsFromJSONMax(dataW);
    }
    $this.siblings().removeClass("selected");
});