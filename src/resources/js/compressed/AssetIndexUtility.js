!function(a){Craft.AssetIndexUtility=Garnish.Base.extend({$trigger:null,$form:null,$innerProgressBar:null,toolClass:null,optionsHtml:null,buttonLabel:null,hud:null,totalActions:null,completedActions:null,loadingActions:null,queue:null,init:function(b){this.$form=a("#"+b),this.$submitBtn=a("input.submit",this.$form),this.$status=a(".utility-status",this.$form),this.addListener(this.$form,"submit","onSubmit")},onSubmit:function(b){b.preventDefault(),this.$submitBtn.hasClass("disabled")||(this.progressBar?this.progressBar.resetProgressBar():this.progressBar=new Craft.ProgressBar(this.$status),this.totalActions=1,this.completedActions=0,this.queue=[],this.loadingActions=0,this.currentBatchQueue=[],this.progressBar.$progressBar.css({top:Math.round(this.$status.outerHeight()/2)-6}).removeClass("hidden"),this.progressBar.$progressBar.velocity("stop").velocity({opacity:1},{complete:a.proxy(function(){var a=Garnish.getPostData(this.$form),b=Craft.expandPostArray(a);b.start=!0,this.loadAction({params:b})},this)}),this.$allDone&&this.$allDone.css("opacity",0),this.$submitBtn.addClass("disabled"),this.$submitBtn.blur())},updateProgressBar:function(){var a=100*this.completedActions/this.totalActions;this.progressBar.setProgressPercentage(a)},loadAction:function(a){this.loadingActions++,"undefined"!=typeof a.confirm&&a.confirm?this.showConfirmDialog(a):this.postActionRequest(a.params)},showConfirmDialog:function(b){var c=a('<form class="modal fitted confirmmodal"/>').appendTo(Garnish.$bod),d=a('<div class="body"/>').appendTo(c).html(b.confirm),e=a('<footer class="footer"/>').appendTo(c),f=a('<div class="buttons right"/>').appendTo(e),g=a('<div class="btn">'+Craft.t("app","Cancel")+"</div>").appendTo(f);a('<input type="submit" class="btn submit" value="'+Craft.t("app","OK")+'"/>').appendTo(f);Craft.initUiElements(d);var h=new Garnish.Modal(c,{onHide:a.proxy(this,"onActionResponse")});this.addListener(g,"click",function(){h.hide()}),this.addListener(c,"submit",function(c){c.preventDefault(),h.settings.onHide=a.noop,h.hide();var e=Garnish.getPostData(d),f=Craft.expandPostArray(e);a.extend(f,b.params),this.postActionRequest(f)})},postActionRequest:function(b){var c={tool:this.toolClass,params:b};Craft.postActionRequest("utilities/asset-index-perform-action",c,a.proxy(this,"onActionResponse"),{complete:a.noop})},onActionResponse:function(b,c){if(this.loadingActions--,this.completedActions++,"success"==c&&b&&b.batches)for(var d=0;d<b.batches.length;d++)b.batches[d].length&&(this.totalActions+=b.batches[d].length,this.queue.push(b.batches[d]));for(b&&b.error&&alert(b.error),this.updateProgressBar();this.loadingActions<Craft.AssetIndexUtility.maxConcurrentActions&&this.currentBatchQueue.length;)this.loadNextAction();this.loadingActions||(this.queue.length?(this.currentBatchQueue=this.queue.shift(),this.loadNextAction()):setTimeout(a.proxy(this,"onComplete"),300))},loadNextAction:function(){var a=this.currentBatchQueue.shift();this.loadAction(a)},onComplete:function(){this.$allDone||(this.$allDone=a('<div class="alldone" data-icon="done" />').appendTo(this.$status),this.$allDone.css("opacity",0)),this.progressBar.$progressBar.velocity({opacity:0},{duration:"fast",complete:a.proxy(function(){this.$allDone.velocity({opacity:1},{duration:"fast"}),this.$submitBtn.removeClass("disabled"),this.$submitBtn.focus()},this)}),Craft.cp.runPendingTasks()}},{maxConcurrentActions:3})}(jQuery);
//# sourceMappingURL=AssetIndexUtility.js.map