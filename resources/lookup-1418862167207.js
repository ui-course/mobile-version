(function(window, undefined) {
  var dictionary = {
    "36e8661f-ca4d-44b2-aff0-b242225e1c08": "tasks",
    "abbf570d-8795-46c6-ac05-58f32e93e24e": "Splash Page",
    "329dc7db-da64-4594-bc1a-b7a51efb5970": "test",
    "c261a0a5-8f23-4b3d-b59a-2521429def8b": "addtask",
    "70e77263-2209-4dc3-af40-dd9db50ecc0f": "compositetask",
    "bbda65cc-e6db-4029-92a3-65dbf44d35fc": "timeline",
    "ad63ef25-6ca8-4f66-afd0-d09d1206b6ab": "iPhone4"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);