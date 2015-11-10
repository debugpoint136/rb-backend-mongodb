var s;
var Ngsprofile = {


  /* SETTINGS */
  settings: {


  },

  vars: {
  },


  init: function(series, plotBands) {
    s = this.settings;
    if (series.length>0) {
      $('.ngsprofile .portlet-body-content').show();
      $('.ngsprofile a.download').css('visibibilty', 'visible');
      this.displayChart(series, plotBands);
      this.displayLegend(plotBands);

    }
  },


  displayLegend: function(plotBands) {
    var f = '<div class="row"><div class="col-md-12">';
    f += '<ul class="list-inline mylegend">';
    var showed = [];
    for (var i=0; i<plotBands.length; i++) {
      var plotBand = plotBands[i];
      if (showed.indexOf(plotBand.name)==-1) {
        f+= '<li><span class="legbox" style="background-color:'+plotBand.color+'"></span>'+plotBand.name+'</li>';
        showed.push(plotBand.name);
      }
    }
    f += '</ul>';
    f+= '</div></div>';
    $('.ngsprofile .ngschartlegend').html(f);
  },

  displayChart: function(series, plotBands) {
 
    opt = {
            credits: {enabled: false},
            chart: {
                renderTo: 'ngschart',
                type: 'area',
                zoomType: 'x'
            },
            title: {
                text: 'NGS Coverage of primary transcript  '+mirName
            },
            subtitle: {
                text: 'Click and drag in the plot area to zoom in'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function() {
                        return this.value;  
                    }
                },
                title: {
                   enabled: true,
                   text: 'Pri-miRNA sequence'
                },
                plotBands: plotBands
            },
            yAxis: {
                title: {
                    text: 'RPM'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {

         formatter: function() {
            return 'Position: <b>'+this.x+'</b><br/>Mol: <b>'+this.series.name+'</b><br/>RPM: <b>'+this.y.toFixed(2)+'</b>';
          }

            },
            plotOptions: {
            series: {
                events: {
                    legendItemClick: function () {

                            return false;
                    }
                }
            },
                area: {
                    pointStart: 1,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: series,
           navigation: {
             buttonOptions: {
               enabled: false
           }
       },
            legend: {
            enabled:true,
itemHoverStyle: {
                cursor: 'auto',

            }
            }
     };

     //$('.ngsprofile #ngschart').highcharts(opt);


     var chart = new Highcharts.Chart(opt);




     $('.ngsprofile .download-png').on('click', function() {
         var chart = $('.ngsprofile #ngschart').highcharts();
         chart.exportChart({type: 'image/png', filename: 'chart-expprofile'})
     });
     $('.ngsprofile .download-jpeg').click(function() {
         var chart = $('.ngsprofile #ngschart').highcharts();
         chart.exportChart({type: 'image/jpeg', filename: 'chart-expprofile'})
     });
     $('.ngsprofile .download-pdf').click(function() {
         var chart = $('.ngsprofile #ngschart').highcharts();
         chart.exportChart({type: 'application/pdf', filename: 'chart-expprofile'})
     });
     $('.ngsprofile .download-svg').click(function() {
         var chart = $('.ngsprofile ngschart').highcharts();
         chart.exportChart({type: 'image/svg+xml', filename: 'chart-expprofile'})
     });

  }

}
