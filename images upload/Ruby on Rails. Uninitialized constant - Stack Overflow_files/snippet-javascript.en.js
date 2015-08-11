!function(e,t,n){function i(e){return this._state={"html":null,"css":null,"js":null,"hide":!1},this._readonly=!1,this._codeArea=null,this._snip=null,this._menu=null,this._footer=null,this._jQuerySelect=null,this._d3Select=null,this._knockoutSelect=null,this._angularJSSelect=null,this._hide=!1,this._boxHtml=null,this._boxCss=null,this._boxJs=null,this._boxResult=null,this._codeMirrorHtml=null,this._codeMirrorCss=null,this._codeMirrorJs=null,e.readonly!==n&&e.readonly&&(this._readonly=!0),this}function a(){return this._state={"html":null,"css":null,"js":null,"hide":!1},this._menu=null,this._snip=null,this._results=null,this._boxResult=null,this}function r(e,t,n){return e.replace(/^(?=.)/gm,new Array(t*n+1).join(" "))}function o(e){var t="\n\n<!-- begin snippet: js hide: "+e.hide+" -->\n\n";return""!=e.js&&(t+="<!-- language: lang-js -->\n\n"+r(e.js,1,4)+"\n\n"),""!=e.css&&(t+="<!-- language: lang-css -->\n\n"+r(e.css,1,4)+"\n\n"),""!=e.html&&(t+="<!-- language: lang-html -->\n\n"+r(e.html,1,4)+"\n\n"),t+="<!-- end snippet -->\n\n"}function s(e,t){var n=/<!--\s+language:\s*lang-js\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,i=/<!--\s+language:\s*lang-css\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,a=/<!--\s+language:\s*lang-html\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi;try{var r=n.exec(e),o=i.exec(e),s=a.exec(e),l="",c="",u="";if(null!=r&&(l=r[1].trim().replace(/^    /gm,"")),null!=o&&(c=o[1].trim().replace(/^    /gm,"")),null!=s&&(u=s[1].trim().replace(/^    /gm,"")),""==l&&""==c&&""==u)return null;var d={"js":l,"css":c,"html":u,"hide":t};return d}catch(f){return null}}function l(e){if(!StackExchange.snippets.renderer)return e;var t="sandbox"in document.createElement("iframe");if(!t)return e;var n=/<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi;return e=e.replace(n,function(e,t,n){return StackExchange.snippets.renderer(n,t)})}function c(){StackExchange.snippets.renderer&&StackExchange.snippets.redraw||(StackExchange.snippets.redraw=function(){e("div.snippet").each(function(){var t=e(this);return t.closest(".downvoted-answer").length>0?!0:(u(t),void 0)})},StackExchange.snippets.renderer=function(t,n){n||(n=!1);var i=s(t,n);if(null==i)return t;var a=e('<div class="snippet" data-lang="js" data-hide="'+n+'"></div>'),r=e('<div class="snippet-code"></div>');n&&r.addClass("snippet-currently-hidden"),a.append(r),""!=i.js&&r.append(e('<pre class="snippet-code-js lang-js prettyprint-override">').append(e("<code>").text(i.js))),""!=i.css&&r.append(e('<pre class="snippet-code-css lang-css prettyprint-override">').append(e("<code>").text(i.css))),""!=i.html&&r.append(e('<pre class="snippet-code-html lang-html prettyprint-override">').append(e("<code>").text(i.html)));var o=d();return r.snippet({"state":i}),h[o]=a,"<pre>"+o+"</pre>"},StackExchange.snippets.redraw())}function u(t){var n=t.find(".snippet-code");0==n.length&&(n=t);var i=n.find("pre.snippet-code-js").text(),a=n.find("pre.snippet-code-css").text(),r=n.find("pre.snippet-code-html").text(),o={"js":i,"css":a,"html":r};if(n.snippet({"state":o}),(StackExchange.options.user.isAnonymous||0==t.parent().length||0==e("textarea#wmd-input").length||e(".popup-suggested-edit").length)&&t.find(".copySnippet").hide(),t.data("hide")===!0){n.hide(),n.addClass("snippet-currently-hidden"),t.find(".snippet-display").remove();var s=e('<div class="snippet-display" style="vertical-align: center"></div>').append(e("<p></p>").append(e('<a class="snippet-show-link-chevron"><span class="expander-arrow-hide" style="vertical-align: middle;"></span><a class="snippet-show-link"><span class="show-hide" data-ishidden="true" style="vertical-align: middle">Show code snippet</span></a>')));s.click(function(){n.toggle();var t=e(this).find(".show-hide");t.data("ishidden")===!0?(t.text("Hide code snippet"),e(this).find(".expander-arrow-hide").removeClass("expander-arrow-hide").addClass("expander-arrow-show"),t.data("ishidden",!1)):(t.text("Show code snippet"),e(this).find(".expander-arrow-show").removeClass("expander-arrow-show").addClass("expander-arrow-hide"),t.data("ishidden",!0))}),t.prepend(s)}else n.show(),n.removeClass("snippet-currently-hidden"),t.find(".snippet-display").remove()}var d=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(),f=StackExchange.options.snippets.domain;e.fn.snippet=function(r){return r=r||{},this.each(function(){var o=e(this),s=o.data("_snippet");if(!s){var l=r.markdownPluginMode!==n&&r.markdownPluginMode;if(s=l?new i(r):new a(r),l){var c=function(){s.generate(o),s.resize(),e(t).resize(function(){s.resize()}),o.data("_snippet",s),r.resize!==n&&r.resize&&s.resize(),r.state!==n&&null!=r.state&&s.load(r.state)};StackExchange.using("snippetsJsCodeMirror",function(){setTimeout(c,1)})}else s.generate(o),o.data("_snippet",s),r.resize!==n&&r.resize&&s.resize(),r.state!==n&&null!=r.state&&s.load(r.state)}})},i.prototype={"createExternalLibSelect":function(t,n){var i=e('<select class="snippet-menu-select"></select>').append('<option value="">No '+t+"</option>");return e.each(n,function(e,n){i.append('<option value="'+n+'">'+t+" "+n+"</option>")}),i},"registerExternalLibChange":function(t,n,i,a){t.change(function(){var t=e(this).val(),r=a.getValue(),o=!1,s=n.replace("*version*",t);return r=r.replace(i,function(){return o=!0,""==t&&(s=""),s}),r=r.trim(),o?(a.setValue(r),void 0):(""!=t&&(a.setValue(s+"\n"+r),a.save()),void 0)})},"generate":function(t){var n=this;if(n._snip)return n._snip;var i=e('<div class="popup-close"><a title="close this popup (or hit Esc)">×</a></div>').click(function(t){return StackExchange.helpers.closePopups(e(this).closest(".popup"),"esc"),t.preventDefault(),!1}),a=["2.1.1","2.1.0","2.0.3","2.0.2","2.0.1","2.0.0","1.11.1","1.11.0","1.10.2","1.10.1","1.10.0","1.9.1","1.9.0","1.8.3","1.8.2","1.8.1","1.8.0","1.7.2","1.7.1","1.7.0","1.6.4","1.6.3","1.6.2","1.6.1","1.6.0","1.5.2","1.5.1","1.5.0","1.4.4","1.4.3","1.4.2","1.4.1","1.4.0","1.3.2","1.3.1","1.3.0","1.2.6","1.2.3"];n._jQuerySelect=n.createExternalLibSelect("jQuery",a);var r=["3.4.11","3.4.10","3.4.9","3.4.8","3.4.7","3.4.6","3.4.5","3.4.4","3.4.3","3.4.2","3.4.1","3.4.0","3.3.13","3.3.12","3.3.11","3.3.10","3.3.9","3.3.8","3.3.7","3.3.6","3.3.5","3.3.4","3.3.3","3.3.2","3.3.1","3.3.0","3.2.8","3.2.7","3.2.6","3.2.5","3.2.4","3.2.3","3.2.2","3.2.1","3.2.0","3.1.10","3.1.9","3.1.8","3.1.7","3.1.6","3.1.5","3.1.4","3.1.3","3.1.2","3.1.1","3.1.0","3.0.8","3.0.7","3.0.6","3.0.5","3.0.4","3.0.3","3.0.2","3.0.1","3.0.0","2.10.0","2.8.1","2.7.5","2.7.4","2.7.3","2.7.2","2.7.0","2.6.0","2.5.2","2.5.1","2.4.2","2.4.1","2.4.0","2.3.4","2.3.3","2.3.2","2.3.0","2.2.1","2.1.3"];n._d3Select=n.createExternalLibSelect("d3",r);var o=["3.2.0","3.1.0","3.0.0","2.3.0","2.2.1","2.2.0","2.1.0","2.0.0","1.2.1"];n._knockoutSelect=n.createExternalLibSelect("Knockout",o);var s=["1.2.23","1.2.22","1.2.21","1.2.20","1.2.19","1.2.18","1.2.17","1.2.16","1.2.15","1.2.14","1.2.13","1.2.12","1.2.11","1.2.10","1.2.9","1.2.8","1.2.7","1.2.6","1.2.5","1.2.4","1.2.3","1.2.2","1.2.1","1.2.0","1.0.8","1.0.7","1.0.6","1.0.5","1.0.4","1.0.3","1.0.2","1.0.1"];n._angularJSSelect=n.createExternalLibSelect("AngularJS",s);var l=e('<a class="snippet-menu-button">external library</a>');n._menu=e('<div class="snippet-menu"></div>');var c=e('<div style="float: left;"></div>'),u=e('<div style="float: right;"></div>'),f=e('<div style="clear: both;"></div>');n._menu.append(c).append(u).append(f),n._readonly||c.append(n._jQuerySelect).append(n._d3Select).append(n._knockoutSelect).append(n._angularJSSelect).append(l),u.append(i),n._boxHtml=e('<textarea class="snippet-box-edit" spellcheck="false"></textarea>'),n._boxCss=e('<textarea class="snippet-box-edit" spellcheck="false"></textarea>'),n._boxJs=e('<textarea class="snippet-box-edit" spellcheck="false"></textarea>'),n._boxResult=e('<iframe name="'+d()+'" sandbox="allow-scripts" class="snippet-box-edit" frameBorder="0"></iframe>'),e.each([n._boxHtml,n._boxCss,n._boxJs,n._boxResult],function(t,n){n.focus(function(){e(this).parent().children(".snippet-box-label").fadeOut()}).blur(function(){e(this).parent().children(".snippet-box-label").fadeIn()})}),n._codeArea=e('<div class="snippet-code-area"></div>').append(e('<table class="snippet-code-area-table"></table>').append(e("<tbody></tbody>").append(e("<tr></tr>").append(e('<td class="snippet-box-top snippet-box-left"></td>').append(e('<div class="snippet-box-container"></div>').append(n._boxHtml).append('<div class="snippet-box-label">HTML</div>'))).append(e('<td class="snippet-box-top snippet-box-right"></td>').append(e('<div class="snippet-box-container"></div>').append(n._boxCss).append('<div class="snippet-box-label">CSS</div>')))).append(e("<tr></tr>").append(e('<td class="snippet-box-bottom snippet-box-left"></td>').append(e('<div class="snippet-box-container"></div>').append(n._boxJs).append('<div class="snippet-box-label">JavaScript</div>'))).append(e('<td class="snippet-box-bottom snippet-box-right"></td>').append(e('<div class="snippet-box-container"></div>').append(n._boxResult).append('<div class="snippet-box-label">Result</div>'))))));var h=e('<input type="button" value="&#x25ba; Run"></input>').click(function(){n.run()}),p=e('<input type="button" value="Tidy" style="margin-left: 5px;"></input>').click(function(){n._codeMirrorHtml.setValue(html_beautify(n._codeMirrorHtml.getValue(),{"indent_size":2,"indent_char":" "})),n._codeMirrorCss.setValue(css_beautify(n._codeMirrorCss.getValue(),{"indent_size":2,"indent_char":" "})),n._codeMirrorJs.setValue(js_beautify(n._codeMirrorJs.getValue(),{"indent_size":2,"indent_char":" "}))}),g=e('<input type="button" value="Insert into Post" style="margin-left: 5px;"></input>').click(function(){StackExchange.helpers.closePopups(e(".popup-snippet"))}),m=e('<input type="button" value="Reset" style="margin-left: 5px;"></input>').click(function(){n.clear()}),v=d();n._hide=e('<input type="checkbox" id="'+v+'" name="hideByDefault" value="true" style="margin: 0 5px 0 20px;"></input>');var b=e('<label for="'+v+'"></label>').text("Hide snippet by default (you should include the relevant code above the snippet)");n._footer=e('<div class="snippet-footer"></div>'),n._footer.append(e('<div class="snippet-footer-content"></div>').append(n._hide).append(b)).append(e('<div class="snippet-footer-content"></div>').append(h).append(p).append(g).append(m)),n._snip=e('<div class="snippet-holder"></div>').append(n._menu).append(n._codeArea).append(n._footer),t.empty().append(n._snip),n._codeMirrorHtml=CodeMirror.fromTextArea(n._boxHtml[0],{"electricChars":!1,"lineNumbers":!0,"lineWrapping":!0,"mode":"htmlmixed","extraKeys":{"Tab":function(e){var t=Array(e.getOption("indentUnit")+1).join(" ");e.replaceSelection(t)}},"readOnly":n._readonly}),n._codeMirrorCss=CodeMirror.fromTextArea(n._boxCss[0],{"electricChars":!1,"lineNumbers":!0,"lineWrapping":!0,"mode":"css","extraKeys":{"Tab":function(e){var t=Array(e.getOption("indentUnit")+1).join(" ");e.replaceSelection(t)}},"readOnly":n._readonly}),n._codeMirrorJs=CodeMirror.fromTextArea(n._boxJs[0],{"electricChars":!1,"lineNumbers":!0,"lineWrapping":!0,"mode":"javascript","extraKeys":{"Tab":function(e){var t=Array(e.getOption("indentUnit")+1).join(" ");e.replaceSelection(t)}},"readOnly":n._readonly}),n._codeMirrorHtml.on("change",function(){n._codeMirrorHtml.save()}),n._codeMirrorCss.on("change",function(){n._codeMirrorCss.save()}),n._codeMirrorJs.on("change",function(){n._codeMirrorJs.save()}),n.registerExternalLibChange(n._jQuerySelect,'<script src="https://ajax.googleapis.com/ajax/libs/jquery/*version*/jquery.min.js"></script>',/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/.*?\/jquery\.min\.js"><\/script>/gim,n._codeMirrorHtml),n.registerExternalLibChange(n._d3Select,'<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/*version*/d3.min.js"></script>',/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/d3\/.*?\/d3\.min\.js"><\/script>/gim,n._codeMirrorHtml),n.registerExternalLibChange(n._knockoutSelect,'<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/*version*/knockout-min.js"></script>',/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/knockout\/.*?\/knockout-min\.js"><\/script>/gim,n._codeMirrorHtml),n.registerExternalLibChange(n._angularJSSelect,'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/*version*/angular.min.js"></script>',/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/angularjs\/.*?\/angular\.min\.js"><\/script>/gim,n._codeMirrorHtml),l.click(function(){function e(e,t){return e.length<t.length?!1:(e=e.toLowerCase(),0!=e.indexOf("https://")&&0!=e.indexOf("http://")&&0!=e.indexOf("//")?!1:e.substr(e.length-t.length,t.length).toLowerCase()==t.toLowerCase()?!0:!1)}var t=prompt("Please enter the URL of an external JS or CSS file");if(null!=t&&""!=t&&""!=t.trim()){var i=n._codeMirrorHtml.getValue();if(e(t,".css")){var a='<link href="'+t+'" rel="stylesheet"/>';n._codeMirrorHtml.setValue(a+"\n"+i)}else if(e(t,".js")){var a='<script src="'+t+'"></script>';n._codeMirrorHtml.setValue(a+"\n"+i)}else alert("Sorry, but that resource is invalid. Resources must begin with http:// or https:// and allowed extensions are: .css, .js")}}),e.each([n._codeMirrorHtml,n._codeMirrorCss,n._codeMirrorJs],function(t,n){n.on("focus",function(){e(n.getInputField()).closest(".snippet-box-container").children(".snippet-box-label").fadeOut()}),n.on("blur",function(){e(n.getInputField()).closest(".snippet-box-container").children(".snippet-box-label").fadeIn()})})},"run":function(){this.save(),this.writeResult()},"load":function(e){null!=e.html&&(this._state.html=e.html,this._boxHtml.val(e.html)),null!=e.css&&(this._state.css=e.css,this._boxCss.val(e.css)),null!=e.js&&(this._state.js=e.js,this._boxJs.val(e.js)),null!=e.hide&&(this._state.hide=e.hide,e.hide===!0&&this._hide.prop("checked",e.hide)),this._codeMirrorHtml.setValue(e.html),this._codeMirrorCss.setValue(e.css),this._codeMirrorJs.setValue(e.js);var t=null,n=this._codeMirrorHtml.getValue();t=/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/jquery\/(.*?)\/jquery\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._jQuerySelect.val(t[1]),t=/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/d3\/(.*?)\/d3\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._d3Select.val(t[1]),t=/^<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/knockout\/(.*?)\/knockout-min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._knockoutSelect.val(t[1]),t=/^<script src="https:\/\/ajax\.googleapis\.com\/ajax\/libs\/angularjs\/(.*?)\/angular\.min\.js"><\/script>/gim.exec(n),t&&t.length>1&&this._angularJSSelect.val(t[1])},"clear":function(){this._boxHtml.val(""),this._boxCss.val(""),this._boxJs.val(""),this._jQuerySelect.val(""),this._d3Select.val(""),this._knockoutSelect.val(""),this._angularJSSelect.val(""),this._hide.prop("checked",!1);var t="";null!=f&&(t="//"+f);var n=t+"/js",i=e('<form style="display: none;" action="'+n+'" method="GET" target="'+this._boxResult.attr("name")+'"></form>').appendTo("body");i.submit(),this._codeMirrorHtml.setValue(""),this._codeMirrorCss.setValue(""),this._codeMirrorJs.setValue("")},"save":function(){var e=this;return e._state.html=e._boxHtml.val(),e._state.css=e._boxCss.val(),e._state.js=e._boxJs.val(),e._state.hide=e._hide.prop("checked"),e._state},"writeResult":function(){var t=this,n=t._state.css,i=t._state.js,a=t._state.html;if(""!=n||""!=i||""!=a){var r="";null!=f&&(r="//"+f);var o=r+"/js",s=e('<form style="display: none;" action="'+o+'" method="POST" target="'+t._boxResult.attr("name")+'"></form>').append(e("<textarea></textarea>",{"name":"js","value":i}),e("<textarea></textarea>",{"name":"css","value":n}),e("<textarea></textarea>",{"name":"html","value":a})).appendTo("body");s.submit(),s.remove()}},"resize":function(){var e=this._menu.outerHeight(!0),t=this._footer.outerHeight(!0),n=this._snip.height()-e-t;this._codeArea.css({"height":n}),this._codeMirrorHtml.refresh(),this._codeMirrorCss.refresh(),this._codeMirrorJs.refresh()}},a.prototype={"generate":function(t){var n=this;if(n._snip)return n._snip;n._boxResult=e('<iframe name="'+d()+'" sandbox="allow-scripts" class="snippet-box-edit" frameBorder="0"></iframe>'),n._snip=!0;var i=e('<input type="button" value="&#x25ba; Run code snippet" style="margin: 1em 0 1em 0.5em; float: none;"></input>').click(function(){n.run()}),a=e('<input class="hideResults" type="button" value="Hide results" style="margin: 1em 0 1em 0.5em; float: none;"></input>').click(function(){n.hide()});a.hide();var r=e('<input class="copySnippet" type="button" value="Copy snippet to answer" style="margin: 1em 0 1em 0.5em; float: none;"></input>').click(function(){var t=e("#show-editor-button"),i=e("#post-editor").find("textarea.wmd-input");if(t.is(":visible")){var a=t.offset().top;e("html").animate({"scrollTop":a-60}),e("body").animate({"scrollTop":a-60},{"complete":function(){t.children("input").click()}})}else{var r=i.offset().top;e("html, body").animate({"scrollTop":r-60})}var s=n._state,l=o(s);i.val(i.val()+"\n\n"+l),StackExchange.MarkdownEditor.refreshAllPreviews()}),s=e('<div style="width: 100%; margin: 0px 5px;"></div>').append(i).append(r).append(a);n._results=e('<div style="position: relative; width: 100%; height: 200px; border-top: 1px solid #AAAAAA;"></div>').append(n._boxResult),n._results.hide();var l=e('<div class="snippet-result" style="width: 100%; border: 1px solid #AAAAAA;"></div>').append(s).append(n._results);return t.append(l),n._snip},"run":function(){var t=this;t._boxResult||(t._boxResult=e('<iframe name="'+d()+'" sandbox="allow-scripts" class="snippet-box-edit" frameBorder="0"></iframe>'),t._results.append(t._boxResult)),t._boxResult.parent().is(":hidden")&&(t._boxResult.closest(".snippet-result").find(".hideResults").css("display",""),t._boxResult.parent().slideDown(200,function(){var n=e('<div class="popout" style="position: absolute; top: 20px; right: 20px; padding: 3px; border: 1px solid #AAAAAA; background-color: #FFFFFF;"><a>Full page</a></div>'),i=e('<div class="popin" style="position: fixed; top: 35px; right: 35px; padding: 3px; border: 1px solid #AAAAAA; background-color: #FFFFFF; z-index: 10001"><a>Close</a></div>').hide();n.click(function(){t._boxResult.data("_style",t._boxResult.attr("style")),t._boxResult.css({"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","background-color":"#FFFFFF","z-index":1e4}),t._boxResult.parent().css("position",""),e(this).hide(),i.show(),e("body").css("overflow","hidden")}),i.click(function(){t._boxResult.removeAttr("style"),t._boxResult.attr("style",t._boxResult.data("_style")),t._boxResult.parent().css("position","relative"),e(this).hide(),n.show(),e("body").css("overflow","")}),e(this).append(n).append(i)})),this.writeResult()},"hide":function(){var t=this;t._boxResult.parent().is(":visible")&&(t._boxResult.closest(".snippet-result").find(".hideResults").hide(),t._boxResult.parent().children(".popout").remove(),t._boxResult.parent().children(".popin").remove(),t._boxResult.parent().slideUp(200,function(){e(this).hide(),t._boxResult.remove(),delete t._boxResult}))},"load":function(e){null!=e.css&&(this._state.css=e.css),null!=e.js&&(this._state.js=e.js),null!=e.html&&(this._state.html=e.html),null!=e.hide&&(this._state.hide=e.hide)},"writeResult":function(){var t=this,n=t._state.css,i=t._state.js,a=t._state.html;if(""!=n||""!=i||""!=a){var r="";null!=f&&(r="//"+f);var o=r+"/js",s=e('<form style="display: none;" action="'+o+'" method="POST" target="'+t._boxResult.attr("name")+'"></form>').append(e("<textarea></textarea>",{"name":"js","value":i}),e("<textarea></textarea>",{"name":"css","value":n}),e("<textarea></textarea>",{"name":"html","value":a})).appendTo("body");s.submit(),s.remove()}},"resize":function(){}};var h={};StackExchange.snippets=function(){function t(e,t,n,i,a){function r(e,t,n){for(var i=-1,a=-1;;){if(a=t.indexOf(e,a+1),-1==a)break;(0>i||Math.abs(a-n)<Math.abs(a-i))&&(i=a)}return i}return e.replace(/<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi,function(e,o,s,l){var c={"payload":{"code":s,"hide":null!=o&&"true"===o.toLowerCase()},"pos":r(e,t,l),"len":e.length};return-1===c.pos?e:(a.push(c),e+"\n\n"+n+i+"-"+(a.length-1)+"%")})}function n(){c(),StackExchange.externalEditor&&i&&(i=!1,StackExchange.externalEditor.init({"thingName":"snippet","thingFinder":t,"getDivContent":function(t){var n=null;t&&(n=s(t.code,t.hide));var i=e('<div class="popup popup-snippet" style="display: block; padding: 0; width: 100%; height: 100%; text-align: left;"></div>');return i.snippet({"markdownPluginMode":!0,"state":n}),i},"buttonTooltip":"JavaScript/HTML/CSS snippet","buttonImageUrl":"/content/balsamiq/wmd-mockup-button.png?v=4","onShow":function(t){var n=e(".popup-snippet"),i=function(e){var i=n.data("_snippet").save();if(e||""==i.html&&""==i.css&&""==i.js)t(null);else{var a=o(i);t(a,a)}};n.on("popupClosing",function(e){var t="esc"==e.closeTrigger;return t&&!confirm("Are you sure you want to abandon any changes?")?(e.preventDefault(),void 0):(i(t),void 0)})}})),StackExchange.MarkdownEditor&&StackExchange.MarkdownEditor.creationCallbacks.add(function(t,n){var i=t.getConverter().hooks;i.chain("preConversion",l);var a=e("#wmd-preview"+n);a.on("wmdrefresh",function(){a.find("pre").each(function(){var t=e(this),n=t.text();if(h[n]){var i=h[n];delete h[n],u(i),t.replaceWith(e("<p></p>").append(i))}})})})}var i=!0;return{"init":n,"initSnippetRenderer":c,"makeSnippets":l}}()}(jQuery,window);