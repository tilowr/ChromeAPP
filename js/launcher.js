chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('home.html', {
  	'id' : 'main',
    'bounds': {
      'width': 480,
      'height': 500
    }
  });
});