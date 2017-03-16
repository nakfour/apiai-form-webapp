

function setupApiAi() {
    console.log("Setting up Api.ai intent and Entities");
    // Change Image to Red Button
    document.getElementById("startButton").src = "img/Power-red.png";
    //Get a list of forms associated with the project.
    var options = {

    };

    var params = {};
    $fh.cloud(
      {
        path: '/hello',
        method: "GET",
        contentType: "application/json",
      },
      function (res) {
        console.log("GET Success");
        // Switch button to green
        document.getElementById("startButton").src = "img/Power-green.png";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
}