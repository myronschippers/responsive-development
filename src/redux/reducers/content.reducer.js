import { combineReducers } from 'redux';
const one = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dignissim neque, eget efficitur mi. Phasellus maximus, felis vitae mattis ultrices, orci mauris aliquet sem, ac porta ipsum orci non velit. Nam malesuada hendrerit tincidunt. Proin eu ex eros. Sed eu erat in odio pharetra rhoncus at quis justo. Nullam tempus ut magna sed congue. Maecenas dignissim sodales mauris rutrum sodales. Integer tempor, nisi ut sagittis egestas, sem felis ornare nibh, at eleifend nisi mauris vel magna. Etiam in sodales ipsum. Ut dapibus est sagittis aliquam volutpat. Etiam id tempor neque, at tempor sapien. Duis ac mauris diam. Curabitur at sapien eleifend, lobortis magna non, dictum risus. Proin suscipit massa quis leo convallis, in vehicula ipsum faucibus.';
const two = 'Nunc pulvinar venenatis orci quis placerat. Nulla ac neque egestas, porttitor orci vitae, mattis leo. Praesent laoreet est gravida, venenatis diam at, auctor eros. Aenean aliquet finibus nisi. Donec placerat, dui sit amet volutpat lobortis, tortor libero sagittis sem, ut scelerisque eros erat quis dolor. Nam nec purus id purus tincidunt vehicula. Morbi tincidunt sollicitudin dolor ac blandit. Aliquam in sodales tellus. Nullam sit amet pharetra lacus. Pellentesque vitae tellus diam. Nulla facilisi. Phasellus pretium, arcu venenatis dictum malesuada, ante dolor placerat metus, dapibus posuere neque massa ac neque. Vestibulum ligula arcu, pharetra in neque a, dignissim dictum arcu. Aliquam consequat ornare leo vitae eleifend. Integer scelerisque nibh sapien, quis pharetra nibh congue eu.';
const three = 'Nulla eu porttitor tortor, eu pretium arcu. Donec sit amet diam justo. Suspendisse gravida, tortor a scelerisque aliquam, nisl justo tempus nunc, nec volutpat lorem ipsum in mi. Maecenas euismod sed mi vitae tempus. Nulla finibus libero ut nisl blandit ultricies vel quis augue. Vivamus viverra dolor a urna posuere hendrerit. Duis lacinia semper fermentum. Morbi vitae sem id dui aliquam interdum. Nunc et metus vitae nisi porttitor finibus sit amet et eros. Duis vehicula tellus vel ullamcorper malesuada. Vivamus consequat eleifend ullamcorper. Quisque rutrum vulputate purus ut consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur odio justo, tincidunt vitae tortor ut, consequat semper arcu.';
const four = 'Donec venenatis accumsan est, ut consequat sem lobortis sit amet. Sed tincidunt ut nunc sit amet rhoncus. Curabitur imperdiet sit amet arcu eu rutrum. Praesent eget odio erat. Curabitur blandit quam vitae ante cursus, id blandit ipsum cursus. Nulla eleifend malesuada nunc, eget mattis orci dictum ut. Etiam in eros vitae lorem sagittis congue. In vitae nunc quis odio tristique tempor in nec sem. Fusce sollicitudin cursus nunc nec auctor.';
const five = 'Nullam vestibulum, nunc in imperdiet pharetra, quam neque porta nisl, sed iaculis nisi urna vel orci. Curabitur eget mauris vitae odio porttitor dignissim at a erat. Nulla at aliquet augue. Cras non consectetur mi. Proin pellentesque ipsum ut accumsan facilisis. In pulvinar euismod neque at tempor. Mauris eu metus porttitor, lobortis lacus id, laoreet justo. In aliquet justo eget rutrum semper. Sed vestibulum, purus a facilisis finibus, nisl velit facilisis diam, non pharetra dolor nunc vel quam.';
const allParagraphs = {
    one,
    two,
    three,
    four,
    five,
};

const paragraphs = (state = allParagraphs, action) => {
    switch (action.type) {
      case 'PARAGRAPHS':
        return allParagraphs;
      case 'CLEAR_PARAGRAPHS':
        return {};
      default:
        return state;
    }
};

export default combineReducers({
    paragraphs,
});