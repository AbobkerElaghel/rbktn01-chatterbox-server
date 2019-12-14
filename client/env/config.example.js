// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '4489fc4aff873da9e1203b2f49d3baedf4e1d032');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '832b5a56eef13e05067059e82476914ce309c9b5');
});

// Put your campus prefix here
window.CAMPUS = 'RBK';
