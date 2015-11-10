// My settings
var FONTSIZE = 14;
var PIXELSIZE = 16;
var MYDATA = {
   'label_col_full':["", "AT-wild-seeds", "wild-seedlings", "wild 10 day-old seedlings", "wild 14 day-old seedlings", "wild 25 day-old aerial parts", "35 day-old aerial parts", "42 day-old rosette leaves", "42 day-old stems", "53 day-old rosette leaves", "53 day-old stems", "53 day-old inflorescence", "53 day-old siliques", "63 day-old siliques", "73 day-old siliques", "83 day-old siliques", "93 day-old siliques", "99 day-old siliques"],
    'label_row':["mir156", "mir166", "mir245", "mir243", "mir123", "mir453", "mir111", "mir673", "mir763", "mir231", "mir157", "mir158", "mir159", "mir160", "mir191", "mir192", "mir193"],
    'rows':[[0.2896788709673635, -0.31928904185780566, 0.19014251260000917, -0.21196360388251934, -0.036835082848848816, -0.2859450634267704, 0.0986806487084508, -0.014087390050114897, -0.0005165760297211581, 0.1995356648964892, 0.06947576124141115, -0.052410890996017645, 0.1803209832470481, -0.2468940363005871, -0.07885764119332563, 0.24237424111407782, 0.658919975095304],
[0.2878419953683815, -0.2846371629033275, -0.19869360048143506, 0.22137987622298558, 0.009154878090651348, 0.2804335729473336, -0.023322222300162246, -0.06812166282345669, 0.03503666444636534, 0.21411973381995725, -0.049276191476143566, 0.04534064813129536, -0.14663897207576074, 0.08898603638337765, 0.35610755501316427, -0.6165984615826618, 0.27521388963489113],
[0.28416913814877776, -0.33115019394969103, 0.1559398822778419, -0.1962137505310948, 0.009098221193378987, -0.14867804059341494, 0.13726540635915047, -0.07654508328101468, 0.017515435897110458, 0.3971338276290193, 0.11060019161822218, -0.22678287047332452, 0.11733873630086039, -0.046550308420031494, 0.1832385754175439, -0.00702319097561821, -0.654702632495298],
[0.22845432072525584, -0.27959003252877, -0.28487239204669546, 0.2640047858069267, 0.04055503393469052, 0.43819507610866426, -0.09469194728262591, -0.11652582186042322, 0.10379390134071095, 0.1618154964040685, -0.1705340805947882, 0.27700872754156625, 0.08928683340906204, -0.07903116056918724, -0.3932556966277304, 0.4177001109474452, -0.12832824179456737],
[0.22067470757248217, -0.31421801914280456, -0.14945223973366403, 0.059683730688627604, 0.01369313616347804, 0.1735063149555258, -0.12733371277399738, 0.2310827572869096, -0.2986391057795436, -0.6009127587269074, 0.2426503563486806, -0.44326754869848634, 0.0948959945497817, -0.06975570888204165, 0.03362092122098349, 0.06780001055610274, -0.03900565390559523],
[0.174448729044615, 0.21356340595496193, 0.47680220457758027, 0.4257477863107905, 0.2831210149633702, 0.08518185300766408, -0.12973744923816427, -0.05699182747536913, 0.02313329473524875, -0.1165832271052349, -0.10607264182131813, 0.12600637237754134, 0.28265995877266686, -0.25046507484580804, 0.4453422600235072, 0.15855816641206097, -0.022534979555747858],
[0.26825691843068755, 0.088780539597555, 0.4432981458155248, 0.27568785079494385, 0.22059008346806946, -0.05690914396313988, 0.022664632601443302, 0.028293987651000545, -0.16531520970925548, 0.048419996037773805, 0.15148880186224417, -0.07478993908010051, -0.22008654255626028, 0.10800503841915582, -0.6206878183146021, -0.2999967816070178, -0.029252614796330637],
[0.33812733634925757, 0.11535097185287436, -0.054214864682652485, 0.1813450212335016, 0.006631597468755853, -0.15408982201724328, 0.1397685179281501, 0.09311992062199753, 0.22483350247156075, -0.013686316676689292, 0.060989389002532084, -0.11388251405361231, -0.3052819295290061, 0.632278752454501, 0.21121550793933008, 0.416640037946005, 0.07709629615277608],
[0.25529289293417284, 0.24340449234885575, -0.14148514863046427, -0.11245538247845777, 0.08706589827067336, 0.004393351347909476, 0.15848296110946047, -0.21845922597782885, 0.6104602523787206, -0.23863401369724394, -0.26377013570916485, -0.38137234216695226, 0.14924370448739044, -0.17744948213872797, -0.17393698073490624, -0.18392543583856277, -0.0015413274304463109],
[0.2592611534564853, 0.23898270353680018, -0.19964485244358746, -0.055287935974516395, -0.13321374341335399, -0.20233984432420254, -0.4188629912324918, -0.2760988213152305, -0.11911205384956365, 0.01165348183846003, 0.2523565225235036, 0.15521350775985598, 0.5422368675402013, 0.32166363157020944, -0.07482289476098067, -0.13113420887113444, -0.003244839282358603],
[0.26125143742168916, 0.2582715875643116, -0.1954953257073007, 0.007016640392185976, -0.1525446061906951, -0.20131648374454866, -0.41534423724290126, -0.1916717881362917, -0.17583137254880063, 0.0954821561628065, -0.03764983601868968, -0.10092285056312557, -0.5388011311142837, -0.4366878051567089, 0.07311375440157472, 0.11444051138532305, -0.051450259237081596],
[0.22236560045594894, 0.2076485531187602, -0.052628901725689375, -0.2629941331086091, 0.12508779225591515, 0.12719170676706562, -0.21812246689571516, 0.7538890891008321, 0.2656458399958301, 0.1435698992957149, 0.18251893187312324, 0.19999458794757988, 0.023852006042737732, -0.13143083652259596, -0.007125659635590316, -0.06423757681612695, -0.035182371016954234],
[0.23121474203255388, 0.2832460757827527, -0.0025373661496193405, -0.2543904869068566, -0.003725600460378685, 0.21796332559793236, 0.1630959060298077, 0.143928416301356, -0.5244751602109202, 0.14104809268127524, -0.5858171784926103, -0.15762211407210763, 0.1359161269428312, 0.1502631638992606, 0.005263111962321376, 0.02946435734521609, 0.0425390914248959],
[0.20749889480390407, 0.2663791126047429, -0.023610358977802184, -0.2669155779139345, 0.03469137466255568, 0.35403144672570974, 0.48170108620991675, -0.2876495910592571, -0.13070503627318167, -0.1180151066036012, 0.48431756923779484, 0.2612601381383578, -0.1099084796779296, -0.13371507954106135, 0.0795011458132715, 0.051044062862680574, 0.012155546576667998],
[0.06749021332128932, 0.05990518406674923, 0.3569590852305321, 0.09223455956333454, -0.8679406841985007, 0.264330416354954, -0.01929922453323684, 0.07422335421933805, 0.14441778287655327, -0.01601353489382172, 0.01631367298308591, -0.0583723968754475, 0.02833827337758079, -0.006459001365098216, -0.029691515362738227, -0.012196063932342942, -0.013955729799070735],
[0.24598488777298125, -0.07573591238958646, -0.18529370467392922, 0.20863553066172294, -0.21008955123619044, -0.4673302403694386, 0.3750184305378411, 0.20237699307871354, -0.09382272752744672, -0.2954679985584635, -0.204703753737225, 0.4502225996580216, 0.039651712614834383, -0.15144126689153276, -0.019863184350341845, -0.14126761200421445, -0.16185383192199151],
[0.1523121246090742, -0.27745934574839376, 0.32647598479558904, -0.48087246203937073, 0.06974019820343587, 0.0484609520412302, -0.2975171387398659, -0.17504094840633888, 0.09970721257451318, -0.3808255070327729, -0.2583163376120334, 0.3423125196869807, -0.2315282444442002, 0.19316006667705982, 0.023319735551864215, -0.03724328489253695, -0.06247156192186433]]
}


// CORREXPLORER



var main = function(selector, corr, label_col, label_row, minexpr, maxexpr){


  var transition_time = 1500;

  var body = d3.select(selector);

  var tooltip = d3.select('div.tooltip');
//    .style("opacity", 1e-6);

  var WIDTH = label_col.length*PIXELSIZE+250;
  var HEIGHT = label_row.length*PIXELSIZE+250;


  var svg = body.append('svg').attr("xmlns", "http://www.w3.org/2000/svg")
    .attr('width', WIDTH)
    .attr('height', HEIGHT);



  var sort_process = d3.select("select#sort_func")[0][0].value;
  d3.select("select#sort_func").on("change", function() {
      sort_process = this.value;
      reorder_matrix(last_k, last_what);
  });


  var row = corr;
  var col = d3.transpose(corr);


  // converts a matrix into a sparse-like entries
  // maybe 'expensive' for large matrices, but helps keeping code clean
  var indexify = function(mat){
      var res = [];
      for(var i = 0; i < mat.length; i++){
          for(var j = 0; j < mat[0].length; j++){
              res.push({i:i, j:j, val:mat[i][j]});
          }
      }
      return res;
  };


  var corr_data = indexify(corr);
  var order_col = d3.range(label_col.length + 1);
  var order_row = d3.range(label_row.length + 1);

  var color = d3.scale.linear()
      .domain([0, maxexpr/3, maxexpr/2, maxexpr-(maxexpr/3), maxexpr])
      .range(['#6363ff','#63fffb', '#7bff63', '#fbff63', '#ff6364']);


  var label_space = 220;
  // I will make it also a function of scale and max label length

  var matrix = svg.append('g')
      .attr('class','matrix')
      .attr('transform', 'translate(' + (label_space + 10) + ',' + (label_space + 10) + ')');

  var pixel = matrix.selectAll('rect.pixel').data(corr_data);

  // as of now, data not changable, only sortable
  pixel.enter()
      .append('rect')
          .attr('class', 'pixel')
          .attr('width', PIXELSIZE)
          .attr('height', PIXELSIZE)
          .style('fill',function(d){ 
                 if (d.val==0) {
                   var c = '#505050';
                 }  
                 else {
                   var c = color(d.val);
                 }
                 return c;
                })
          .on('mouseover', function(d){pixel_mouseover(d);})
          .on('mouseout', function(d){mouseout(d);});
          // .on('click', function(d){reorder_matrix(d.i, 'col'); reorder_matrix(d.j, 'row');});
          //the last thing works only for symmetric matrices, but with asymmetric sorting

  tick_col = svg.append('g')
      .attr('class','ticks')
      .attr('transform', 'translate(' + (label_space + PIXELSIZE/2 + 0.7*FONTSIZE/2 + 10) + ',' + (label_space) + ')')
      .selectAll('text.tick')
      .data(label_col);

  tick_col.enter()
      .append('text')
          .attr('class','tick')
          .style('text-anchor', 'start')
          .attr('transform', function(d, i){
            return 'rotate(270 ' + (order_col[i]*PIXELSIZE) + ',0)';
          })
          .attr('font-size', FONTSIZE)
          .text(function(d){ return d; })
          .on('mouseover', function(d, i){tick_mouseover(d, i, col[i], label_row);})
          .on('mouseout', function(d){mouseout(d);})
          .on('click', function(d, i){reorder_matrix(i, 'col');});

  tick_row = svg.append('g')
      .attr('class','ticks')
      .attr('transform', 'translate(' + (label_space) + ',' + (label_space + PIXELSIZE/2 + 0.7*FONTSIZE/2 + 10) + ')')
      .selectAll('text.tick')
      .data(label_row);

  tick_row.enter()
      .append('text')
          .attr('class','tick')
          .style('text-anchor', 'end')
          .attr('font-size', FONTSIZE)
          .text(function(d){ return d; })
          .on('mouseover', function(d, i){tick_mouseover(d, i, row[i], label_col);})
          .on('mouseout', function(d){mouseout(d);})
          .on('click', function(d, i){reorder_matrix(i, 'row');});

  var pixel_mouseover = function(d){
    tooltip.style("opacity", 0.8)
      .style("left", (d3.event.pageX + 15) + "px")
      .style("top", (d3.event.pageY + 8) + "px")
      .html(function() {
          var tooltipValue = (d.val == 0 ? "N/D" : d.val);
          var info = label_row[d.i] + "<br>" + label_col[d.j] + "<br>" + "Value: " + tooltipValue;
          return info;
      });
  };

  var mouseout = function(d){
    tooltip.style("opacity", 1e-6);
  };

  var tick_mouseover = function(d, i, vec, label){
    // below can be optimezed a lot
    var indices = d3.range(vec.length);
    // also value/abs val?
    indices.sort(function(a, b){ return Math.abs(vec[b]) - Math.abs(vec[a]); });
    res_list = [];
    for(var j = 0; j < Math.min(vec.length, 10); j++) {
      res_list.push((vec[indices[j]] > 0 ? "+" : "&nbsp;") + vec[indices[j]].toFixed(3) + "&nbsp;&nbsp;&nbsp;" + label[indices[j]]);
    }
    tooltip.style("opacity", 0.8)
      .style("left", (d3.event.pageX + 15) + "px")
      .style("top", (d3.event.pageY + 8) + "px")
      .html("" + i + ": " + d + "<br><br>" + res_list.join("<br>"));
  };


  var refresh_order = function(){
      tick_col.transition()
          .duration(transition_time)
              .attr('transform', function(d, i){
                return 'rotate(270 ' + (order_col[i]*PIXELSIZE) + ',0)';
              })
              .attr('x', function(d, i){return order_col[i]*PIXELSIZE;});


      tick_row.transition()
          .duration(transition_time)
              .attr('y', function(d, i){return order_row[i]*PIXELSIZE;});

      pixel.transition()
          .duration(transition_time)
              .attr('y', function(d){return order_row[d.i]*PIXELSIZE;})
              .attr('x', function(d){return order_col[d.j]*PIXELSIZE;});
  };

  refresh_order();

  var last_k = 0;
  var last_what = 'col';
  var reorder_matrix = function(k, what){
      last_k = k;
      last_what = what;
      var order = [];
      var vec = [];
      var labels = [];
      var vecs = [];
      if(what === 'row'){  //yes, we are sorting counterpart
          vec = row[k];
          vecs = row;
          labels = label_col;  //test is if it ok
      } else if ( what === 'col' ) {
          vec = col[k];
          vecs = col;
          labels = label_row;
      }
      var indices = d3.range(vec.length);
      switch (sort_process) {
        case "value":
          indices = indices.sort(function(a,b){return vec[b] - vec[a];});
          break;
        case "abs_value":
          indices = indices.sort(function(a,b){return Math.abs(vec[b]) - Math.abs(vec[a]);});
          break;
        case "original":
          break;
        case "alphabetic":
          indices = indices.sort(function(a,b){return Number(labels[a] > labels[b]) - 0.5;});
          break;
        case "similarity":
          // Ugly, but sometimes we want to sort the coordinate we have clicked
          // Also, as of now with no normalization etc
          indices = d3.range(vecs.length);
          indices = indices.sort(function(a,b){
            var s = 0;
            for(var i = 0; i < vec.length; i++){
              s += (vecs[b][i] - vecs[a][i]) * vec[i];
            }
            return s;
          });
          if(what === 'col'){
              order_col = reverse_permutation(indices);
          } //not else if!
          if ( what === 'row') {
              order_row = reverse_permutation(indices);
          }
          refresh_order();
          return undefined;
      }
      if(what === 'row'){
          order_col = reverse_permutation(indices);
      } //not else if!
      if ( what === 'col') {
          order_row = reverse_permutation(indices);
      }
      refresh_order();
  };

  var reverse_permutation = function(vec){
      var res = [];
      for(var i = 0; i < vec.length; i++){
          res[vec[i]] = i;
      }
      return res;
  };

};
