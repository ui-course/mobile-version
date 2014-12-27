jQuery("#simulation")
  .on("pageload", ".s-abbf570d-8795-46c6-ac05-58f32e93e24e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-abbf570d-8795-46c6-ac05-58f32e93e24e")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1500
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bbda65cc-e6db-4029-92a3-65dbf44d35fc",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });