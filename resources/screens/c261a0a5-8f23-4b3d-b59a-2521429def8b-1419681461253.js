jQuery("#simulation")
  .on("click", ".s-c261a0a5-8f23-4b3d-b59a-2521429def8b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": "slideleft"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c261a0a5-8f23-4b3d-b59a-2521429def8b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c261a0a5-8f23-4b3d-b59a-2521429def8b #s-Rectangle_10": {
                      "attributes": {
                        "background-color": "#434343",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c261a0a5-8f23-4b3d-b59a-2521429def8b #s-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c261a0a5-8f23-4b3d-b59a-2521429def8b #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#434343",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c261a0a5-8f23-4b3d-b59a-2521429def8b #s-Rectangle_5": {
                      "attributes-ie": {
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c261a0a5-8f23-4b3d-b59a-2521429def8b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
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
  })
  .on("keyup.jim", ".s-c261a0a5-8f23-4b3d-b59a-2521429def8b .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_6",
                    "transition": "slidedown"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("focusin", ".s-c261a0a5-8f23-4b3d-b59a-2521429def8b .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slidedown"
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