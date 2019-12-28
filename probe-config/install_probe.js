/**
 * Created by 18011053 on 2018/12/6
 */

!(function () {

  function installProbeScript(url) {
    var probe = document.createElement('script');
    probe.setAttribute('src', url);
    document.head.appendChild(probe);
  }
  /**
   * @name
   * @param params
   * @param params.siteid
   * @param params.resourceType
   * @param params.pageName
   */
  function initBuriedPoint(params) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'siteid');
    meta.setAttribute('content', params.siteid);

    var resourceType = document.createElement('input');
    resourceType.setAttribute('type', 'hidden');
    resourceType.setAttribute('id', 'resourceType');
    resourceType.setAttribute('value', params.resourceType);
    
    if(params.pageName){
      var pageName = document.createElement('input');
      pageName.setAttribute('type', 'hidden');
      resourceType.setAttribute('id', 'pagename');
      pageName.setAttribute('value', params.pageName);
      document.body.appendChild(pageName);
    }

    
    document.body.appendChild(resourceType);

    document.head.appendChild(meta);
  }

  /**
   * @param config <[{}]>
   * @param confirmEnvCbFn <boolean>
   */
  function diffEnv(config, confirmEnvCbFn) {
    for(var i = 0; i < config.length; i++) {
      var domain = config[i].domain;
      if (confirmEnvCbFn(domain)) {
        installProbeScript(config[i].probeUrl);
        window.onload = (function (params) {
          return function () {
            initBuriedPoint(params);
          };
        })(config[i]);
      }
    }
  }
  window._snInstallBpmProbe = diffEnv;
})(window, window.document);

