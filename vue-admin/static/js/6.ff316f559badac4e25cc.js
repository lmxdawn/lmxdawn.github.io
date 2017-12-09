webpackJsonp([6],{"E37/":function(t,e,a){"use strict";function i(t){return Object(n.a)({url:"/admin/auth_rule/index",method:"get",params:t})}function r(t){return Object(n.a)({url:"/admin/auth_rule/save",method:"post",data:t})}function o(t){return Object(n.a)({url:"/admin/auth_rule/edit",method:"post",data:t})}function s(t){return Object(n.a)({url:"/admin/auth_rule/delete",method:"post",data:t})}function l(t){a("icb/")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Vo7i"),d={data:function(){return{query:{name:"",status:""},mergeList:[],defaultProps:{children:"children",label:"title"},treeList:[],loading:!0,addLoading:!1,addFormVisible:!1,addFormData:{pid:"",name:"",title:"",status:"",condition:"",listorder:999},addPidData:null,addFormDataRules:{name:[{required:!0,message:"请输入规则名",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},editLoading:!1,editFormVisible:!1,editFormData:{id:"",pid:"",name:"",title:"",status:"",condition:"",listorder:""},editPidData:null,editFormRules:{name:[{required:!0,message:"请输入规则名",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},deleteLoading:!1}},methods:{renderContent:function(t,e){var a=this,i=e.node,r=e.data;e.store;return t("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[t("span",null,[t("span",{attrs:{title:r.name}},[i.label])]),t("span",null,[t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return a.handleAdd(r)}}},["添加子菜单"]),t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return a.handleEdit(r)}}},["编辑"]),t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return a.handleDel(r)}}},["删除"])])])},onSubmit:function(){this.getList()},getList:function(){var t=this;this.loading=!0,i(this.query).then(function(e){t.loading=!1,t.mergeList=e.merge_list||[],t.treeList=e.tree_list||[]}).catch(function(){t.loading=!1,t.mergeList=[],t.treeList=[]})},handleDel:function(t){var e=this;if(t.children&&t.children.length>0)return this.$alert("存在子节点","提示",{confirmButtonText:"确定"}),!1;t.id&&this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){e.deleteLoading=!0,s({id:t.id}).then(function(t){e.deleteLoading=!1,t.errcode?e.$message({message:t.errmsg,type:"error"}):(e.$message({message:"删除成功",type:"success"}),e.getList())}).catch(function(){e.deleteLoading=!1})}).catch(function(){e.$message({type:"info",message:"取消删除"})})},handleEdit:function(t){this.editFormVisible=!0,this.editFormData=Object.assign({},t),this.editFormData.status+="",this.editPidData=t},editSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){e.editLoading=!0;o(Object.assign({},e.editFormData)).then(function(t){e.editLoading=!1,t.errcode?e.$message({message:t.errmsg,type:"error"}):(e.$message({message:"编辑成功",type:"success"}),e.$refs.editFormData.resetFields(),e.editFormVisible=!1,e.editPidData=t||{},e.getList())}).catch(function(){e.editLoading=!1})}})},handleAdd:function(t){this.addFormVisible=!0,this.addPidData=t||{},this.addFormData={pid:t.id||"",name:"",title:"",status:"1",condition:"",listorder:999}},addSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){e.addLoading=!0;r(Object.assign({},e.addFormData)).then(function(t){if(e.addLoading=!1,t.errcode)e.$message({message:t.errmsg,type:"error"});else{e.$message({message:"添加成功",type:"success"}),e.$refs.addFormData.resetFields(),e.addFormVisible=!1;var a=t||{};e.addPidData.children||e.$set(e.addPidData,"children",[]),e.addPidData.children.push(a),e.getList()}}).catch(function(){e.addLoading=!1})}})}},filters:{statusFilterType:function(t){return{0:"gray",1:"success"}[t]},statusFilterName:function(t){return{0:"禁用",1:"正常"}[t]}},mounted:function(){},created:function(){this.getList()}},m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{staticClass:"query-form",attrs:{inline:!0,model:t.query,size:"mini"}},[a("el-form-item",{staticClass:"query-form-item"},[a("el-input",{attrs:{placeholder:"角色名称"},model:{value:t.query.name,callback:function(e){t.$set(t.query,"name",e)},expression:"query.name"}})],1),t._v(" "),a("el-form-item",{staticClass:"query-form-item"},[a("el-select",{attrs:{placeholder:"状态"},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},[a("el-option",{attrs:{label:"禁用",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"正常",value:"1"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.getList}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.onSubmit}},[t._v("查询")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.handleAdd(e)}}},[t._v("新增")])],1)],1),t._v(" "),a("el-tree",{attrs:{data:t.mergeList,props:t.defaultProps,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":t.renderContent}}),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.editFormVisible=e}}},[a("el-form",{ref:"editFormData",attrs:{model:t.editFormData,rules:t.editFormRules}},[a("el-form-item",{attrs:{label:"父ID",prop:"pid"}},[a("el-select",{attrs:{placeholder:"父级"},model:{value:t.editFormData.pid,callback:function(e){t.$set(t.editFormData,"pid",e)},expression:"editFormData.pid"}},t._l(t.treeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}},[a("span",{staticStyle:{float:"left"}},[a("span",{domProps:{innerHTML:t._s(e.html)}}),t._v(t._s(e.title))])])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"规则名",prop:"name"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.editFormData.name,callback:function(e){t.$set(t.editFormData,"name",e)},expression:"editFormData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"规则标题",prop:"title"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.editFormData.title,callback:function(e){t.$set(t.editFormData,"title",e)},expression:"editFormData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.editFormData.status,callback:function(e){t.$set(t.editFormData,"status",e)},expression:"editFormData.status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("禁用")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("正常")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"额外的规则表达式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.editFormData.condition,callback:function(e){t.$set(t.editFormData,"condition",e)},expression:"editFormData.condition"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"listorder"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.editFormData.listorder,callback:function(e){t.$set(t.editFormData,"listorder",e)},expression:"editFormData.listorder"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.editFormVisible=!t.editFormVisible}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){t.editSubmit("editFormData")}}},[t._v("提交\n            ")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"新增",visible:t.addFormVisible},on:{"update:visible":function(e){t.addFormVisible=e}}},[a("el-form",{ref:"addFormData",attrs:{model:t.addFormData,rules:t.addFormDataRules}},[a("el-form-item",{attrs:{label:"父ID",prop:"pid"}},[a("el-select",{attrs:{placeholder:"父级"},model:{value:t.addFormData.pid,callback:function(e){t.$set(t.addFormData,"pid",e)},expression:"addFormData.pid"}},t._l(t.treeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}},[a("span",{staticStyle:{float:"left"}},[a("span",{domProps:{innerHTML:t._s(e.html)}}),t._v(t._s(e.title))])])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"规则名",prop:"name"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.addFormData.name,callback:function(e){t.$set(t.addFormData,"name",e)},expression:"addFormData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"规则标题",prop:"title"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.addFormData.title,callback:function(e){t.$set(t.addFormData,"title",e)},expression:"addFormData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.addFormData.status,callback:function(e){t.$set(t.addFormData,"status",e)},expression:"addFormData.status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("禁用")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("正常")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"额外的规则表达式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addFormData.condition,callback:function(e){t.$set(t.addFormData,"condition",e)},expression:"addFormData.condition"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"listorder"}},[a("el-input",{attrs:{type:"","auto-complete":"off"},model:{value:t.addFormData.listorder,callback:function(e){t.$set(t.addFormData,"listorder",e)},expression:"addFormData.listorder"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.addFormVisible=!t.addFormVisible}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){t.addSubmit("addFormData")}}},[t._v("提交")])],1)],1)],1)},u=[],c={render:m,staticRenderFns:u},p=c,f=a("/Xao"),g=l,b=f(d,p,!1,g,null,null);e.default=b.exports},agiT:function(t,e,a){e=t.exports=a("BkJT")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"authRule.vue",sourceRoot:""}])},"icb/":function(t,e,a){var i=a("agiT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("43b68d8f",i,!0)}});
//# sourceMappingURL=6.ff316f559badac4e25cc.js.map