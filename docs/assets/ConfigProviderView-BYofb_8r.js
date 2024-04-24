import{_ as d}from"./CodeSnippet-xt336QBZ.js";import{_ as m}from"./va-form.vue_vue_type_script_setup_true_lang-_HXdvfIC.js";import{h as f,W as u,c as g,b as o,w as s,a as e,M as b,o as v,m as n,l as h,t as C,g as w}from"./index-5fqsVTiK.js";import{_ as x,a as F}from"./va-input.vue_vue_type_script_setup_true_lang-DZMFiHsu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={class:""},O=e("p",null,"This component is used to provide global configuration options within a Vue application. It allows child components to access shared settings without the need to pass props through multiple levels or rely on a global state.",-1),V=e("h3",null,"Inside component",-1),k=e("h3",null,"How to use",-1),y=`<script lang="ts" setup>
import { provide, shallowRef } from 'vue'
import { iConfig } from '~/interfaces/config.interface.ts'

const props = withDefaults(defineProps<{
  options?: iConfig
}>(), {
  options: () => ({
    allFieldsClearable: false
  })
})

const globalOptions = shallowRef(props.options)
provide('globalOptions', globalOptions)
<\/script>

<template>
  <slot />
</template>`,B=`<global-provide-config :options="{ allFieldsClearable: false }">
  <component :is="layout">
    <router-view />
  </component>
</global-provide-config>`,D=`<global-provide-config :options="{ allFieldsClearable: false }">
  <your-component />
</global-provide-config>`,j=f({__name:"ConfigProviderView",setup(N){const l=b("globalOptions",{allFieldsClearable:!1}),i=u();return(S,a)=>{const p=x,c=F,r=w,_=m,t=d;return v(),g("div",$,[O,o(_,{class:"mb-8"},{default:s(()=>[o(c,{label:"Example:"},{default:s(()=>[o(p,{"model-value":"John Doe"})]),_:1}),o(r,{class:"mr-4",onClick:a[0]||(a[0]=E=>n(i).$patch({allFieldsClearable:!n(l).allFieldsClearable}))},{default:s(()=>[h("Make field clearable")]),_:1}),e("span",null,C(n(l)),1)]),_:1}),V,o(t,{code:y,text:"global-provide-config.vue"}),k,o(t,{code:B,text:"App.vue"}),o(t,{code:D,text:"YourComponents.vue"})])}}});export{j as default};
