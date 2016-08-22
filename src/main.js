require('!!file?name=[name].[ext]!./index.html'); // !! - only this loader will be executed
require('jquery'); // webpack ProvidePlugin will take care of the globals
require('bootstrap-sass/assets/javascripts/bootstrap'); // bootstrap js
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss'); // bootstrap scss
require('./index.scss');

var $document = $(document.body);
$('#nav', $document).append(require('./nav.html'));
$('#content', $document).append(require('./content.html'));
