export default class UIBuilderHelpers {
  static isDefined(v) {
    return v != undefined;
  }
  static isObject(v) {
    return (this.isDefined(v) && typeof v == "object");
  }
  static printf(str, scope) {
    let regex = /\{\{(\w+)\}\}/g;
    let instance = str;
    let from, to, m;
    if (this.isObject(scope))
      while ((m = regex.exec(str)) !== null) {
        from = m[0]; to = scope[m[1]];
        this.isDefined(to) &&
          (instance = instance.replace(from, to));
      }
    else return str;
    return instance;
  }
}