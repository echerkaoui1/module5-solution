(function (global) {
  // AJAX utility function to send HTTP GET request
  function ajaxGet(url, responseHandler) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      handleResponse(request, responseHandler);
    };
    request.open("GET", url, true);
    request.send(null);
  }

  // AJAX response handler
  function handleResponse(request, responseHandler) {
    if (request.readyState === 4 && request.status === 200) {
      responseHandler(request.responseText);
    }
  }

  // Expose the AJAX utility to the global object
  global.$ajaxUtils = {
    ajaxGet: ajaxGet,
  };
})(window);
