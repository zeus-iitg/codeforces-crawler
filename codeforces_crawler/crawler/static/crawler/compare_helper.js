var MAX_TIME_DIFF = 7200; // max time between contests

//common Options for charts
var legend = {
  position: 'top',
  alignment: 'end'
};

var commonOptions = {
  height: 300,
  titleTextStyle: {
    fontSize: 18,
    color: '#393939',
    bold: false
  },
  fontName: 'Roboto',
  bar: { groupWidth: '80%' },
  legend: {
    position: 'top',
    alignment: 'end'
  },
  animation: {
    duration: 4000,
    easing: 'in',
    startup: true
  },
  tooltip: {
    textStyle: { fontSize: 14 }
  }
};

var scrollableOptions = {
  chartArea: { top: 100, bottom: 80, left: 100, right: 75 },
  vAxis: {
    textStyle: { fontSize: 14 }
  },
  hAxis: {
    textStyle: { fontSize: 14 }
  }
};

var annotation = {
  alwaysOutside: true,
  textStyle: {
    fontSize: 10
  }
};

// helper functions, partially copied from single.js

function getSubData(data) {
  var ret = {}; // the object to return
  ret.levels = {};
  ret.pRatings = {};
  ret.tags = {};
  var problems = {};

  // parsing all the submissions and saving useful data
  for (var i = data.result.length - 1; i >= 0; i--) {
    var sub = data.result[i];
    var problemId = sub.problem.contestId + '-' + sub.problem.index;
    if (problems[problemId] === undefined) {
      problems[problemId] = {
        subs: 1,
        solved: 0
      };
    } else {
      if (problems[problemId].solved === 0) problems[problemId].subs++;
    }

    if (sub.verdict == 'OK') {
      problems[problemId].solved++;
    }

    if (problems[problemId].solved === 1 && sub.verdict == 'OK') {
      sub.problem.tags.forEach(function(t) {
        if (ret.tags[t] === undefined) ret.tags[t] = 1;
        else ret.tags[t]++;
      });

      if (ret.levels[sub.problem.index[0]] === undefined)
        ret.levels[sub.problem.index[0]] = 1;
      else ret.levels[sub.problem.index[0]]++;

      if (sub.problem.rating) {
        ret.pRatings[sub.problem.rating] = ret.pRatings[sub.problem.rating] + 1 || 1;
      }
    }
  }
  ret.totalSub = data.result.length;
  ret.tried = 0;
  ret.solved = 0;
  ret.maxSub = 0;
  ret.maxAc = 0;
  ret.unsolved = 0;
  ret.solvedWithOneSub = 0;
  for (var p in problems) {
    ret.tried++;
    if (problems[p].solved > 0) ret.solved++;
    if (problems[p].solved === 0) ret.unsolved++;

    ret.maxSub = Math.max(ret.maxSub, problems[p].subs);
    ret.maxAc = Math.max(ret.maxAc, problems[p].solved);

    if (problems[p].solved == problems[p].subs) ret.solvedWithOneSub++;
  }
  ret.averageSub = ret.totalSub / ret.solved;
  ret.problems = Object.keys(problems);

  return ret;
}

// align levels of solved problems for two users
// if one user have solved no problems of a level and other user have,
// we need to put 0 for the first user and the level
function alignLevels2(lev1, lev2) {
  var ret = [];
  for (var l in lev1) {
    if (lev2[l] === undefined) ret.push([l, lev1[l], 0]);
    else {
      ret.push([l, lev1[l], lev2[l]]);
      delete lev2[l];
    }
  }
  for (l in lev2) {
    ret.push([l, 0, lev2[l]]);
  }
  ret.sort(function(a, b) {
    if (a[0] < b[0]) return -1;
    return 1;
  });
  return ret;
}
function alignLevels3(lev1, lev2, lev3) {
  var ret = alignLevels2(lev1, lev2);
  console.log(ret);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev3[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], lev3[ret[i][0]]]);;
      delete lev3[ret[i][0]];
    }
    i++;
  }
  for (l in lev3) {
    res.push([l, 0, 0, lev3[l]]);
  }
  res.sort(function(a, b) {
    if (a[0] < b[0]) return -1;
    return 1;
  });
  console.log(res);
  return res;
}
function alignLevels4(lev1, lev2, lev3, lev4) {
  var ret = alignLevels3(lev1, lev2, lev3);
  console.log(ret);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev4[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], lev4[ret[i][0]]]);;
      delete lev4[ret[i][0]];
    }
    i++;
  }
  for (l in lev4) {
    res.push([l, 0, 0, 0, lev4[l]]);
  }
  res.sort(function(a, b) {
    if (a[0] < b[0]) return -1;
    return 1;
  });
  console.log(res);
  return res;
}
function alignLevels5(lev1, lev2, lev3, lev4, lev5) {
  var ret = alignLevels4(lev1, lev2, lev3, lev4);
  console.log(ret);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev5[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], lev5[ret[i][0]]]);;
      delete lev5[ret[i][0]];
    }
    i++;
  }
  for (l in lev5) {
    res.push([l, 0, 0, 0, 0, lev5[l]]);
  }
  res.sort(function(a, b) {
    if (a[0] < b[0]) return -1;
    return 1;
  });
  console.log(res);
  return res;
}

function alignPRatings2(lev1, lev2) {
  var ret = [];
  for (var l in lev1) {
    if (lev2[l] === undefined) ret.push([l, lev1[l], 0]);
    else {
      ret.push([l, lev1[l], lev2[l]]);
      delete lev2[l];
    }
  }
  for (l in lev2) {
    ret.push([l, 0, lev2[l]]);
  }
  ret.sort(function(a, b) {
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
    return 1;
  });
  return ret;
}
function alignPRatings3(lev1, lev2, lev3) {
  var ret = alignPRatings2(lev1, lev2);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev3[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], lev3[ret[i][0]]]);
      delete lev3[ret[i][0]];
    }
    i++;
  }
  for (l in lev3) {
    res.push([l, 0, 0, lev3[l]]);
  }
  res.sort(function(a, b) {
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
    return 1;
  });
  return res;
}
function alignPRatings4(lev1, lev2, lev3, lev4) {
  var ret = alignPRatings3(lev1, lev2, lev3);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev4[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], lev4[ret[i][0]]]);
      delete lev4[ret[i][0]];
    }
    i++;
  }
  for (l in lev4) {
    res.push([l, 0, 0, 0, lev4[l]]);
  }
  res.sort(function(a, b) {
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
    return 1;
  });
  return res;
}
function alignPRatings5(lev1, lev2, lev3, lev4, lev5) {
  var ret = alignPRatings4(lev1, lev2, lev3, lev4);
  var res = [];
  var i = 0;
  while(i < ret.length) {
    if (lev5[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], lev5[ret[i][0]]]);
      delete lev5[ret[i][0]];
    }
    i++;
  }
  for (l in lev5) {
    res.push([l, 0, 0, 0, 0, lev5[l]]);
  }
  res.sort(function(a, b) {
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
    return 1;
  });
  return res;
}


// aligns tags
function alignTags2(tags1, tags2) {
  var ret = [];
  for (var t in tags1) {
    if (tags2[t] === undefined) ret.push([t, tags1[t], 0]);
    else {
      ret.push([t, tags1[t], tags2[t]]);
      delete tags2[t];
    }
  }
  for (t in tags2) {
    ret.push([t, 0, tags2[t]]);
  }
  ret.sort(function(a, b) {
    if (a[1] + a[2] < b[1] + b[2]) return 1;
    return -1;
  });
  return ret;
}
function alignTags3(tags1, tags2, tags3) {
  var ret = alignTags2(tags1, tags2);
  var res = [];
  var i = 0;
  while (i < ret.length) {
    if (tags3[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], tags3[ret[i][0]]]);
      delete tags3[ret[i][0]];
    }
    i++;
  }
  for (t in tags3) {
    res.push([t, 0, 0, tags3[t]]);
  }
  res.sort(function(a, b) {
    if (a[1] + a[2] + a[3] < b[1] + b[2] + b[3]) return 1;
    return -1;
  });
  return res;
}
function alignTags4(tags1, tags2, tags3, tags4) {
  var ret = alignTags3(tags1, tags2, tags3);
  var res = [];
  var i = 0;
  while (i < ret.length) {
    if (tags4[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], tags4[ret[i][0]]]);
      delete tags4[ret[i][0]];
    }
    i++;
  }
  for (t in tags4) {
    res.push([t, 0, 0, 0, tags4[t]]);
  }
  res.sort(function(a, b) {
    if (a[1] + a[2] + a[3] + a[4] < b[1] + b[2] + b[3] + b[4]) return 1;
    return -1;
  });
  return res;
}
function alignTags5(tags1, tags2, tags3, tags4, tags5) {
  var ret = alignTags4(tags1, tags2, tags3, tags4);
  var res = [];
  var i = 0;
  while (i < ret.length) {
    if (tags5[ret[i][0]] === undefined) res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], 0]);
    else {
      res.push([ret[i][0], ret[i][1], ret[i][2], ret[i][3], ret[i][4], tags5[ret[i][0]]]);
      delete tags5[ret[i][0]];
    }
    i++;
  }
  for (t in tags5) {
    res.push([t, 0, 0, 0, 0, tags5[t]]);
  }
  res.sort(function(a, b) {
    if (a[1] + a[2] + a[3] + a[4] +a[5] < b[1] + b[2] + b[3] + b[4] + b[5]) return 1;
    return -1;
  });
  return res;
}

// returns common contests of two users
function getCommonContests(lst1, lst2) {
  //var ret = [];
  //console.log(lst1,lst2,typeof(lst1));
  for (var con in lst1) {
    if (lst2[con] !== undefined) {
      //if(num == 1)
        lst1[con].push(lst2[con][1])
        /*ret.push({
          contestId: con,
          // there might be <br> tag in problem names, we need re replace them
          contestName: lst1[con][0].replace(new RegExp('<br>', 'g'), ' - '),
          handle1: lst1[con][1],
          handle2: lst2[con][1]
        });*/
      /*else if(num == 2)
        ret.push({
          contestId: con,
          // there might be <br> tag in problem names, we need re replace them
          contestName: lst1[con][0].replace(new RegExp('<br>', 'g'), ' - '),
          handle1: lst1[con][1],
          handle2: lst[con][2],
          handle3: lst2[con][1]
        });
      else if(num == 3)
        ret.push({
          contestId: con,
          // there might be <br> tag in problem names, we need re replace them
          contestName: lst1[con][0].replace(new RegExp('<br>', 'g'), ' - '),
          handle1: lst1[con][1],
          handle2: lst[con][2],
          handle3: lst[con][3],
          handle4: lst2[con][1]
        });
      else if(num == 3)
        ret.push({
          contestId: con,
          // there might be <br> tag in problem names, we need re replace them
          contestName: lst1[con][0].replace(new RegExp('<br>', 'g'), ' - '),
          handle1: lst1[con][1],
          handle2: lst[con][2],
          handle3: lst[con][3],
          handle4: lst[con][4],
          handle5: lst2[con][1]
        });
        */
    }
    else{
      lst1[con].push('0');
    }
  }
  return lst1;
}

// parse all the contests and save useful data
function getContestStat(data) {
  var ret = {};
  ret.best = 1e10;
  ret.worst = -1e10;
  ret.maxUp = 0;
  ret.maxDown = 0;
  ret.bestCon = '';
  ret.worstCon = '';
  ret.maxUpCon = '';
  ret.maxDownCon = '';
  ret.maxRating = 0;
  ret.minRating = 1e10;
  ret.rating = 0;
  ret.tot = data.result.length;
  ret.timeline = [];
  ret.all = {};

  for (var i = 0; i < data.result.length; i++) {
    var con = data.result[i];
    ret.all[con.contestId] = [con.contestName, con.rank];
    if (con.rank < ret.best) {
      ret.best = con.rank;
      ret.bestCon = con.contestId;
    }
    if (con.rank > ret.worst) {
      ret.worst = con.rank;
      ret.worstCon = con.contestId;
    }
    var ch = con.newRating - con.oldRating;
    if (ch > ret.maxUp) {
      ret.maxUp = ch;
      ret.maxUpCon = con.contestId;
    }
    if (ch < ret.maxDown) {
      ret.maxDown = ch;
      ret.maxDownCon = con.contestId;
    }

    ret.maxRating = Math.max(ret.maxRating, con.newRating);
    ret.minRating = Math.min(ret.minRating, con.newRating);

    if (i == data.result.length - 1) ret.rating = con.newRating;

    ret.timeline.push([con.ratingUpdateTimeSeconds, con.newRating]);
  }

  return ret;
}

// align timeline,
// one user might have done a contest and other might haven't
// we need to add a point for the one who hasn't, what his rating was in that time
function alignTimeline(r1, r2, num) {
  ret = [];
  var i = 0;
  var j = 0;
  while (i < r1.length && j < r2.length) {
    if (compDate(r1[i][0], r2[j][0]) === 0) {
      if(num === 1){
        ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r2[j][1]]);
      }
      else if(num === 2){
        ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r2[j][1]]);
      }
      else if(num === 3){
        ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r2[j][1]]);
      }
      else if(num === 4){
        ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r1[i][4], r2[j][1]]);
      }
      i++;
      j++;
    } else if (compDate(r1[i][0], r2[j][0]) < 0) {
      if (j === 0){
        if(num === 1)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], null]);
        else if(num === 2)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], null]);
        else if(num === 3)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], null]);
        else if(num === 4)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r1[i][4], null]);
      }
      else{
        if(num === 1)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r2[j - 1][1]]);
        else if(num === 2)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r2[j - 1][1]]);
        else if(num === 3)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r2[j - 1][1]]);
        else if(num === 4)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r1[i][4], r2[j - 1][1]]);
      }
      i++;
    } else {
      if (i === 0){
        if(num == 1)
          ret.push([new Date(r2[j][0] /** 1000*/), null, r2[j][1]]);
        else if(num == 2)
          ret.push([new Date(r2[j][0] /** 1000*/), null, null, r2[j][1]]);
        else if(num ==3)
          ret.push([new Date(r2[j][0] /** 1000*/), null, null, null, r2[j][1]]);
        else if(num == 4)
          ret.push([new Date(r2[j][0] /** 1000*/), null, null, null, null, r2[j][1]]);
      }
      else{
        if(num == 1)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r2[j][1]]);
        else if(num == 2)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i-1][2], r2[j][1]]);
        else if(num == 3)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i-1][2], r1[i-1][3], r2[j][1]]);
        else if(num == 4)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i-1][2], r1[i-1][3], r1[i-1][4], r2[j][1]]);
      }
      j++;
    }

    if (i == r1.length) {
      while (j < r2.length) {
        if(num == 1)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r2[j][1]]);
        else if(num === 2)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i - 1][2], r2[j][1]]);
        else if(num == 3)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i - 1][2], r1[i - 1][3], r2[j][1]]);
        else if(num == 4)
          ret.push([new Date(r2[j][0] /** 1000*/), r1[i - 1][1], r1[i - 1][2], r1[i - 1][3], r1[i - 1][4], r2[j][1]]);
        j++;
      }
      break;
    }
    if (j == r2.length) {
      while (i < r1.length) {
        if(num == 1)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r2[j - 1][1]]);
        else if(num == 2)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r2[j - 1][1]]);
        else if(num == 3)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r2[j - 1][1]]);
        else if(num == 4)
          ret.push([new Date(r1[i][0] /** 1000*/), r1[i][1], r1[i][2], r1[i][3], r1[i][4], r2[j - 1][1]]);
        i++;
      }
      break;
    }
  }
  return ret;
}

function normalize(r1, num){
  var i = 0;
  ret = [];
  while(i < r1.length){
    if(num == 2)
      ret.push([new Date(r1[i][0] * 1000), r1[i][1], r1[i][2]]);
    else if(num == 3)
      ret.push([new Date(r1[i][0] * 1000), r1[i][1], r1[i][2], r1[i][3]]);
    else if(num == 4)
      ret.push([new Date(r1[i][0] * 1000), r1[i][1], r1[i][2], r1[i][3], r1[i][4]]);
    else if(num == 5)
      ret.push([new Date(r1[i][0] * 1000), r1[i][1], r1[i][2], r1[i][3], r1[i][4], r1[i][5]]);
    i++;
  }
  return ret;
}

function compDate(d1, d2) {
  if (Math.abs(d1 - d2) < MAX_TIME_DIFF) {
    return 0;
  }
  return d1 - d2;
}

function err_message(div, msg) {
  $('#' + div + 'Err').html(msg);
  $('#' + div).addClass('is-invalid');
}
