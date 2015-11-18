import ResourcePanel     from './code/resource-panel';
import ItPanel           from './code/it-panel';
import SelectableInput   from './code/selectable-input';
import ArgLi             from './code/arg_li';
import VueMain           from './code/ui';
import * as Info         from './info';

import Vue = require('vue');

Vue.component("resource-panel", ResourcePanel);
Vue.component("it-panel", ItPanel);
Vue.component("selectable-input", SelectableInput);
Vue.component("arg-li", ArgLi);
const app = new VueMain([], Info.value);
console.log(app);

document.querySelector("#vue-main").appendChild(app.$el);
