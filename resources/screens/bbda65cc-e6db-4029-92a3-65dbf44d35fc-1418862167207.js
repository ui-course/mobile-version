jQuery("#simulation")
  .on("click", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/36e8661f-ca4d-44b2-aff0-b242225e1c08",
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
    } else if(jFirer.is("#s-Label_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_54": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "opacity": "1.0",
                        "box-shadow": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_54": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_54": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_7"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_52",
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
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
  .on("drag", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Label_53",
                    "type": "movewithcursor",
                    "containment": true,
                    "axis": "y"
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
  .on("dragend", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("swipeleft", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bbda65cc-e6db-4029-92a3-65dbf44d35fc",
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
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
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
    }
  })
  .on("swiperight", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bbda65cc-e6db-4029-92a3-65dbf44d35fc",
                    "transition": "slideright"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_50": {
                      "attributes": {
                        "opacity": "0.6",
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "line-through",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12pt",
                        "line-height": "12pt"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_50 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_50": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_50": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
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
    } else if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_53": {
                      "attributes": {
                        "opacity": "0.6",
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "line-through",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12pt",
                        "line-height": "12pt"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_53 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_53": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  },{
                    "#s-bbda65cc-e6db-4029-92a3-65dbf44d35fc #s-Label_53": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideright"
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
  .on("pinchopen", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .pinchopen", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Label_53",
                    "width": {
                      "type": "exprvalue",
                      "value": "320"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "90"
                    }
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
  .on("taphold", ".s-bbda65cc-e6db-4029-92a3-65dbf44d35fc .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c261a0a5-8f23-4b3d-b59a-2521429def8b",
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