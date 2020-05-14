var api_url = 'https://codeforces.com/api/';
var handle1 = '';
var handle2 = '';
var handle3 = '';
var handle4 = '';
var handle5 = '';

var conData1 = {}; // contest data for user 1
var conData2 = {}; // contest data for user 2
var conData3 = {}; // contest data for user 3
var conData4 = {}; // contest data for user 4
var conData5 = {}; // contest data for user 5

var subData1 = {}; // submission data for user 1
var subData2 = {}; // submission data for user 2
var subData3 = {}; // submission data for user 3
var subData4 = {}; // submission data for user 4
var subData5 = {}; // submission data for user 5

var colors = ['#DC143C', '#1E90FF', '#006400', '#8B008B', '#FF8C00'];

var sz = 2;

var req1, req2, req3, req4, req5;

var req_sub1, req_sub2, req_sub3, req_sub4, req_sub5;

google.charts.load('current', { packages: ['corechart'] });

$(document).ready(function() {
  $('#handleform').submit(function(e) {
    e.preventDefault();
    $('#handle1').blur();
    $('#handle2').blur();
    $('#handle3').blur();
    $('#handle4').blur();
    $('#handle5').blur();

    resetData();

    handle1 = $('#handle1')
      .val()
      .trim();
    handle2 = $('#handle2')
      .val()
      .trim();
    handle3 = $('#handle3')
      .val()
      .trim();
    handle4 = $('#handle4')
      .val()
      .trim();
    handle5 = $('#handle5')
      .val()
      .trim();

    if (!handle1) {
      err_message('handle1Div', 'Enter a name');
      $('#mainSpinner').removeClass('is-active');
      return;
    }
    if (!handle2) {
      err_message('handle2Div', 'Enter a name');
      $('#mainSpinner').removeClass('is-active');
      return;
    }

    console.log(handle1,handle2,handle3,handle4,handle5);

    if(handle3 == '')
      sz = 2;
    else if(handle4 == '')
      sz = 3;
    else if(handle5 == '')
      sz = 4;
    else
      sz = 5;

    if(sz == 2){


      console.log("Getting handle1 contest data");
      req1 = $.get(api_url + 'user.rating', { handle: handle1 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData1 = getContestStat(data);
        else {
          err_message('handle1Div', 'No contests');
          conData1 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle1Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle2 contest data");
      req2 = $.get(api_url + 'user.rating', { handle: handle2 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData2 = getContestStat(data);
        else {
          err_message('handle2Div', 'No contests');
          conData2 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle2Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });




    }

    else if(sz == 3){



      console.log("Getting handle1 contest data");
      req1 = $.get(api_url + 'user.rating', { handle: handle1 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData1 = getContestStat(data);
        else {
          err_message('handle1Div', 'No contests');
          conData1 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle1Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });






      console.log("Getting handle3 contest data");
      req3 = $.get(api_url + 'user.rating', { handle: handle3 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData3 = getContestStat(data);
        else {
          err_message('handle3Div', 'No contests');
          conData3 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle3Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });







      console.log("Getting handle2 contest data");
      req2 = $.get(api_url + 'user.rating', { handle: handle2 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData2 = getContestStat(data);
        else {
          err_message('handle2Div', 'No contests');
          conData2 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle2Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      




    }
    else if(sz == 4){



      console.log("Getting handle1 contest data");
      req1 = $.get(api_url + 'user.rating', { handle: handle1 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData1 = getContestStat(data);
        else {
          err_message('handle1Div', 'No contests');
          conData1 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle1Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle2 contest data");
      req2 = $.get(api_url + 'user.rating', { handle: handle2 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData2 = getContestStat(data);
        else {
          err_message('handle2Div', 'No contests');
          conData2 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle2Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle3 contest data");
      req3 = $.get(api_url + 'user.rating', { handle: handle3 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData3 = getContestStat(data);
        else {
          err_message('handle3Div', 'No contests');
          conData3 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle3Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle4 contest data");
      req4 = $.get(api_url + 'user.rating', { handle: handle4 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData4 = getContestStat(data);
        else {
          err_message('handle4Div', 'No contests');
          conData4 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle4Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });



    }
    else if(sz == 5){


      console.log("Getting handle1 contest data");
      req1 = $.get(api_url + 'user.rating', { handle: handle1 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData1 = getContestStat(data);
        else {
          err_message('handle1Div', 'No contests');
          conData1 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle1Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle2 contest data");
      req2 = $.get(api_url + 'user.rating', { handle: handle2 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData2 = getContestStat(data);
        else {
          err_message('handle2Div', 'No contests');
          conData2 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle2Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle3 contest data");
      req3 = $.get(api_url + 'user.rating', { handle: handle3 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData3 = getContestStat(data);
        else {
          err_message('handle3Div', 'No contests');
          conData3 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle3Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle4 contest data");
      req4 = $.get(api_url + 'user.rating', { handle: handle4 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData4 = getContestStat(data);
        else {
          err_message('handle4Div', 'No contests');
          conData4 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle4Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

      console.log("Getting handle5 contest data");
      req5 = $.get(api_url + 'user.rating', { handle: handle5 }, function(
        data,
        status
      ) {
        console.log(data);
        if (data.result.length > 0) conData5 = getContestStat(data);
        else {
          err_message('handle5Div', 'No contests');
          conData5 = null;
        }
      }).fail(function(xhr, status) {
        if (status != 'abort') {
          err_message('handle5Div', "Couldn't find user");
          $('#mainSpinner').removeClass('is-active');
        }
      });

    }

    

    if(sz === 2){
      $.when(req1, req2).then(function() {
        if (typeof google.visualization === 'undefined') {
          if (conData1 && conData2)
            google.charts.setOnLoadCallback(drawConCharts);
        } else {
          if (conData1 && conData2) drawConCharts();
        }

        console.log(handle1);
        req_sub1 = $.get(api_url + 'user.status', { handle: handle1 }, function(
          data,
          status
        ) {
          console.log(data);
          if (data.result.length > 0) subData1 = getSubData(data);
          else {
            err_message('handle1Div', 'No submissions');
            subData1 = null;
          }
        });
        
        console.log(handle2);
        req_sub2 = $.get(api_url + 'user.status', { handle: handle2 }, function(
          data,
          status
        ) {
          console.log(data);
          if (data.result.length > 0) subData2 = getSubData(data);
          else {
            err_message('handle2Div', 'No submissions');
            subData2 = null;
          }
        });


        setTimeout(function(){
          if (typeof google.visualization === 'undefined') {
            if (subData1 && subData2)
              google.charts.setOnLoadCallback(drawSubCharts);
          } else {
            if (subData1 && subData2) drawSubCharts();
          }
          $('.share-div').removeClass('hidden');
          $('#mainSpinner').removeClass('is-active');
          $('.sharethis').removeClass('hidden');
        }, 30000);




      });
    }
    else if(sz === 3){
      $.when(req1, req2, req3).then(function() {
        if (typeof google.visualization === 'undefined') {
          if (conData1 && conData2 && conData3)
            google.charts.setOnLoadCallback(drawConCharts);
        } else {
          if (conData1 && conData2 && conData3) drawConCharts();
        }
      });






        console.log(handle1);
        req_sub1 = $.get(api_url + 'user.status', { handle: handle1 }, function(
          data,
          status
        ) {
          console.log(data);
          if (data.result.length > 0) subData1 = getSubData(data);
          else {
            err_message('handle1Div', 'No submissions');
            subData1 = null;
          }
        });



        console.log(handle2);
        req_sub2 = $.get(api_url + 'user.status', { handle: handle2 }, function(
          data,
          status
        ) {
          console.log(data);
          if (data.result.length > 0) subData2 = getSubData(data);
          else {
            err_message('handle2Div', 'No submissions');
            subData2 = null;
          }
        });




        $.when(req_sub1, req_sub2).then(function() {
          console.log(handle3);
          req_sub3 = $.get(api_url + 'user.status', { handle: handle3 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData3 = getSubData(data);
            else {
              err_message('handle3Div', 'No submissions');
              subData3 = null;
            }
          });
        });


        setTimeout(function(){
          if (typeof google.visualization === 'undefined') {
            if (subData1 && subData2 && subData3)
              google.charts.setOnLoadCallback(drawSubCharts);
          } else {
            if (subData1 && subData2 && subData3) drawSubCharts();
          }
          $('.share-div').removeClass('hidden');
          $('#mainSpinner').removeClass('is-active');
          $('.sharethis').removeClass('hidden');
        }, 30000);


    }
    else if(sz === 4){
      $.when(req1, req2, req3, req4).then(function() {
        if (typeof google.visualization === 'undefined') {
          if (conData1 && conData2 && conData3 && conData4)
            google.charts.setOnLoadCallback(drawConCharts);
        } else {
          if (conData1 && conData2 && conData3 && conData4) drawConCharts();
        }







        console.log(handle1);
        req_sub1 = $.get(api_url + 'user.status', { handle: handle1 }, function(
          data,
          status
        ) {
          console.log(data);
          if (data.result.length > 0) subData1 = getSubData(data);
          else {
            err_message('handle1Div', 'No submissions');
            subData1 = null;
          }
        });
        
        $.when(req_sub1).then(function() {
          console.log(handle2);
          req_sub2 = $.get(api_url + 'user.status', { handle: handle2 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData2 = getSubData(data);
            else {
              err_message('handle2Div', 'No submissions');
              subData2 = null;
            }
          });
        });


        $.when(req_sub1, req_sub2).then(function() {
          console.log(handle3);
          req_sub3 = $.get(api_url + 'user.status', { handle: handle3 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData3 = getSubData(data);
            else {
              err_message('handle3Div', 'No submissions');
              subData3 = null;
            }
          });
        });

        $.when(req_sub1, req_sub2, req_sub3).then(function() {
          console.log(handle4);
          req_sub4 = $.get(api_url + 'user.status', { handle: handle4 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData4 = getSubData(data);
            else {
              err_message('handle4Div', 'No submissions');
              subData4 = null;
            }
          });
        });





        setTimeout(function(){
          if (typeof google.visualization === 'undefined') {
            if (subData1 && subData2 && subData3 && subData4)
              google.charts.setOnLoadCallback(drawSubCharts);
          } else {
            if (subData1 && subData2 && subData3 && subData4) drawSubCharts();
          }
          $('.share-div').removeClass('hidden');
          $('#mainSpinner').removeClass('is-active');
          $('.sharethis').removeClass('hidden');
        }, 30000);





      });
    }
    else if(sz === 5){
      $.when(req1, req2, req3, req4, req5).then(function() {
        if (typeof google.visualization === 'undefined') {
          if (conData1 && conData2 && conData3 && conData4 && conData5)
            google.charts.setOnLoadCallback(drawConCharts);
        } else {
          if (conData1 && conData2 && conData3 && conData4 && conData5) drawConCharts();
        }



         $.when(req1, req2, req3, req4, req5).then(function() {
          console.log(handle1);
          req_sub1 = $.get(api_url + 'user.status', { handle: handle1 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData1 = getSubData(data);
            else {
              err_message('handle1Div', 'No submissions');
              subData1 = null;
            }
          });
        });
        
        $.when(req_sub1).then(function() {
          console.log(handle2);
          req_sub2 = $.get(api_url + 'user.status', { handle: handle2 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData2 = getSubData(data);
            else {
              err_message('handle2Div', 'No submissions');
              subData2 = null;
            }
          });
        });

        $.when(req_sub2).then(function() {
          console.log(handle3);
          req_sub3 = $.get(api_url + 'user.status', { handle: handle3 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData3 = getSubData(data);
            else {
              err_message('handle3Div', 'No submissions');
              subData3 = null;
            }
          });
        });

        $.when(req_sub3).then(function() {
          console.log(handle4);
          req_sub4 = $.get(api_url + 'user.status', { handle: handle4 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData4 = getSubData(data);
            else {
              err_message('handle4Div', 'No submissions');
              subData4 = null;
            }
          });
        });

        $.when(req_sub4).then(function() {
          console.log(handle5);
          req_sub5 = $.get(api_url + 'user.status', { handle: handle5 }, function(
            data,
            status
          ) {
            console.log(data);
            if (data.result.length > 0) subData5 = getSubData(data);
            else {
              err_message('handle5Div', 'No submissions');
              subData5 = null;
            }
          });
        });


        setTimeout(function(){
          if (typeof google.visualization === 'undefined') {
            if (subData1 && subData2 && subData3 && subData4 && subData5)
              google.charts.setOnLoadCallback(drawSubCharts);
          } else {
            if (subData1 && subData2 && subData3 && subData4 && subData5) drawSubCharts();
          }
          $('.share-div').removeClass('hidden');
          $('#mainSpinner').removeClass('is-active');
          $('.sharethis').removeClass('hidden');
        }, 30000);




      });
    }

      
      
  });

  handle1 = getParameterByName('handle1');
  handle2 = getParameterByName('handle2');
  handle3 = getParameterByName('handle3');
  handle4 = getParameterByName('handle4');
  handle5 = getParameterByName('handle5');

  console.log(handle1,handle2,handle3,handle4,handle5);

  if (handle1 !== null && handle2 !== null) {
    $('#handle1').val(handle1);
    $('#handle2').val(handle2);
    $('#handle3').val(handle3);
    $('#handle4').val(handle4);
    $('#handle5').val(handle5);
    $('#handleform').submit();
  }
  $('#handleDiv').removeClass('hidden');
});

// draw contest related charts, those can be done when req1 and req2 is complete
function drawConCharts() {
  //Rating
  if(sz == 2){
    var rating = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2],
      ['Current Rating', conData1.rating, conData2.rating],
      ['Max Rating', conData1.maxRating, conData2.maxRating],
      ['Min Rating', conData1.minRating, conData2.minRating]
    ]);
  }

  else if(sz == 3){
    var rating = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3],
      ['Current Rating', conData1.rating, conData2.rating, conData3.rating],
      ['Max Rating', conData1.maxRating, conData2.maxRating, conData3.maxRating],
      ['Min Rating', conData1.minRating, conData2.minRating, conData3.minRating]
    ]);
  }

  else if(sz == 4){
    var rating = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4],
      ['Current Rating', conData1.rating, conData2.rating, conData3.rating, conData4.rating],
      ['Max Rating', conData1.maxRating, conData2.maxRating, conData3.maxRating, conData4.maxRating],
      ['Min Rating', conData1.minRating, conData2.minRating, conData3.minRating, conData4.minRating]
    ]);
  }

  else if(sz == 5){
    var rating = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4, handle5],
      ['Current Rating', conData1.rating, conData2.rating, conData3.rating, conData4.rating, conData5.rating],
      ['Max Rating', conData1.maxRating, conData2.maxRating, conData3.maxRating, conData4.maxRating, conData5.maxRating],
      ['Min Rating', conData1.minRating, conData2.minRating, conData3.minRating, conData4.minRating, conData5.minRating]
    ]);
  }

  var ratingOptions = $.extend({}, commonOptions, {
    legend: legend,
    colors: colors,
    vAxis: {
      minValue: 0
    }
  });
  var ratingChart = new google.visualization.ColumnChart(
    document.getElementById('ratings')
  );
  $('#ratings').removeClass('hidden');
  ratingChart.draw(rating, ratingOptions);

  console.log("inside drawConCharts");

  // Contests Count
  if(sz == 2){
    plotTwo('contestsCount', conData1.tot, conData2.tot, 'Contests');
  }
  
  else if(sz == 3){
    plotThree('contestsCount', conData1.tot, conData2.tot, conData3.tot, 'Contests');
  }

  else if(sz == 4){
    plotFour('contestsCount', conData1.tot, conData2.tot, conData3.tot, conData4.tot, 'Contests');
  }

  else if(sz == 5){
    plotFive('contestsCount', conData1.tot, conData2.tot, conData3.tot, conData4.tot, conData5.tot, 'Contests');
  }

  console.log(sz);

  // Max up and downs
  var upDowns;

  if(sz == 2){
    console.log(sz);
    upDowns = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2],
      ['Max Up', conData1.maxUp, conData2.maxUp],
      ['Max Down', conData1.maxDown, conData2.maxDown]
    ]);
  }

  else if(sz == 3){
    console.log(sz);
    upDowns = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3],
      ['Max Up', conData1.maxUp, conData2.maxUp, conData3.maxUp],
      ['Max Down', conData1.maxDown, conData2.maxDown, conData3.maxDown]
    ]);
  }

  else if(sz == 4){
    console.log(sz);
    upDowns = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4],
      ['Max Up', conData1.maxUp, conData2.maxUp, conData3.maxUp, conData4.maxUp],
      ['Max Down', conData1.maxDown, conData2.maxDown, conData3.maxDown, conData4.maxDown]
    ]);
  }

  else if(sz == 5){
    console.log(sz);
    upDowns = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4, handle5],
      ['Max Up', conData1.maxUp, conData2.maxUp, conData3.maxUp, conData4.maxUp, conData5.maxUp],
      ['Max Down', conData1.maxDown, conData2.maxDown, conData3.maxDown, conData4.maxDown, conData5.maxDown]
    ]);
  }

  var upDownsOptions = $.extend({}, commonOptions, {
    legend: legend,
    colors: colors
  });
  var upDownsChart = new google.visualization.ColumnChart(
    document.getElementById('upDowns')
  );
  $('#upDowns').removeClass('hidden');
  upDownsChart.draw(upDowns, upDownsOptions);

  if(sz == 5){
    //Worst Best
    $('#bestWorst').removeClass('hidden');
    $('#user1').html(handle1);
    $('#user2').html(handle2);
    $('#user3').html(handle3);
    $('#user4').html(handle4);
    $('#user5').html(handle5);
    $('#user1Best').html(conData1.best);
    $('#user2Best').html(conData2.best);
    $('#user3Best').html(conData3.best);
    $('#user4Best').html(conData4.best);
    $('#user5Best').html(conData5.best);
    $('#user1Worst').html(conData1.worst);
    $('#user2Worst').html(conData2.worst);
    $('#user3Worst').html(conData3.worst);
    $('#user4Worst').html(conData4.worst);
    $('#user5Worst').html(conData5.worst);
  }

  else if(sz == 4){
    //Worst Best
    $('#bestWorst').removeClass('hidden');
    $('#user1').html(handle1);
    $('#user2').html(handle2);
    $('#user3').html(handle3);
    $('#user4').html(handle4);
    $('#user1Best').html(conData1.best);
    $('#user2Best').html(conData2.best);
    $('#user3Best').html(conData3.best);
    $('#user4Best').html(conData4.best);
    $('#user1Worst').html(conData1.worst);
    $('#user2Worst').html(conData2.worst);
    $('#user3Worst').html(conData3.worst);
    $('#user4Worst').html(conData4.worst);
  }

  else if(sz == 3){
    //Worst Best
    $('#bestWorst').removeClass('hidden');
    $('#user1').html(handle1);
    $('#user2').html(handle2);
    $('#user3').html(handle3);
    $('#user1Best').html(conData1.best);
    $('#user2Best').html(conData2.best);
    $('#user3Best').html(conData3.best);
    $('#user1Worst').html(conData1.worst);
    $('#user2Worst').html(conData2.worst);
    $('#user3Worst').html(conData3.worst);
  }

  else if(sz == 2){
    //Worst Best
    $('#bestWorst').removeClass('hidden');
    $('#user1').html(handle1);
    $('#user2').html(handle2);
    $('#user1Best').html(conData1.best);
    $('#user2Best').html(conData2.best);
    $('#user1Worst').html(conData1.worst);
    $('#user2Worst').html(conData2.worst);
  }







  var timeline = new google.visualization.DataTable();

  if(sz == 5){
    console.log("inside timeline 5");
    timeline.addColumn('date', 'Date');
    timeline.addColumn('number', handle1);
    timeline.addColumn('number', handle2);
    timeline.addColumn('number', handle3);
    timeline.addColumn('number', handle4);
    timeline.addColumn('number', handle5);

    timeline.addRows(normalize(alignTimeline(alignTimeline(alignTimeline(alignTimeline(conData1.timeline, conData2.timeline, 1),
     conData3.timeline, 2), conData4.timeline, 3), conData5.timeline, 4), 5));
  }

  

  else if(sz == 4){
    console.log("inside timeline 4");
    timeline.addColumn('date', 'Date');
    timeline.addColumn('number', handle1);
    timeline.addColumn('number', handle2);
    timeline.addColumn('number', handle3);
    timeline.addColumn('number', handle4);

    timeline.addRows(normalize(alignTimeline(alignTimeline(alignTimeline(conData1.timeline, conData2.timeline, 1),
     conData3.timeline, 2), conData4.timeline, 3), 4));
  }

  

  else if(sz == 3){
    console.log("inside timeline 3");
    timeline.addColumn('date', 'Date');
    timeline.addColumn('number', handle1);
    timeline.addColumn('number', handle2);
    timeline.addColumn('number', handle3);

    timeline.addRows(normalize(alignTimeline(alignTimeline(conData1.timeline, conData2.timeline, 1), conData3.timeline, 2), 3));
  }
  

  else if(sz == 2){
    console.log("inside timeline 2");
    timeline.addColumn('date', 'Date');
    timeline.addColumn('number', handle1);
    timeline.addColumn('number', handle2);

    timeline.addRows(normalize(alignTimeline(conData1.timeline, conData2.timeline, 1), 2));
  }

  $('#timelineCon').removeClass('hidden');
  var timelineOptions = $.extend({}, commonOptions, scrollableOptions, {
    title: 'Timeline',
    legend: legend,
    width: Math.max(timeline.getNumberOfRows() * 7, $('#timelineCon').width()),
    height: 400,
    hAxis: {
      format: 'MMM yyyy'
    },
    vAxis: {
      viewWindowMode: 'pretty'
    },
    colors: colors,
    curveType: 'function'
  });
  var timelineChart = new google.visualization.LineChart(
    document.getElementById('timeline')
  );
  timelineChart.draw(timeline, timelineOptions);

  // Common Contests
  $('#commonContestsCon').removeClass('hidden');

  var con_url = 'https://codeforces.com/contest/';
  var commonContests;
  if(sz == 2){
    $('#user1Con').html(handle1);
    $('#user2Con').html(handle2);
    commonContests = getCommonContests(conData1.all, conData2.all, 1);
  }
  if(sz == 3){
    $('#user1Con').html(handle1);
    $('#user2Con').html(handle2);
    $('#user3Con').html(handle3);
    commonContests = getCommonContests(getCommonContests(conData1.all, conData2.all, 1), conData3.all, 2);
  }
  if(sz == 4){
    $('#user1Con').html(handle1);
    $('#user2Con').html(handle2);
    $('#user3Con').html(handle3);
    $('#user4Con').html(handle4);
    commonContests = getCommonContests(getCommonContests(getCommonContests(conData1.all, conData2.all, 1)
                                , conData3.all, 2), conData4.all, 3);
  }
  if(sz == 5){
    $('#user1Con').html(handle1);
    $('#user2Con').html(handle2);
    $('#user3Con').html(handle3);
    $('#user4Con').html(handle4);
    $('#user5Con').html(handle5);
    commonContests = getCommonContests(getCommonContests(getCommonContests(getCommonContests(conData1.all, conData2.all, 1)
                                , conData3.all, 2), conData4.all, 3), conData5.all, 4);
  }
  
  /*commonContests.sort(function(a, b) {
    return a.contestId - b.contestId;
  });*/
  console.log(commonContests);
  var commonContestsPresent = false;
  for (var con in commonContests) {
    if(sz == 2){
      if(commonContests[con][1] !== '0' && commonContests[con][2] !== '0'){
        commonContestsPresent = true;
        var handle1El =
          '<td><span class="handle1Color">' + commonContests[con][1] + '</span></td>';
        var handle2El =
          '<td><span class="handle2Color">' + commonContests[con][2] + '</span></td>';
        var best;
        if(commonContests[con][1] <= commonContests[con][2] )
          best = '<td><span class="handle1Color">' + handle1 + '</span></td>';
        else
          best = '<td><span class="handle2Color">' + handle2 + '</span></td>';
        $('#commonContestList').append(
          '<tr><td><a class="lnk" href="' +
            con_url +
            con +
            '" target="_blank">' +
            commonContests[con][0].replace(new RegExp('<br>', 'g'), ' - ') +
            '</a></td>' +
            best + 
            handle1El +
            handle2El +
            '</tr>'
        );
      }
    }
    else if(sz == 3){
      if(commonContests[con][1] !== '0' && commonContests[con][2] !== '0' && 
                                            commonContests[con][3] !== '0'){
        commonContestsPresent = true;
        var handle1El =
          '<td><span class="handle1Color">' + commonContests[con][1] + '</span></td>';
        var handle2El =
          '<td><span class="handle2Color">' + commonContests[con][2] + '</span></td>';
        var handle3El =
          '<td><span class="handle3Color">' + commonContests[con][3] + '</span></td>';
        var best;
        if((commonContests[con][1] <= commonContests[con][2]) && (commonContests[con][1] <= commonContests[con][3]))
          best = '<td><span class="handle1Color">' + handle1 + '</span></td>';
        else if((commonContests[con][2] <= commonContests[con][1]) && (commonContests[con][2] <= commonContests[con][3]))
          best = '<td><span class="handle2Color">' + handle2 + '</span></td>';
        else
          best = '<td><span class="handle3Color">' + handle3 + '</span></td>';
        $('#commonContestList').append(
          '<tr><td><a class="lnk" href="' +
            con_url +
            con +
            '" target="_blank">' +
            commonContests[con][0].replace(new RegExp('<br>', 'g'), ' - ') +
            '</a></td>' +
            best + 
            handle1El +
            handle2El +
            handle3El +
            '</tr>'
        );
      }
    }
    else if(sz == 4){
      if(commonContests[con][1] !== '0' && commonContests[con][2] !== '0' && 
          commonContests[con][3] !== '0' && commonContests[con][4] !== '0'){
        commonContestsPresent = true;
        var handle1El =
          '<td><span class="handle1Color">' + commonContests[con][1] + '</span></td>';
        var handle2El =
          '<td><span class="handle2Color">' + commonContests[con][2] + '</span></td>';
        var handle3El =
          '<td><span class="handle3Color">' + commonContests[con][3] + '</span></td>';
        var handle4El =
          '<td><span class="handle4Color">' + commonContests[con][4] + '</span></td>';
        var best;
        if((commonContests[con][1] <= commonContests[con][2]) && (commonContests[con][1] <= commonContests[con][3])
                                                            && (commonContests[con][1] <= commonContests[con][4]))
          best = '<td><span class="handle1Color">' + handle1 + '</span></td>';
        else if((commonContests[con][2] <= commonContests[con][1]) && (commonContests[con][2] <= commonContests[con][3])
                                                            && (commonContests[con][2] <= commonContests[con][4]))
          best = '<td><span class="handle2Color">' + handle2 + '</span></td>';
        else if((commonContests[con][3] <= commonContests[con][1]) && (commonContests[con][3] <= commonContests[con][2])
                                                            && (commonContests[con][3] <= commonContests[con][4]))
          best = '<td><span class="handle3Color">' + handle3 + '</span></td>';
        else
          best = '<td><span class="handle4Color">' + handle4 + '</span></td>';
        $('#commonContestList').append(
          '<tr><td><a class="lnk" href="' +
            con_url +
            con +
            '" target="_blank">' +
            commonContests[con][0].replace(new RegExp('<br>', 'g'), ' - ') +
            '</a></td>' +
            best + 
            handle1El +
            handle2El +
            handle3El +
            handle4El +
            '</tr>'
        );
      }
    }
    else if(sz == 5){
      if(commonContests[con][1] !== '0' && commonContests[con][2] !== '0' && 
          commonContests[con][3] !== '0' && commonContests[con][4] !== '0' &&
                                            commonContests[con][5] !== '0'){
        commonContestsPresent = true;
        var handle1El =
          '<td><span class="handle1Color">' + commonContests[con][1] + '</span></td>';
        var handle2El =
          '<td><span class="handle2Color">' + commonContests[con][2] + '</span></td>';
        var handle3El =
          '<td><span class="handle3Color">' + commonContests[con][3] + '</span></td>';
        var handle4El =
          '<td><span class="handle4Color">' + commonContests[con][4] + '</span></td>';
        var handle5El =
          '<td><span class="handle5Color">' + commonContests[con][5] + '</span></td>';

        var best;
        if((commonContests[con][1] <= commonContests[con][2]) && (commonContests[con][1] <= commonContests[con][3])
            && (commonContests[con][1] <= commonContests[con][4]) && (commonContests[con][1] <= commonContests[con][5]))
          best = '<td><span class="handle1Color">' + handle1 + '</span></td>';
        else if((commonContests[con][2] <= commonContests[con][1]) && (commonContests[con][2] <= commonContests[con][3])
            && (commonContests[con][2] <= commonContests[con][4]) && (commonContests[con][2] <= commonContests[con][5]))
          best = '<td><span class="handle2Color">' + handle2 + '</span></td>';
        else if((commonContests[con][3] <= commonContests[con][1]) && (commonContests[con][3] <= commonContests[con][2])
            && (commonContests[con][3] <= commonContests[con][4]) && (commonContests[con][3] <= commonContests[con][5]))
          best = '<td><span class="handle3Color">' + handle3 + '</span></td>';
        else if((commonContests[con][4] <= commonContests[con][1]) && (commonContests[con][4] <= commonContests[con][2])
            && (commonContests[con][4] <= commonContests[con][3]) && (commonContests[con][4] <= commonContests[con][5]))
          best = '<td><span class="handle4Color">' + handle4 + '</span></td>';
        else
          best = '<td><span class="handle5Color">' + handle5 + '</span></td>';
        $('#commonContestList').append(
          '<tr><td><a class="lnk" href="' +
            con_url +
            con +
            '" target="_blank">' +
            commonContests[con][0].replace(new RegExp('<br>', 'g'), ' - ') +
            '</a></td>' +
            best + 
            handle1El +
            handle2El +
            handle3El +
            handle4El +
            handle5El +
            '</tr>'
        );
      }
    }
  }
  if (commonContestsPresent === false) {
    $('#commonContestList').append('<tr><td>No common contests</td><tr>');
  }
}

// draw the charts that need all the submission data of two users
function drawSubCharts() {
  console.log("inside drawSubCharts");
  // Tried and solved

  var solvedTried;
  if(sz == 2){
    console.log(subData1,subData2);
    solvedTried = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2],
      ['Tried', parseInt(subData1.tried), parseInt(subData2.tried)],
      ['Solved', parseInt(subData1.solved), parseInt(subData2.solved)]
    ]);
  }
  else if(sz == 3){
    console.log(subData1,subData2,subData3);
    solvedTried = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3],
      ['Tried', parseInt(subData1.tried), parseInt(subData2.tried), parseInt(subData3.tried)],
      ['Solved', parseInt(subData1.solved), parseInt(subData2.solved), parseInt(subData3.solved)]
    ]);
  }
  else if(sz == 4){
    console.log(subData1,subData2,subData3,subData4);
    solvedTried = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4],
      ['Tried', parseInt(subData1.tried), parseInt(subData2.tried), parseInt(subData3.tried), parseInt(subData4.tried)],
      ['Solved', parseInt(subData1.solved), parseInt(subData2.solved), parseInt(subData3.solved), parseInt(subData4.solved)]
    ]);
  }
  else if(sz == 5){
    console.log(subData1,subData2,subData3,subData4,subData4);
    solvedTried = new google.visualization.arrayToDataTable([
      ['Handle', handle1, handle2, handle3, handle4, handle5],
      ['Tried', parseInt(subData1.tried), parseInt(subData2.tried), parseInt(subData3.tried), parseInt(subData4.tried), parseInt(subData5.tried)],
      ['Solved', parseInt(subData1.solved), parseInt(subData2.solved), parseInt(subData3.solved), parseInt(subData4.solved), parseInt(subData5.solved)]
    ]);
  }
  var solvedTriedOptions = $.extend({}, commonOptions, {
    legend: legend,
    colors: colors,
    vAxis: {
      minValue: 0
    }
  });
  var solvedTriedChart = new google.visualization.ColumnChart(
    document.getElementById('solvedTried')
  );
  $('#solvedTried').removeClass('hidden');
  solvedTriedChart.draw(solvedTried, solvedTriedOptions);
  if(sz == 2){
    plotTwo('unsolved', subData1.unsolved, subData2.unsolved, 'Unsolved');
    plotTwo(
      'averageSub',
      subData1.averageSub,
      subData2.averageSub,
      'Average Submission'
    );
    plotTwo('maxSub', subData1.maxSub, subData2.maxSub, 'Max submission');
    plotTwo('maxAc', subData1.maxAc, subData2.maxAc, 'Max AC');
    plotTwo(
      'oneSub',
      subData1.solved ? (subData1.solvedWithOneSub / subData1.solved) * 100 : 0,
      subData2.solved ? (subData2.solvedWithOneSub / subData2.solved) * 100 : 0,
      'Solved with one submission (%)'
    );
  }
  else if(sz == 3){
    plotThree('unsolved', subData1.unsolved, subData2.unsolved, subData3.unsolved, 'Unsolved');
    plotThree(
      'averageSub',
      subData1.averageSub,
      subData2.averageSub,
      subData3.averageSub,
      'Average Submission'
    );
    plotThree('maxSub', subData1.maxSub, subData2.maxSub, subData3.maxSub, 'Max submission');
    plotThree('maxAc', subData1.maxAc, subData2.maxAc, subData3.maxAc, 'Max AC');
    plotThree(
      'oneSub',
      subData1.solved ? (subData1.solvedWithOneSub / subData1.solved) * 100 : 0,
      subData2.solved ? (subData2.solvedWithOneSub / subData2.solved) * 100 : 0,
      subData3.solved ? (subData3.solvedWithOneSub / subData3.solved) * 100 : 0,
      'Solved with one submission (%)'
    );
  }
  else if(sz == 4){
    plotFour('unsolved', subData1.unsolved, subData2.unsolved, subData3.unsolved, subData4.unsolved, 'Unsolved');
    plotFour(
      'averageSub',
      subData1.averageSub,
      subData2.averageSub,
      subData3.averageSub,
      subData4.averageSub,
      'Average Submission'
    );
    plotFour('maxSub', subData1.maxSub, subData2.maxSub, subData3.maxSub, subData4.maxSub, 'Max submission');
    plotFour('maxAc', subData1.maxAc, subData2.maxAc, subData3.maxAc, subData4.maxAc, 'Max AC');
    plotFour(
      'oneSub',
      subData1.solved ? (subData1.solvedWithOneSub / subData1.solved) * 100 : 0,
      subData2.solved ? (subData2.solvedWithOneSub / subData2.solved) * 100 : 0,
      subData3.solved ? (subData3.solvedWithOneSub / subData3.solved) * 100 : 0,
      subData4.solved ? (subData4.solvedWithOneSub / subData4.solved) * 100 : 0,
      'Solved with one submission (%)'
    );
  }
  else if(sz == 5){
    plotFive('unsolved', subData1.unsolved, subData2.unsolved, subData3.unsolved, subData4.unsolved, subData5.unsolved, 'Unsolved');
    plotFive(
      'averageSub',
      subData1.averageSub,
      subData2.averageSub,
      subData3.averageSub,
      subData4.averageSub,
      subData5.averageSub,
      'Average Submission'
    );
    plotFive('maxSub', subData1.maxSub, subData2.maxSub, subData3.maxSub, subData4.maxSub, subData5.maxSub, 'Max submission');
    plotFive('maxAc', subData1.maxAc, subData2.maxAc, subData3.maxAc, subData4.maxAc, subData5.maxAc, 'Max AC');
    plotFive(
      'oneSub',
      subData1.solved ? (subData1.solvedWithOneSub / subData1.solved) * 100 : 0,
      subData2.solved ? (subData2.solvedWithOneSub / subData2.solved) * 100 : 0,
      subData3.solved ? (subData3.solvedWithOneSub / subData3.solved) * 100 : 0,
      subData4.solved ? (subData4.solvedWithOneSub / subData4.solved) * 100 : 0,
      subData5.solved ? (subData5.solvedWithOneSub / subData5.solved) * 100 : 0,
      'Solved with one submission (%)'
    );
  }
  

  // Common Solved
  var myFunct=function(e){return this.indexOf(e)>=0;};// var filtered=[1,2,3,4].filter(myFunct,[2,4]);
  $('#commonSolvedTable').removeClass('hidden');
  var commonSolved;
  if(sz == 2){
    //commonSolved = $(subData1.problems).filter(subData2.problems).length;
    let filtered1 = (subData1.problems).filter(myFunct,subData2.problems);
    commonSolved = filtered1.length;
  }
  else if(sz == 3){
    let filtered1 = (subData1.problems).filter(myFunct,subData2.problems);
    let filtered2 = filtered1.filter(myFunct, subData3.problems);
    commonSolved = filtered2.length;
  }
  else if(sz == 4){
    let filtered1 = (subData1.problems).filter(myFunct, subData2.problems);
    let filtered2 = filtered1.filter(myFunct, subData3.problems);
    let filtered3 = filtered2.filter(myFunct, subData4.problems);
    commonSolved = filtered3.length;
  }
  else if(sz == 5){
    let filtered1 = (subData1.problems).filter(myFunct, subData2.problems);
    let filtered2 = filtered1.filter(myFunct, subData3.problems);
    let filtered3 = filtered2.filter(myFunct, subData4.problems);
    let filtered4 = filtered3.filter(myFunct, subData5.problems);
    commonSolved = filtered4.length;
  }
  $('#commonSolved').html(commonSolved);

  // levels
  $('#levels').removeClass('hidden');
  var levels = new google.visualization.DataTable();
  levels.addColumn('string', 'Index');
  if(sz == 2){
    levels.addColumn('number', handle1);
    levels.addColumn('number', handle2);
    levels.addRows(alignLevels2(subData1.levels, subData2.levels));
  }
  else if(sz == 3){
    levels.addColumn('number', handle1);
    levels.addColumn('number', handle2);
    levels.addColumn('number', handle3);
    levels.addRows(alignLevels3(subData1.levels, subData2.levels, subData3.levels));
  }
  else if(sz == 4){
    levels.addColumn('number', handle1);
    levels.addColumn('number', handle2);
    levels.addColumn('number', handle3);
    levels.addColumn('number', handle4);
    levels.addRows(alignLevels4(subData1.levels, subData2.levels, subData3.levels, subData4.levels));
  }
  else if(sz == 5){
    levels.addColumn('number', handle1);
    levels.addColumn('number', handle2);
    levels.addColumn('number', handle3);
    levels.addColumn('number', handle4);
    levels.addColumn('number', handle5);
    levels.addRows(alignLevels5(subData1.levels, subData2.levels, subData3.levels, subData4.levels, subData5.levels));
  }
  var levelsView = new google.visualization.DataView(levels);
  if(sz == 2){
    levelsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 3){
    levelsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 4){
    levelsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 5){
    levelsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      },
      5,
      {
        calc: 'stringify',
        sourceColumn: 5,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }

  var levelsOptions = $.extend({}, scrollableOptions, commonOptions, {
    width: Math.max($('#levels').width(), levels.getNumberOfRows() * 150),
    height: 400,
    title: 'Levels',
    legend: legend,
    colors: colors,
    bar: { groupWidth: '65%' },
    annotations: annotation
  });
  var levelsChart = new google.visualization.ColumnChart(
    document.getElementById('levels')
  );
  levelsChart.draw(levelsView, levelsOptions);


  /* Problem Ratings */
  $('#pRatings').removeClass('hidden');
  var pRatings = new google.visualization.DataTable();
  pRatings.addColumn('string', 'Rating');
  if(sz == 2){
    pRatings.addColumn('number', handle1);
    pRatings.addColumn('number', handle2);
    pRatings.addRows(alignPRatings2(subData1.pRatings, subData2.pRatings));
  }
  else if(sz == 3){
    pRatings.addColumn('number', handle1);
    pRatings.addColumn('number', handle2);
    pRatings.addColumn('number', handle3);
    pRatings.addRows(alignPRatings3(subData1.pRatings, subData2.pRatings, subData3.pRatings));
  }
  else if(sz == 4){
    pRatings.addColumn('number', handle1);
    pRatings.addColumn('number', handle2);
    pRatings.addColumn('number', handle3);
    pRatings.addColumn('number', handle4);
    pRatings.addRows(alignPRatings4(subData1.pRatings, subData2.pRatings, subData3.pRatings, subData4.pRatings));
  }
  else if(sz == 5){
    pRatings.addColumn('number', handle1);
    pRatings.addColumn('number', handle2);
    pRatings.addColumn('number', handle3);
    pRatings.addColumn('number', handle4);
    pRatings.addColumn('number', handle5);
    pRatings.addRows(alignPRatings5(subData1.pRatings, subData2.pRatings, subData3.pRatings, subData4.pRatings, subData5.pRatings));
  }
  var pRatingsView = new google.visualization.DataView(pRatings);
  if(sz == 2){
    pRatingsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 3){
    pRatingsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 4){
    pRatingsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 5){
    pRatingsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      },
      5,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }

  var pRatingsOptions = $.extend({}, scrollableOptions, commonOptions, {
    width: Math.max($('#pRatings').width(), pRatings.getNumberOfRows() * 150),
    height: 400,
    title: 'Problem Ratings',
    legend: legend,
    colors: colors,
    bar: { groupWidth: '65%' },
    annotations: annotation
  });
  var pRatingsChart = new google.visualization.ColumnChart(
    document.getElementById('pRatings')
  );
  pRatingsChart.draw(pRatingsView, pRatingsOptions);

  //Tags chart
  $('#tags').removeClass('hidden');
  var tags = new google.visualization.DataTable();
  tags.addColumn('string', 'Index');
  if(sz == 2){
    tags.addColumn('number', handle1);
    tags.addColumn('number', handle2);
    tags.addRows(alignTags2(subData1.tags, subData2.tags));
  }
  else if(sz == 3){
    tags.addColumn('number', handle1);
    tags.addColumn('number', handle2);
    tags.addColumn('number', handle3);
    tags.addRows(alignTags3(subData1.tags, subData2.tags, subData3.tags));
  }
  else if(sz == 4){
    tags.addColumn('number', handle1);
    tags.addColumn('number', handle2);
    tags.addColumn('number', handle3);
    tags.addColumn('number', handle4);
    tags.addRows(alignTags4(subData1.tags, subData2.tags, subData3.tags, subData4.tags));
  }
  else if(sz == 5){
    tags.addColumn('number', handle1);
    tags.addColumn('number', handle2);
    tags.addColumn('number', handle3);
    tags.addColumn('number', handle4);
    tags.addColumn('number', handle5);
    tags.addRows(alignTags5(subData1.tags, subData2.tags, subData3.tags, subData4.tags, subData5.tags));
  }
  var tagsView = new google.visualization.DataView(tags);
  if(sz == 2){
    tagsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 3){
    tagsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 4){
    tagsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  else if(sz == 5){
    tagsView.setColumns([
      0,
      1,
      {
        calc: 'stringify',
        sourceColumn: 1,
        type: 'string',
        role: 'annotation'
      },
      2,
      {
        calc: 'stringify',
        sourceColumn: 2,
        type: 'string',
        role: 'annotation'
      },
      3,
      {
        calc: 'stringify',
        sourceColumn: 3,
        type: 'string',
        role: 'annotation'
      },
      4,
      {
        calc: 'stringify',
        sourceColumn: 4,
        type: 'string',
        role: 'annotation'
      },
      5,
      {
        calc: 'stringify',
        sourceColumn: 5,
        type: 'string',
        role: 'annotation'
      }
    ]);
  }
  var tagsOptions = $.extend({}, scrollableOptions, commonOptions, {
    width: Math.max($('#tags').width(), tags.getNumberOfRows() * 150),
    height: 400,
    title: 'Tags',
    legend: legend,
    colors: colors,
    bar: { groupWidth: '65%' },
    annotations: annotation,
    chartArea: { top: 100, bottom: 120, left: 100, right: 75 }
  });
  var tagsChart = new google.visualization.ColumnChart(
    document.getElementById('tags')
  );
  tagsChart.draw(tagsView, tagsOptions);
}

// when we need to compare two numbers, we can use this function
// it takes the two numbers, a title and a div. then draws a column chart in that div comparing the numbers
function plotTwo(div, n1, n2, title) {
  if (!(n1 || n2)) return;
  var table = new google.visualization.arrayToDataTable([
    ['Handle', title, { role: 'style' }],
    [handle1, n1, colors[0]],
    [handle2, n2, colors[1]]
  ]);
  var options = $.extend({}, commonOptions, {
    title: title,
    vAxis: {
      minValue: 0
    },
    legend: 'none'
  });
  var chart = new google.visualization.ColumnChart(
    document.getElementById(div)
  );
  $('#' + div).removeClass('hidden');
  chart.draw(table, options);
}

function plotThree(div, n1, n2, n3, title) {
  if (!(n1 || n2 || n3)) return;
  var table = new google.visualization.arrayToDataTable([
    ['Handle', title, { role: 'style' }],
    [handle1, n1, colors[0]],
    [handle2, n2, colors[1]],
    [handle3, n3, colors[2]]
  ]);
  var options = $.extend({}, commonOptions, {
    title: title,
    vAxis: {
      minValue: 0
    },
    legend: 'none'
  });
  var chart = new google.visualization.ColumnChart(
    document.getElementById(div)
  );
  $('#' + div).removeClass('hidden');
  chart.draw(table, options);
}

function plotFour(div, n1, n2, n3, n4, title) {
  if (!(n1 || n2 || n3 || n4)) return;
  var table = new google.visualization.arrayToDataTable([
    ['Handle', title, { role: 'style' }],
    [handle1, n1, colors[0]],
    [handle2, n2, colors[1]],
    [handle3, n3, colors[2]],
    [handle4, n4, colors[3]]
  ]);
  var options = $.extend({}, commonOptions, {
    title: title,
    vAxis: {
      minValue: 0
    },
    legend: 'none'
  });
  var chart = new google.visualization.ColumnChart(
    document.getElementById(div)
  );
  $('#' + div).removeClass('hidden');
  chart.draw(table, options);
}

function plotFive(div, n1, n2, n3, n4, n5, title) {
  if (!(n1 || n2 || n3 || n4 || n5)) return;
  var table = new google.visualization.arrayToDataTable([
    ['Handle', title, { role: 'style' }],
    [handle1, n1, colors[0]],
    [handle2, n2, colors[1]],
    [handle3, n3, colors[2]],
    [handle4, n4, colors[3]],
    [handle5, n5, colors[4]]
  ]);
  var options = $.extend({}, commonOptions, {
    title: title,
    vAxis: {
      minValue: 0
    },
    legend: 'none'
  });
  var chart = new google.visualization.ColumnChart(
    document.getElementById(div)
  );
  $('#' + div).removeClass('hidden');
  chart.draw(table, options);
}

function resetData() {
  $('#mainSpinner').addClass('is-active');
  $('.to-clear').empty();
  $('.to-hide').addClass('hidden');

  if (req1) req1.abort();
  if (req2) req2.abort();
  if (req3) req3.abort();
  if (req4) req4.abort();
}

function get_url(p) {
  var con = p.split('-')[0];
  var index = p.split('-')[1];

  var url = '';
  if (con.length < 4)
    url = 'https://codeforces.com/contest/' + con + '/problem/' + index;
  else
    url = 'https://codeforces.com/problemset/gymProblem/' + con + '/' + index;

  return url;
}

//Copied from stackoverflow :D
function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// function fbShareResult() {
//   var url;
//   if (handle1 && handle2)
//     url = window.location.href + '?handle1=' + handle1 + '&handle2=' + handle2;
//   else url = window.location.href;
//   window.open(
//     'https://www.facebook.com/sharer/sharer.php?u=' + escape(url),
//     '',
//     'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'
//   );
// }
