function setupApiAi() {
    console.log("Setting up Api.ai intent and Entities");
    //Get a list of forms associated with the project.
    var options = {

    };

    $fh.forms.getForms(options,

    /*
    * Function executed with forms.
    */
    function (err, response) {
      if (err) console.log("Error: " + err);

      //An Array Of Forms Associated With The Project
      var formsArray = response.forms;

       /*
         exampleForm: {
          _id: <<Form Id>>,
          name: <<Form Name>>,
          description: <<Form Description>>
          lastUpdatedTimestamp: <<Timestamp of when the form was last updated>>
        }
      */
      var exampleForm = forms[0];
      console.log(exampleForm.name)
      //return callback(undefined, formsArray);
    });
}