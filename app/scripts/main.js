var mainObj = {
  owner: 'Developer',
  copyright: new Date().getFullYear(),
  isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  printCopyright() {
    return `&copy; ${this.copyright} ${this.owner}. All Rights Reserved.`
  }
};

module.exports = mainObj;
