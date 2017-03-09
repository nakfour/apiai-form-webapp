

function setupApiAi() {
    console.log("Setting up Api.ai intent and Entities");
    //Get a list of forms associated with the project.
    var options = {

    };

var params = {};
/*$fh.forms.init(params, function(err) {
  if (err){

  // Forms initialised ok if no error
  console.log("Error init forms");
  }
  else {
  console.log("Init forms success");
  }
});*/

$fh.cloud(
      {
        path: '/hello',
        method: "GET",
        contentType: "application/json",
       /* data: {
          hello: document.getElementById('hello_to').value
        }*/
      },
      function (res) {
         /* var allOpps=JSON.parse(res);
          var count=allOpps.length;
          var oppDescr=allOpps [0].Description;
        document.getElementById('cloudResponse').innerHTML = "<p>" + oppDescr + "</p>";*/
        console.log("GET Success");
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );


    //$fh.forms.getForms(options,

    /*
    * Function executed with forms.
    */
    /*function (err, response) {
      if (err) console.log("Error: " + err);

      //An Array Of Forms Associated With The Project
      var formsArray = response.forms;*/

       /*
         exampleForm: {
          _id: <<Form Id>>,
          name: <<Form Name>>,
          description: <<Form Description>>
          lastUpdatedTimestamp: <<Timestamp of when the form was last updated>>
        }
      */
      /*var exampleForm = forms[0];
      console.log(exampleForm.name)
      //return callback(undefined, formsArray);
    });*/
}