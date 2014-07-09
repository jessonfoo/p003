(function(){App.ns("Controls.CodeChallenges.DiscussController",App.Control({init:function(){return this.element.renderViews(),new App.Controls.CodeChallengeInfoAreas(this.element),new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),this.trackingName="CC-Discuss",this.track("Loaded")},events:{"#solutions click":function(e,t){return App.Controls.CodeChallenges.confirmSolutionsClick(e,t)}},track:function(e,t){return t==null&&(t={}),t.language=App.data.activeLanguage,this._super(e,t)}}))}).call(this),function(){var e;App.ns("Controls.CodeChallenges.EditorController",App.Control({init:function(){var t;this.element.renderViews(),e(),App.DjaxRequest.register(),$("form")[0].reset(),this.outputPanel=new App.Controls.OutputPanel("#code_results",{showClose:!0}),t={change:function(e){return function(t){if(t.isDirty()&&!e.languageBeingSet)return e.dirty=!0}}(this),stashGroup:App.data.id||"newkata"},this.cache=kizzy(t.stashGroup),this.codeSetup=new App.Controls.TextEditor("#code_setup",t),this.codeAnswer=new App.Controls.TextEditor("#code_answer",t),this.codeFixture=new App.Controls.TextEditor("#code_fixture",t),this.codeExampleFixture=new App.Controls.TextEditor("#code_example_fixture",t),this.codePackage=new App.Controls.TextEditor("#code_package",t),this.editors=[this.codeSetup,this.codeAnswer,this.codeFixture,this.codeExampleFixture,this.codePackage],this.markdownEditor=new App.Controls.MarkdownEditor("#description",{stashGroup:t.stashGroup}),this.cache.isEmpty()?this.setLanguage():App.confirmModal.show({titleHtml:"We found un-saved edits",messageHtml:"You have local edits that have not been saved. What would you like to do with them?",cancelHtml:"Discard",confirmHtml:"Keep",cancel:function(e){return function(){return e.emptyStashes(),e.setLanguage()}}(this),confirm:function(e){return function(){return e.dirty=!0,e.setLanguage()}}(this)}),this.dirty=!1,App.data.id!==this.previousId&&(this.track("Loaded"),this.previousId=App.data.id);if(App.data.showIntro&&!this.options.reinit)return $.wait(1e3,function(){return introJs().start()})},events:{"window beforeunload":function(e,t){if(this.dirty&&!App.ignoreConfirm)return t.preventDefault(),"You risk losing your progress!"},"window keydown":function(e,t){if(t.keyCode===8&&!$(t.target).is("input, textarea"))return t.preventDefault(),!1;if(t.keyCode===83&&t.metaKey)return this.save(),this.track("Save Command Keyed"),t.preventDefault(),!1},"#validate_answer click":function(e,t){return t.preventDefault(),this.validateCode(this.codeAnswer.getValue()),this.track("Validate Code Clicked",{answer:this.codeAnswer.getValue()})},"#code_answer texteditor.submit":function(){return this.validateCode(this.codeAnswer.getValue())},"#code_fixture texteditor.submit":function(){return this.validateCode(this.codeAnswer.getValue())},"#insert_example click":function(e,t){return t.preventDefault(),this.insertExample($("#code_challenge_category").val()),this.track("Insert Example Clicked")},"#my_katas a click":function(e,t){return t.preventDefault(),t.stopPropagation(),this.confirmIfDirty(function(){return App.load({url:e.attr("href")})})},"#categories li click":function(e,t){return $("#code_challenge_category").val(e.data("value")),$("#categories li").removeClass("is-active"),e.addClass("is-active")},"#language_tabs dd:not(.is-active) a click":function(e,t){return this.setLanguage($(e).data("language"))},"#revert click":function(e,t){return t.preventDefault(),this.emptyStashes(),App.load()},"#save click":function(e,t){return t.preventDefault(),this.save(),this.track("Save Clicked")},"#preview click":function(e,t){var n;return t.preventDefault(),n=function(){return App.load(App.route("preview",{language:App.data.language}))},this.track("Preview Clicked"),this.dirty?App.confirmModal.show({titleHtml:"You have un-saved changes",messageHtml:"You must save your changes before previewing. Do you want to continue?",confirmHtml:"Yes, I want to save changes and continue",confirm:function(e){return function(){return e.submit("save",n)}}(this)}):n()},"#publish click":function(e,t){return t.preventDefault(),this.publish(),this.track("Publish Clicked")},"#unpublish click":function(e,t){return t.preventDefault(),this.submit("unpublish"),this.track("Un-publish Clicked")},"#delete click":function(e,t){return t.preventDefault(),App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> Are you sure you want to delete this code kata?',messageHtml:"You will not be able to undo this action",confirmHtml:"Yes, I want to delete this kata",confirm:function(){return App.load({url:App.route("destroy"),type:"DELETE"})}}),this.track("Delete Clicked")},"#code_answerLabel click":function(){return $.wait(0,function(e){return function(){return e.codeAnswer.refresh(),e.codeAnswer.resize()}}(this))},"#initial_setupLabel click":function(){return $.wait(0,function(e){return function(){return e.codeSetup.refresh(),e.codeSetup.resize()}}(this))},"#code_packageLabel click":function(){return $.wait(0,function(e){return function(){return e.codePackage.refresh(),e.codePackage.resize()}}(this))},"#code_fixtureLabel click":function(){return $.wait(0,function(e){return function(){return e.codeFixture.refresh(),e.codeFixture.resize()}}(this))},"#code_exampleFixtureLabel click":function(){return $.wait(0,function(e){return function(){return e.codeExampleFixture.refresh(),e.codeExampleFixture.resize()}}(this))},"input change":function(){return this.dirty=!0},"textarea change":function(){return this.dirty=!0},"select change":function(){return this.dirty=!0},"#language_tabs a i.remove click":function(e,t){var n,r,i;return t.stopPropagation(),t.preventDefault(),n=e.closest("a").data("language"),r=App.data.languages[n],i=function(t){return function(){var r,i,s,o;$(e).closest("dd").removeClass("has-value"),App.data.languages[n]=null;if(App.data.language===n){o=t.editors;for(i=0,s=o.length;i<s;i++)r=o[i],r.setValue("");return t.setLanguage()}}}(this),r&&r.id?$["delete"](App.route("remove_language",{language:n}),null,function(e){if(e.success)return i()}):i(),this.track("Remove Language Clicked",{language:n})},"#add_current_week_schedule click":function(){return this.addToSchedule("current_week")},"#add_next_week_schedule click":function(){return this.addToSchedule("next_week")},"#remove_current_week_schedules click":function(){return this.removeSchedules("current_week")},"#remove_next_week_schedules click":function(){return this.removeSchedules("next_week")},"#set_as_current_competition click":function(){return $.post(App.route("make_current_competition"),null,function(e){return App.alerts.showResult(e.success,"Kata made the current week's competition")})}},setLanguage:function(e){var t,n;return e==null&&(e=App.data.language),App.data.language=e,n=App.data.languages[e],n||(App.data.languages[e]=n={name:e}),t=function(t,r,i){var s,o,u,a,f,l;r.save(),r.setMode(e),r.setReadOnly(i),r.options.save=function(){return n[t]=r.getValue()},r.setValue(n[t],""+e+"_"+t,!0);if(App.data.languageErrors){$("#languages .has-error").removeClass("has-error");if(App.data.languageErrors[e]){f=App.data.languageErrors[e],l=[];for(u=0,a=f.length;u<a;u++)s=f[u],o="#code_"+s.name,App.ui.setFieldError(o,s.message,{ignoreMsg:!0}),l.push($(".tabs a[href='"+o+"']").closest("dd").addClass("has-error"));return l}}},this.languageBeingSet=!0,t("setup",this.codeSetup),t("answer",this.codeAnswer),t("fixture",this.codeFixture,App.data.fixturesLocked),t("example_fixture",this.codeExampleFixture),t("package",this.codePackage),this.languageBeingSet=!1,this.markdownEditor.setStashId("description"),this.markdownEditor.setLanguage(e),App.replaceHistoryState(App.route("edit",{language:e}))},confirmUnload:function(e,t){return this.confirmIfDirty(e,t)},removeSchedules:function(e){var t;return t=App.route("remove_from_schedules",{timeFrame:e}),App.confirmModal.show({titleHtml:"Confirm remove this kata from all schedules",messageHtml:"This kata will be removed from all of "+e.replace("_"," ")+"'s schedules",confirmHtml:"Sounds Good!",confirm:function(){return $["delete"](t,{},function(e){return function(e){return e.success?App.alerts.success("Kata successfully removed from all schedules"):App.alerts.fail(e.reason)}}(this))}})},addToSchedule:function(e){var t,n;return t=$("#code_challenge_level").val(),n=App.route("add_to_schedule",{timeFrame:e,language:App.data.language,difficulty:t}),App.confirmModal.show({titleHtml:"Confirm add to training schedule",messageHtml:"This kata will be added to the "+e+" "+App.data.language+" schedule with a difficulty of "+t+".",confirmHtml:"Sounds Good!",confirm:function(){return $.post(n,{},function(e){return function(e){return e.success?App.alerts.success("Kata successfully added to training schedule"):App.alerts.fail(e.reason)}}(this))}})},confirmIfDirty:function(e,t){return t==null&&(t=function(){}),this.dirty?App.data.published?App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> You have unsaved changes!',messageHtml:"This kata has already been published. You must re-publish in order to keep the changes you made. What do you want to do?",cancelHtml:"I'll stay and re-publish my changes",confirmHtml:"Discard my changes and continue",cancel:t,confirm:function(t){return function(){return t.emptyStashes(),typeof e=="function"?e():void 0}}(this)}):App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> You have unsaved changes!',messageHtml:"Before we update the page what would you like to do?",altConfirmHtml:"Discard Changes",confirmHtml:"Save Changes",altConfirmClass:"alert",cancel:t,altConfirm:function(t){return function(){return t.emptyStashes(),typeof e=="function"?e():void 0}}(this),confirm:function(t){return function(){var n,r,i,s;s=t.editors;for(r=0,i=s.length;r<i;r++)n=s[r],n.save();return $("form").postForm({url:App.route("save")+".json",success:function(t){if(t.success)return e()}})}}(this)}):e()},save:function(){return App.data.published?this.publish():this.submit("save")},publish:function(){return this.submit("publish",null,function(e){return function(e){if(e.html)return $("body").html(e.html)}}(this)),App.confirmModal.show({hideActions:!0,titleHtml:"<div class='app_loading pam is-left'></div>Please wait while we publish",messageHtml:"We are validating your code and publishing your changes. This shouldn't take too long."})},submit:function(e,t,n){var r,i,s,o;o=this.editors;for(i=0,s=o.length;i<s;i++)r=o[i],r.save();return this.markdownEditor.editor.exitFullScreen(),$("form.simple_form[action]").postForm({pjax:!n,djax:!!n,data:{languages:App.data.languages,language:App.data.language},url:App.route(e),scrollTo:!1,success:function(e){return function(){return e.emptyStashes(),typeof t=="function"?t():void 0}}(this),deferred:n})},emptyStashes:function(){return this.cache.clear()},validateCode:function(e){return this.outputPanel.working("Running..."),App.djax({url:App.route("validate",{language:App.data.language}),data:{solution:e,fixture:this.codeFixture.getValue(),"package":this.codePackage.getValue(),api_version:App.data.apiVersion},deferred:function(e){return function(t){return t.cached?$.get(App.route("djax_cache",{dmid:t.dmid}),function(t){return t?e.outputPanel.showResult(t):(App.log("Failed to return cached DJAX response","error"),App.alerts.fail("Server failed to return a response."))}):e.outputPanel.showResult(t)}}(this)})},insertExample:function(e){var t;return t=function(t){return function(){return $.getJSON(App.route("language_example",{language:App.data.language,category:e}),null,function(e){if(e.success)return t.codeAnswer.setValue(e.answer),t.codeFixture.setValue(e.fixture),t.codeSetup.setValue(e.setup)})}}(this),this.codeAnswer.getValue()||this.codeSetup.getValue()||this.codeFixture.getValue()?App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> Possible loss of data!',messageHtml:"You are about to replace your current code with example code. Are you sure you want to discard your changes?",confirmHtml:"Yes, go ahead and replace with example code",confirm:t}):t()},track:function(e,t){return t==null&&(t={}),t.category=$("#code_challenge_category").val(),t.language=App.data.language,t.published=App.data.published,t.record_id=App.data.id,t.code_challenge_name=$("#code_challenge_name").val(),App.track("CC-Editor: "+e,t)}})),e=function(){var e,t,n,r;n=App.data.languages,r=[];for(e in n)t=n[e],r.push(["answer","fixture","setup","package","example_fixture"].each(function(e){return t[e]=decodeURIComponent(t[e])}));return r}}.call(this),function(){App.ns("Controls.CodeChallenges.confirmSolutionsClick",function(e,t){})}.call(this),function(){var e;App.ns("Controls.CodeChallenges.ListController",App.Control({init:function(){this.track("Loaded"),this.ranksRange=new App.Controls.RangeSelector("#ranks"),e(),this.infiniteScroll=new App.Controls.InfiniteScroll("section.items-list",{loaded:function(){return e()}});if(App.locationParams().q)return $("#filters input").focus()},events:{".items-list .item-title a click":function(e,t){return this.track("Item Title Click",{itemTitle:e.closest(".list-item").data("title")})},".items-list .icon-list a click":function(e,t){var n;return n=e.closest(".list-item").data("title"),this.track("Item Icon Click",{language:e.data("language"),itemTitle:n})},"#quick_links a click":function(e,t){if($("#list_header").is(":visible"))return t.preventDefault(),$("#beta_filter").val(e.data("filter")),this.filter()},"#search_bar a click":function(){return this.search()},"#search_bar input keypress":function(e,t){if(t.keyCode===13)return t.preventDefault(),this.search()},"#app defaultlanguagechanged":function(e,t,n){if(!$("#list_header").is(":visible")&&App.routes.list)return App.load(App.route("list",{language:n.value}));if(App.data.language)return $("#language_filter").val(n.value),this.filter()},"#filters change":function(){return this.filter()},"#filters .js-filter click":function(e,t){return this.filter(),t.preventDefault()},"#reset_search click":function(){return $("#search_bar input, #search select").val(""),this.ranksRange.clear()}},filterUrl:function(e){var t;return t={q:e||$("#search_bar input").val(),r:this.ranksRange.values,tags:App.data.tags,xids:$("#ids_filter").val(),beta:$("#beta_filter").val(),category:$("#category_filter").val(),order_by:$("#order_by").val()},Object.keys(t).forEach(function(e){if(!t[e]&&e!=="q")return delete t[e]}),App.route("search",{language:$("#language_filter").val()},t)},search:function(e){return e==null&&(e=$("#search_bar input").val()),this.filter(e),this.track("Search",{search:e})},filter:function(e){return $("#filters button").addClass("is-disabled"),App.load(this.filterUrl(e))},track:function(e,t){return t==null&&(t={}),t.list_id=App.data.listId,App.track("CC-List: "+e,t)}})),e=function(){var e;return(e=App.data.completedCodeChallengeIds)!=null&&e.each(function(e){return $("#"+e+" .js-check").removeClass("is-hidden")}),$.wait(0,function(){return $("#list_loading_msg").slideUp().fadeOut()})}}.call(this),function(){App.ns("Controls.CodeChallenges.PendingController",App.Control({init:function(){}}))}.call(this),function(){App.ns("Controls.CodeChallenges.PlayController",App.Controls.Ide({init:function(){return this.element.renderViews(),this.configureIde(),this.languages={},this.initMarkdown(),$.wait(100,function(e){return function(){return e.play()}}(this)),this.track("Loaded"),App.DjaxRequest.register()},initMarkdown:function(){return this.markdownDisplay=new App.Controls.MarkdownDisplay("#description",{language:App.data.activeLanguage}),this.markdownDisplay.setMarkdown(App.data.description)},events:{".language-tabs li click":function(e,t){if(e.find("a").attr("href"))return;return $(".language-tabs li.is-active").removeClass("is-active"),e.addClass("is-active"),$("#preplay .leaderboard-container").hide(),$("#"+e.data("value")+"_leaderboard").show(),App.replaceHistoryState(e.data("href")),App.data.activeLanguage=e.data("value"),this.isPlaying&&this._playLanguage(),this.track("Language Changed")},"#play_btn click":function(){return this.play(),this.track("Play Clicked")},"#skip_btn click":function(){return this.skip(),this.track("Skip Clicked")},"#code texteditor.submit":function(){return this.readyCode&&this.readyCode===this.editor.getValue()?this.submit():this.attempt()},"#code texteditor.change":function(){if(this.readyCode)return $.wait(0,function(e){return function(){if(e.readyCode===e.editor.getValue())return $("#attempt_btn").hide(),$("#submit_btn").removeClass("is-hidden");$("#submit_btn").addClass("is-hidden"),$("#attempt_btn").show();if(!e.attempting)return e.editor.messages.hide()}}(this))},"#reset_btn:not(.is-disabled) click":function(){return this.reset()},"#attempt_btn:not(.is-disabled) click":function(){return this.attempt()},"#submit_btn:not(.is-disabled) click":function(){return this.submit()},"#comments_btn click":function(e,t){if(!t.ctrlKey&&!t.metaKey)return this.view_comments()},"#surrender_btn click":function(){return this.surrender()}},setLayout:function(e){switch(e){case"max":$("body").addClass("maximized").addClass("no-sidenav");break;case"min":$("body").removeClass("maximized").removeClass("no-sidenav");break;case"h":$("#h_layout").addClass("is-active").next().removeClass("is-active"),$("#description_area").removeClass("twelve").addClass("five is-full-height").find("ul.tabs-content").data("ignoreVerticalFill",!1).css({height:""}).find("> li").addClass("is-full-height"),$("#editors_area").removeClass("twelve pln h_layout").addClass("seven v_layout");break;case"v":$("#v_layout").addClass("is-active").prev().removeClass("is-active"),$("#description_area").removeClass("five is-full-height").addClass("twelve").find("ul.tabs-content").data("ignoreVerticalFill",!0).css({height:"auto"}).find("> li").removeClass("is-full-height"),$("#editors_area").removeClass("seven v_layout").addClass("twelve pln h_layout")}return $.wait(100,function(){return $(window).resize()})},validate:function(){return this._validate(App.route("test",{solutionId:this.language.solutionId}))},attempt:function(){var e;e={code:this.editor.getValue(),source:"play"};if(!e.code){this.editor.messages.fail(this.editor.emptyCodeMsg());return}return this.showOutputWaiting(),this.fixture.messages.hide(),$("#attempt_btn").addClass("is-disabled"),this.attempting=!0,this.editor.submitCode(App.route("attempt",{solutionId:this.language.solutionId}),e,function(t){return function(n){return t.attempting=!1,!n.reason&&!n.valid&&(n.reason="Unknown error"),t.showResults(n,t.editor),$("#attempt_btn").removeClass("is-disabled"),n.valid?(t.editor.markClean(),t.editor.messages.working("<i class='icon-moon-circle-check is-green-text is-nudged-down'></i> "+App.consts.messages.success.sample()+" You may take your time to refactor/comment your solution. Submit when ready."),App.data.published&&(t.track("Attempt Successful"),t.language.play_result_id=n.play_result_id,$("#submit_btn").removeClass("is-hidden"),$("#attempt_btn").hide(),t.readyCode=e.code)):(t.readyCode=null,t.editor.messages.hide(),t.track(""+(App.data.published?"":"Preview ")+"Attempt Failed",{reason:n.reason,woopra:!1})),t.track(""+(App.data.published?"":"Preview ")+"Attempt Submitted")}}(this))},submit:function(){var e;if(this.readyCode)return e={language:App.data.activeLanguage,play_result_id:this.language.play_result_id},this.editor.messages.working("Submitting your final solution..."),App.djax({url:App.route("attempt",{solutionId:this.language.solutionId}),type:"PUT",deferred:function(e){return function(t){return t.success?App.load(App.route("solutions",{language:App.data.activeLanguage})):e.editor.messages.fail(t.debug||"There was an issue submitting your final solution")}}(this)})},skip:function(){return App.load(App.route("next",{language:App.data.activeLanguage}))},surrender:function(){return App.data.published?(this.track("Skipped"),$.post(App.route("skip",this.language),{language_name:App.data.activeLanguage},function(e){return function(t){return e.skip()}}(this))):(this.track("Returning to editor"),App.load(App.route("editor",{language:App.data.activeLanguage})))},view_comments:function(){return this.track("Skipped/View Report"),$.post(App.route("skip",this.language),{language_name:App.data.activeLanguage},function(e){return App.load(App.route("comments"))})},getPackage:function(){return this._getLanguage()["package"]||""},play:function(){return this.isPlaying=!0,this._playLanguage()},_playLanguage:function(e){return e==null&&(e=App.data.activeLanguage),$(".js-"+this.languageName).hide(),$(".js-"+e).show(),this.markdownDisplay.setLanguage(e),this.languages[e]?this._setLanguage(e):$.post(App.route("session",{language:e}),{},function(t){return function(n){return t.started||(t.showPlay(),t.started=!0),t.languages[e]=n,t._setLanguage(e)}}(this)).fail(function(){return App.alerts.fail("The kata failed to load. Please try reloading the page.")})},_getLanguage:function(e){return e==null&&(e=App.data.activeLanguage),this.languages[e]},_setLanguage:function(e){var t,n,r;return n=this.languages[e],n.views=n.views||0,n.views++,this.language=n,this.languageName=e,r=!n.solutionId&&n.recently_attempted||n.views>1,this.editor.setValue(n.workingCode||n.setup,""+n.resultId+"-"+e,r),this.editor.setMode(App.data.activeLanguage),this.editor.focus(),t=n.workingFixture||n.exampleFixture||this.defaultFixtureText(e),this.fixture.setValue(t,""+n.resultId+"-"+e+"-fixture",r),this.fixture.setMode(App.data.activeLanguage),n.newPlay=!1},configureEditors:function(){var e;return e={"Cmd-'":function(e){return function(){return e.validate()}}(this),"Cmd-;":function(e){return function(){return e.attempt()}}(this),"Cmd-I":function(e){return function(){return e.toggleTabs()}}(this),"Cmd-U":function(e){return function(){return e.toggleFocusedEditor()}}(this)},this.editor=new App.Controls.CodeEditor("#code",{mode:App.data.activeLanguage,stashGroup:App.data.id,extraKeys:e,commands:{save:function(e){return function(){return e.attempt()}}(this)}}),this.fixture=new App.Controls.CodeEditor("#fixture",{mode:App.data.activeLanguage,stashGroup:App.data.id,extraKeys:e,commands:{save:function(e){return function(){return e.validate()}}(this)}})},showPlay:function(){return $("#preplay").hide(),$("#play").show(),$(".language-tabs a").each(function(e,t){return $(t).attr("href",null)}),this.configureEditors(),this.playVisible=!0,$(window).width()<1048&&this.setLayout("v"),$(window).resize()},track:function(e,t){return t==null&&(t={}),t.category=App.data.category,t.language=App.data.activeLanguage,t.strategy=App.data.strategy,t.challenge_name=App.data.challengeName,t.author_user_name=App.data.authorUserName,t.attempts=this.attempts,t.startedAt=App.data.startedAt,t.record_id=App.data.id,App.track("CC-Play: "+e,t),App.debug("CC-Play: "+e+" tracked")}}))}.call(this),function(){App.ns("Controls.CodeChallenges.ShowController",App.Control({init:function(){return this.trackingName="CC-Report",new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),this.markdownDisplay=new App.Controls.MarkdownDisplay("#description",{language:App.data.activeLanguage}),this.markdownDisplay.setMarkdown(App.data.description),this.track("Loaded")},events:{"#solutions click":function(e,t){return App.Controls.CodeChallenges.confirmSolutionsClick(e,t)}},track:function(e,t){return t==null&&(t={}),t.category=App.data.category,t.language=App.data.activeLanguage,t.challenge_name=App.data.challengeName,t.author_user_name=App.data.authorUserName,t.record_id=App.data.id,t.view=App.data.isAuthorView?"author":"player",this._super(e,t)}}))}.call(this),function(){App.ns("Controls.CodeChallenges.SocialButtons",App.Control({init:function(){},events:{".js-up-vote a click":function(){return this.postUpVote(1)},".js-remove-up-vote a click":function(){return this.postUpVote(0)},".js-share-email click":function(){var e;return e=$(".js-train-email"),e.is(":visible")&&this.track("Social: Share Clicked",{social:"email"}),e.slideToggle(800)},"body .js-train-email button[type=cancel] click":function(e,t){return t.preventDefault(),e.closest(".js-train-email").slideUp()},".js-share-twitter click":function(e){return App.social.twitter.share(e.data("share-text")),this.track("Social: Share Clicked",{social:"twitter"})},".js-share-facebook click":function(e){return App.social.facebook.share({title:e.data("share-title"),body:e.data("share-body")}),this.track("Social: Share Clicked",{social:"facebook"})}},postUpVote:function(e){return $.post(App.route("challenge_vote"),{vote:e},function(t){return function(n){if(n.success)return e?(t.element.find(".js-up-vote").hide(),t.element.find(".js-remove-up-vote").show()):(t.element.find(".js-up-vote").show(),t.element.find(".js-remove-up-vote").hide()),$(".js-up-votes-count").html(n.vote_score),t.track("User: Kata Vote",{vote:e})}}(this))},track:function(e,t){return t==null&&(t={}),t.page=App.controller.trackingName,App.track(e,t)}}))}.call(this),function(){App.ns("Controls.CodeChallenges.SolutionsController",App.Control({init:function(){return this.element.renderViews(),new App.Controls.CodeChallengeInfoAreas(this.element),new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),new App.Controls.CompareSolutionsController(this.element),this.infiniteScroll=new App.Controls.InfiniteScroll("#solutions_list"),this.trackingName="CC-Solutions",this.track("Loaded")},events:{".js-show-invalid click":function(e){var t,n;return t=$("<span>Loading...</span>"),e.replaceWith(t),n=new App.UriBuilder,n.params.invalid_solutions="true",$.get(n.build(),{},function(e){return t.fadeOut(),$("#invalid_solutions").replaceWith(e)})},".js-show-dups click":function(e){return e.text()==="Show Variations"?(e.closest("li").find(".js-variations").slideDown(),e.text("Hide Variations")):(e.closest("li").find(".js-variations").slideUp(),e.text("Show Variations"))},"#show_invalid_solutions click":function(e){return e.closest("p").hide(),$("#invalid_solutions").slideDown()},".js-admin-action click":function(e){return $.post(e.data("href"),{},function(e){return alert("Action "+(e.success?"successfully queued":"failed"))})},".js-delete-group click":function(e){return App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> This action is permanent!',messageHtml:"This will delete this solution group from the list. Are you sure about this?",cancelHtml:"Cancel",confirmHtml:"Delete It!",confirm:function(t){return function(){var t;return t=e.closest(".js-result-group"),$["delete"](App.route("solution_group",{groupResultId:t.attr("id")}),null,function(e){if(e.success)return t.fadeOut(800)})}}(this)})},".js-verify-group click":function(e){var t;return t=e.closest(".js-result-group"),$.post(App.route("verify",{groupResultId:t.attr("id")}),null,function(e){if(e.success)return alert("Action "+(e.success?"successfully queued":"failed"))})}},track:function(e,t){return t==null&&(t={}),t.language=App.data.activeLanguage,this._super(e,t)}}))}.call(this),function(){App.ns("Views.CodeChallenges.BetaFeedbackView",App.View({filters:{assess_rank_denied_msg:function(){return App.data.completedKata?"You must have at least 100 honor before you can give your rank assessment.":"You must complete this kata before you can rank it"}}}))}.call(this);