import Vue from "vue";
import {
         Button,
         Message,
         Form,
         FormItem,
         Input,
         Container,
         Header,
         Aside ,
         Main,
         Menu,
         Submenu ,
         MenuItemGroup,
         MenuItem,
         Select,
         Option,
         MessageBox,
         TableColumn,
         Table,
         pagination
       } from "element-ui";
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(pagination);
let {confirm,prompt}=MessageBox;
Vue.prototype.$message=Message
Vue.prototype.$confirm=confirm
Vue.prototype.$prompt=prompt;
