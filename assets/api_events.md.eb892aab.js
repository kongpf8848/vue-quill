import{_ as e,o as t,c as a,R as n}from"./chunks/framework.ddd7a9a9.js";const m=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"api/events.md","filePath":"api/events.md"}'),o={name:"api/events.md"},r=n('<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><h2 id="textchange" tabindex="-1">@textChange <a class="header-anchor" href="#textchange" aria-label="Permalink to &quot;@textChange&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>{ delta: Delta, oldContents: Delta, source: Sources }</code></p><p>Triggered when the text changes</p></li></ul><h2 id="selectionchange" tabindex="-1">@selectionChange <a class="header-anchor" href="#selectionchange" aria-label="Permalink to &quot;@selectionChange&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>{ range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p><p>Triggered when the selections changes</p></li></ul><h2 id="editorchange" tabindex="-1">@editorChange <a class="header-anchor" href="#editorchange" aria-label="Permalink to &quot;@editorChange&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong></p><ul><li><p><code>{ name: &#39;text-change&#39;, delta: Delta, oldContents: Delta, source: Sources}</code></p><p><strong>OR</strong></p></li><li><p><code>{ name: &#39;selection-change&#39;, range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p></li></ul><p>Triggered when the editor changes, either <code>text-change</code> or <code>selection-change</code></p></li></ul><h2 id="update-content" tabindex="-1">@update:content <a class="header-anchor" href="#update-content" aria-label="Permalink to &quot;@update:content&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>content: Delta</code></p><p>Triggered when the editor content changes</p></li></ul><h2 id="focus" tabindex="-1">@focus <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;@focus&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor gains focus.</p></li></ul><h2 id="blur" tabindex="-1">@blur <a class="header-anchor" href="#blur" aria-label="Permalink to &quot;@blur&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor loses focus.</p></li></ul><h2 id="ready" tabindex="-1">@ready <a class="header-anchor" href="#ready" aria-label="Permalink to &quot;@ready&quot;">​</a></h2><ul><li><p><strong>Arguments:</strong> <code>quill: Quill</code></p><p>Triggered after <code>Quill</code> initialization.</p></li></ul>',15),l=[r];function i(c,s,d,h,g,u){return t(),a("div",null,l)}const _=e(o,[["render",i]]);export{m as __pageData,_ as default};
