import{o as p,a as i,j as e,c as l}from"./index.BSHcnaqT.js";import{c as u,p as b}from"./persist.Bc5jZ15S.js";import{O as x}from"./local-storage.DCJdSzu0.js";import{m}from"./motion.CuwXudW8.js";import"./index.SSXOyoI7.js";const g={type:"spring",duration:.4,bounce:.21},h=["npm","yarn","pnpm","bun"],c=p({packageManager:"npm",exampleCount:0,exampleTheme:"light"});typeof window<"u"&&(u({pluginLocal:x}),b(c,{local:"state"}));const f=i(function({name:a,layoutId:t,text:n,activeTab$:s}){const o=a===s.get();return e.jsxs("div",{className:"relative px-1 pb-1 mx-2 !mt-0 cursor-pointer ",onClick:()=>s.set(a),children:[e.jsx("div",{"data-text":n,className:l("bold-consistent-width",o&&"text-blue-accent font-bold"),children:n}),o&&e.jsx(m.div,{layoutId:t,className:"absolute inset-x-0 bottom-0 h-1 rounded bg-blue-accent",transition:g})]})}),j=i(function({name:a,tabs:t,tabTexts:n,activeTab$:s,className:o}){return s.get()||t[0],e.jsx(m.div,{className:l("flex items-center",o),layout:!0,children:t.map((r,d)=>e.jsx(f,{layoutId:a,name:r,text:n?.[d]||r,activeTab$:s},r))})}),O=i(function({name:a,className:t,uid:n}){const s=c.packageManager.get();return e.jsxs("div",{className:l("mt-6",t),children:[e.jsx(j,{name:a+(n||""),tabs:h,activeTab$:c.packageManager}),e.jsx("pre",{className:"!mt-4 astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},children:e.jsx("code",{className:"language-bash code-highlight",children:e.jsxs("span",{className:"code-line",children:[e.jsx("span",{className:"token function",children:s})," ",e.jsx("span",{className:"token function",children:s==="npm"?"i":"add"})," "+a]})})})]})});export{O as Install};
