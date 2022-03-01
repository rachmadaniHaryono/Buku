Search.setIndex({docnames:["README","buku","bukuserver","index","modules","wiki/Buku-as-a-library","wiki/Customize-colors","wiki/Home","wiki/Installation-on-Termux","wiki/List-tags-usage-count-prefixed","wiki/Operational-notes","wiki/PR-guidelines","wiki/Release-checklist","wiki/Running-tests","wiki/System-integration","wiki/Third-party-integration","wiki/Upload-to-pypi"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["README.md","buku.rst","bukuserver.rst","index.rst","modules.rst","wiki/Buku-as-a-library.md","wiki/Customize-colors.md","wiki/Home.md","wiki/Installation-on-Termux.md","wiki/List-tags-usage-count-prefixed.md","wiki/Operational-notes.md","wiki/PR-guidelines.md","wiki/Release-checklist.md","wiki/Running-tests.md","wiki/System-integration.md","wiki/Third-party-integration.md","wiki/Upload-to-pypi.md"],objects:{"":[[1,0,0,"-","buku"]],"buku.BukuCrypt":[[1,2,1,"id0","BLOCKSIZE"],[1,2,1,"id1","CHUNKSIZE"],[1,2,1,"","SALT_SIZE"],[1,3,1,"","decrypt_file"],[1,3,1,"","encrypt_file"],[1,3,1,"","get_filehash"]],"buku.BukuDb":[[1,3,1,"","add_rec"],[1,3,1,"","append_tag_at_index"],[1,3,1,"","auto_import_from_browser"],[1,3,1,"","browse_by_index"],[1,3,1,"","browse_cached_url"],[1,2,1,"","chatty"],[1,3,1,"","cleardb"],[1,3,1,"","close"],[1,3,1,"","close_quit"],[1,3,1,"","compactdb"],[1,2,1,"","conn"],[1,2,1,"","cur"],[1,3,1,"","delete_rec"],[1,3,1,"","delete_rec_all"],[1,3,1,"","delete_resultset"],[1,3,1,"","delete_tag_at_index"],[1,3,1,"","edit_update_rec"],[1,3,1,"","exclude_results_from_search"],[1,3,1,"","exportdb"],[1,2,1,"","field_filter"],[1,3,1,"","fixtags"],[1,3,1,"","get_default_dbdir"],[1,3,1,"","get_max_id"],[1,3,1,"","get_rec_all"],[1,3,1,"","get_rec_by_id"],[1,3,1,"","get_rec_id"],[1,3,1,"","get_tag_all"],[1,3,1,"","get_tagstr_from_taglist"],[1,3,1,"","importdb"],[1,3,1,"","initdb"],[1,2,1,"","json"],[1,3,1,"","list_using_id"],[1,3,1,"","load_chrome_database"],[1,3,1,"","load_firefox_database"],[1,3,1,"","mergedb"],[1,3,1,"","print_rec"],[1,3,1,"","refreshdb"],[1,3,1,"","replace_tag"],[1,3,1,"","search_by_tag"],[1,3,1,"","search_keywords_and_filter_by_tags"],[1,3,1,"","searchdb"],[1,3,1,"","set_tag"],[1,3,1,"","suggest_similar_tag"],[1,3,1,"","tnyfy_url"],[1,3,1,"","traverse_bm_folder"],[1,3,1,"","update_rec"]],"buku.ConverterResult":[[1,2,1,"","count"],[1,2,1,"","data"]],"buku.ExtendedArgumentParser":[[1,3,1,"","is_colorstr"],[1,3,1,"","print_help"],[1,3,1,"","program_info"],[1,3,1,"","prompt_help"]],"bukuserver.filters":[[2,1,1,"","BaseFilter"],[2,1,1,"","BookmarkBaseFilter"],[2,1,1,"","BookmarkBukuFilter"],[2,1,1,"","BookmarkField"],[2,1,1,"","BookmarkTagNumberEqualFilter"],[2,1,1,"","BookmarkTagNumberGreaterFilter"],[2,1,1,"","BookmarkTagNumberNotEqualFilter"],[2,1,1,"","BookmarkTagNumberSmallerFilter"],[2,1,1,"","FilterType"],[2,1,1,"","TagBaseFilter"],[2,4,1,"","bottom_x_func"],[2,4,1,"","equal_func"],[2,4,1,"","greater_func"],[2,4,1,"","in_list_func"],[2,4,1,"","not_equal_func"],[2,4,1,"","not_in_list_func"],[2,4,1,"","smaller_func"],[2,4,1,"","top_x_func"]],"bukuserver.filters.BaseFilter":[[2,3,1,"","apply"],[2,3,1,"","operation"]],"bukuserver.filters.BookmarkBaseFilter":[[2,3,1,"","clean"]],"bukuserver.filters.BookmarkBukuFilter":[[2,3,1,"","apply"],[2,3,1,"","operation"]],"bukuserver.filters.BookmarkField":[[2,2,1,"","DESCRIPTION"],[2,2,1,"","ID"],[2,2,1,"","TAGS"],[2,2,1,"","TITLE"],[2,2,1,"","URL"]],"bukuserver.filters.BookmarkTagNumberEqualFilter":[[2,3,1,"","clean"]],"bukuserver.filters.BookmarkTagNumberSmallerFilter":[[2,3,1,"","clean"]],"bukuserver.filters.FilterType":[[2,2,1,"","BOTTOM_X"],[2,2,1,"","EQUAL"],[2,2,1,"","GREATER"],[2,2,1,"","IN_LIST"],[2,2,1,"","NOT_EQUAL"],[2,2,1,"","NOT_IN_LIST"],[2,2,1,"","SMALLER"],[2,2,1,"","TOP_X"]],"bukuserver.filters.TagBaseFilter":[[2,3,1,"","clean"]],"bukuserver.forms":[[2,1,1,"","BookmarkForm"],[2,1,1,"","HomeForm"],[2,1,1,"","SearchBookmarksForm"]],"bukuserver.forms.BookmarkForm":[[2,2,1,"","description"],[2,2,1,"","tags"],[2,2,1,"","title"],[2,2,1,"","url"]],"bukuserver.forms.HomeForm":[[2,2,1,"","keyword"]],"bukuserver.forms.SearchBookmarksForm":[[2,2,1,"","all_keywords"],[2,2,1,"","deep"],[2,2,1,"","keywords"],[2,2,1,"","regex"]],"bukuserver.server":[[2,1,1,"","ApiBookmarkRangeView"],[2,1,1,"","ApiBookmarkSearchView"],[2,1,1,"","ApiBookmarkView"],[2,1,1,"","ApiTagView"],[2,1,1,"","BookmarkletView"],[2,1,1,"","CustomFlaskGroup"],[2,4,1,"","create_app"],[2,4,1,"","get_bool_from_env_var"],[2,4,1,"","get_bukudb"],[2,4,1,"","get_custom_version"],[2,4,1,"","get_tags"],[2,4,1,"","get_tiny_url"],[2,4,1,"","handle_network"],[2,4,1,"","refresh_bookmark"],[2,4,1,"","search_bookmarks"],[2,4,1,"","search_tag"],[2,4,1,"","update_tag"]],"bukuserver.server.ApiBookmarkRangeView":[[2,3,1,"","delete"],[2,3,1,"","get"],[2,2,1,"","methods"],[2,3,1,"","put"]],"bukuserver.server.ApiBookmarkSearchView":[[2,3,1,"","delete"],[2,3,1,"","get"],[2,2,1,"","methods"]],"bukuserver.server.ApiBookmarkView":[[2,3,1,"","delete"],[2,3,1,"","get"],[2,2,1,"","methods"],[2,3,1,"","post"],[2,3,1,"","put"]],"bukuserver.server.ApiTagView":[[2,3,1,"","get"],[2,2,1,"","methods"],[2,3,1,"","put"]],"bukuserver.server.BookmarkletView":[[2,3,1,"","get"],[2,2,1,"","methods"]],"bukuserver.views":[[2,1,1,"","BookmarkModelView"],[2,1,1,"","CustomAdminIndexView"],[2,1,1,"","CustomBukuDbModel"],[2,1,1,"","StatisticView"],[2,1,1,"","TagModelView"],[2,4,1,"","chunks"]],"bukuserver.views.BookmarkModelView":[[2,3,1,"","action_view"],[2,3,1,"","ajax_lookup"],[2,3,1,"","ajax_update"],[2,2,1,"","can_set_page_size"],[2,2,1,"","can_view_details"],[2,2,1,"","column_filters"],[2,2,1,"","column_formatters"],[2,2,1,"","column_list"],[2,3,1,"","create_form"],[2,2,1,"","create_modal"],[2,2,1,"","create_modal_template"],[2,3,1,"","create_model"],[2,2,1,"","create_template"],[2,3,1,"","create_view"],[2,3,1,"","delete_model"],[2,3,1,"","delete_view"],[2,2,1,"","details_modal"],[2,3,1,"","details_view"],[2,2,1,"","edit_modal"],[2,2,1,"","edit_modal_template"],[2,2,1,"","edit_template"],[2,3,1,"","edit_view"],[2,3,1,"","export"],[2,3,1,"","get_list"],[2,3,1,"","get_one"],[2,3,1,"","get_pk_value"],[2,3,1,"","index_view"],[2,2,1,"","named_filter_urls"],[2,3,1,"","scaffold_filters"],[2,3,1,"","scaffold_form"],[2,3,1,"","scaffold_list_columns"],[2,3,1,"","scaffold_list_form"],[2,3,1,"","scaffold_sortable_columns"],[2,3,1,"","update_model"]],"bukuserver.views.CustomAdminIndexView":[[2,3,1,"","index"],[2,3,1,"","search"]],"bukuserver.views.StatisticView":[[2,3,1,"","index"]],"bukuserver.views.TagModelView":[[2,3,1,"","action_view"],[2,3,1,"","ajax_lookup"],[2,3,1,"","ajax_update"],[2,2,1,"","can_create"],[2,2,1,"","can_set_page_size"],[2,2,1,"","column_filters"],[2,2,1,"","column_formatters"],[2,3,1,"","create_model"],[2,3,1,"","create_view"],[2,3,1,"","delete_model"],[2,3,1,"","delete_view"],[2,3,1,"","details_view"],[2,3,1,"","edit_view"],[2,3,1,"","export"],[2,3,1,"","get_list"],[2,3,1,"","get_one"],[2,3,1,"","get_pk_value"],[2,3,1,"","index_view"],[2,3,1,"","scaffold_filters"],[2,3,1,"","scaffold_form"],[2,3,1,"","scaffold_list_columns"],[2,3,1,"","scaffold_list_form"],[2,3,1,"","scaffold_sortable_columns"],[2,3,1,"","update_model"]],buku:[[1,1,1,"","BukuCrypt"],[1,1,1,"","BukuDb"],[1,1,1,"","ConverterResult"],[1,1,1,"","ExtendedArgumentParser"],[1,4,1,"","browse"],[1,4,1,"","check_stdout_encoding"],[1,4,1,"","check_upstream_release"],[1,4,1,"","convert_bookmark_set"],[1,4,1,"","convert_tags_to_org_mode_tags"],[1,4,1,"","copy_to_clipboard"],[1,4,1,"","delim_wrap"],[1,4,1,"","disable_sigint_handler"],[1,4,1,"","edit_at_prompt"],[1,4,1,"","edit_rec"],[1,4,1,"","enable_sigint_handler"],[1,4,1,"","format_json"],[1,4,1,"","gen_auto_tag"],[1,4,1,"","gen_headers"],[1,4,1,"","get_PoolManager"],[1,4,1,"","get_data_from_page"],[1,4,1,"","get_firefox_profile_name"],[1,4,1,"","get_system_editor"],[1,4,1,"","import_firefox_json"],[1,4,1,"","import_html"],[1,4,1,"","import_md"],[1,4,1,"","import_org"],[1,4,1,"","is_bad_url"],[1,4,1,"","is_editor_valid"],[1,4,1,"","is_ignored_mime"],[1,4,1,"","is_int"],[1,4,1,"","is_nongeneric_url"],[1,4,1,"","is_unusual_tag"],[1,4,1,"","main"],[1,4,1,"","monkeypatch_textwrap_for_cjk"],[1,4,1,"","network_handler"],[1,2,1,"","override_text_browser"],[1,4,1,"","parse_decoded_page"],[1,4,1,"","parse_tags"],[1,4,1,"","parse_temp_file_content"],[1,4,1,"","piped_input"],[1,4,1,"","prep_tag_search"],[1,4,1,"","print_json_safe"],[1,4,1,"","print_rec_with_filter"],[1,4,1,"","print_single_rec"],[1,4,1,"","prompt"],[1,4,1,"","read_in"],[1,4,1,"","regexp"],[1,4,1,"","setcolors"],[1,4,1,"","setup_logger"],[1,4,1,"","show_taglist"],[1,4,1,"","sigint_handler"],[1,2,1,"","suppress_browser_output"],[1,4,1,"","to_temp_file_content"],[1,4,1,"","unwrap"],[1,4,1,"","walk"],[1,4,1,"","write_string_to_file"]],bukuserver:[[2,0,0,"-","filters"],[2,0,0,"-","forms"],[2,0,0,"-","response"],[2,0,0,"-","server"],[2,0,0,"-","views"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0":[0,1,2,5,7,8,16],"01":0,"03":16,"1":[0,1,2,5,8,9,10,12,14,15,16],"10":[0,1,7],"100":0,"100m":1,"11":16,"127":8,"140":11,"15":0,"15012014":0,"15012020":0,"16":16,"1gb":8,"2":[0,1,2,5,10,14],"20":0,"200":0,"2015":[0,7],"2017":0,"2018":16,"2022":0,"210":[0,14],"256":10,"2daygeek":0,"3":[0,1,2,3,10],"30":0,"300":10,"32":1,"336":0,"368":0,"38":16,"4":[0,1,2,5],"40":0,"5":[0,15,16],"50":0,"5001":8,"512":1,"524288":1,"6":[0,16],"600mb":3,"64":1,"65536":1,"7":[3,10],"8":[0,1,3],"9":0,"90m":6,"97m":6,"abstract":1,"break":2,"byte":1,"case":[0,1,10,11],"char":11,"class":[1,2],"default":[0,1,2,6,10,14,15],"do":[0,2,14,15],"enum":2,"export":[0,1,2,3,8],"final":8,"function":[1,2,5,10,15],"import":[0,1,2,3,5,11,16],"int":[1,2],"new":[0,1,2,11,14,16],"public":14,"return":[0,1,2,5,10],"short":11,"static":1,"switch":[0,6],"true":[1,2],"try":[0,11],"var":2,"while":1,A:[1,2,6,10,11],AND:1,By:6,For:[0,2,8,14,15],If:[0,1,2,10,11,13,14],In:[3,10],Is:2,It:[0,5,10],NOT:1,No:11,OR:1,On:10,One:0,The:[0,1,2,5,6,10,11,14],Then:10,There:0,To:[0,9,10,14],With:14,_:[2,7],__:7,___:7,____:7,______:7,_______:7,__version__:[5,12],_io:1,_list_entri:2,_name_formatt:2,aarch64:8,abl:0,about:10,abov:14,accept:[0,5],accord:15,achiev:14,across:[2,3],action:[0,2],action_view:2,actual:[1,10,14],ad:[0,1,2,10,11,14],add:[0,1,11,14,15],add_bookmark_folder_as_tag:1,add_help:1,add_parent_folder_as_tag:1,add_rec:[1,5],addit:[1,14],address:1,admin:2,adminindexview:2,administr:2,ae:10,affect:11,after:[0,10],afterward:10,agent:12,ai:[0,14],ajax_lookup:2,ajax_upd:2,alert:1,algorithm:10,alia:0,alias:10,align:11,all:[0,1,2,5,6,8,10,11,13,14],all_keyword:[1,2],allow:[2,6],allow_abbrev:1,along:[0,10],alphabet:[0,1,2,10],alreadi:[1,11],also:[0,5,10,11,14],alt:14,altern:[0,3,14],an:[0,1,2,5,10,11,15],analyt:0,android:[0,8],ani:[0,1,2,8,10,11,16],anno:1,annot:1,anoth:[1,10,14],ansi:6,anywher:3,api:[1,5,11],apibookmarkrangeview:2,apibookmarksearchview:2,apibookmarkview:2,apitagview:2,app:[2,10],appdata:[1,10],appear:10,append:[0,1,10,11],append_tag_at_index:1,appli:[0,2,10,16],applic:[1,15],apply_func:2,approach:1,appropri:0,apt:[0,10,14],ar:[0,1,2,5,6,10,11,14],arch:0,architectur:8,arg:[0,1,2],argpars:[1,2],argument:[0,1,5,6,10],argument_default:1,argumentpars:1,argumenttypeerror:1,argv:1,aris:10,around:[0,8],arr:2,arrai:15,articl:[6,16],arun:0,ascend:1,ask:1,assert:1,assertequ:13,assertionerror:13,attribut:2,attributeerror:1,auto:[0,3,10],auto_import_from_brows:1,autom:[3,7,11],automat:[1,10,14],av:11,avail:[0,5,6],avoid:[10,11,14],awai:0,awar:[0,11],awk:[9,15],b:[0,6,14],back:16,backup:[3,14],bad:1,base:[0,1,2,3,14,16],basefilt:2,baseform:2,basemodelview:2,baseview:2,bash:[0,11,14,15],bashrc:15,bat:15,bdb:5,beautifulsoup4:0,beautifulsoup:1,becaus:[1,6],been:14,befor:[2,8,10],beforehand:0,begin:[9,10],behav:1,behavior:[2,15],behaviour:11,behind:15,below:16,best:[0,1],between:[0,6,10,16],bin:[0,14,15],bind:8,black:6,blank:[0,1,14],block:[0,1,14],blocksiz:1,blue:6,bold:6,book:0,bookkeep:0,bookmark:[0,1,2,3,5,8,10,11,15],bookmark_cr:2,bookmark_create_mod:2,bookmark_edit:2,bookmark_edit_mod:2,bookmark_set:1,bookmarkbasefilt:2,bookmarkbukufilt:2,bookmarkfield:2,bookmarkform:2,bookmarkletview:2,bookmarkmodelview:2,bookmarkpropereti:1,bookmarktagnumberequalfilt:2,bookmarktagnumbergreaterfilt:2,bookmarktagnumbernotequalfilt:2,bookmarktagnumbersmallerfilt:2,bool:[1,2],booleanfield:2,both:[0,1,10],bottom:2,bottom_x:2,bottom_x_func:2,bracket:10,bright:6,broken:0,brows:[0,1],browsabl:0,browse_by_index:1,browse_cached_url:1,browser:[0,1,3,8],bs4:[0,1],bsd:6,buffer:0,build:3,buku:[0,2,5,6,7,9,10,11,12,13,14,15],buku_color:6,buku_run:0,bukuadd:14,bukubrow:[0,15],bukucrypt:[1,5],bukudb:[1,2,5,13],bukudb_inst:2,bukuserv:[0,5],bulletproof:1,c:[0,2,6],ca:0,cach:[0,1],call:1,callback:2,caller:[0,1],can:[0,2,6,8,10,11,14,15],can_creat:2,can_set_page_s:2,can_view_detail:2,cannot:[0,10],capabl:[6,14],carefulli:5,cargo_build_target:8,cat:15,categori:2,cento:0,certain:10,certif:0,certifi:0,chang:[1,2,10,11,16],changelog:12,charact:[1,5,10],chatti:1,check:[0,1,5,10,11,13,14,16],check_stdout_encod:1,check_upstream_releas:1,child:[1,2],children:1,chmod:[0,14],choos:8,chrome:[0,1,10,14],chromium:0,chunk:[1,2],chunksiz:1,cjk:1,clang:8,classic:1,clean:[0,2],cleanup:3,clear:[0,10],cleardb:1,cli:[0,2],client:14,clip:0,clipboard:[0,1,14],clone:0,close:[1,15],close_quit:1,cloud:[10,14],cmd:[6,15],cmder:3,cmder_root:15,cmdline:11,cmdstr:1,code:[3,6,16],collabor:3,collect:[0,2],color:[1,3,6],column:[1,2,15],column_editable_list:2,column_filt:2,column_formatt:2,column_list:2,com:[0,1,5,16],combin:[0,10],come:0,comma:[0,1,5,10],command:[1,3,8,11,16],comment:[0,1,3,6,10],commit:[1,11,12],compact:[0,10],compactdb:1,compat:1,complet:[3,11],compon:0,compos:0,concaten:11,concept:0,conemu:6,config:[15,16],confirm:[0,1],conflict_handl:1,conn:1,connect:[0,1,10],consult:6,contain:[0,2,10],content:[1,3,14],context:2,continu:0,contribut:3,conveni:0,convert:[1,10],convert_bookmark_set:1,convert_fil:16,convert_tags_to_org_mode_tag:1,converterresult:1,copi:[0,1,14],copy_to_clipboard:1,copyright:0,correspond:10,could:10,couldn:0,count:[0,1,2,9,10],creat:[0,1,2,10,12,14,15,16],create_app:2,create_form:2,create_mod:2,create_modal_templ:2,create_model:2,create_templ:2,create_view:2,creation:[1,2,10],criteria:[1,2],cryptographi:[0,8],ctrl:14,ctx:2,cur:1,current:[1,2,10,11],cursor:1,custom:[0,1,2,5,6],customadminindexview:2,custombukudbmodel:2,customflaskgroup:2,cut:0,cyan:6,d:[0,6,8],data:[0,1,2,10],data_typ:2,databas:[0,1,3,5,10,15],datarequir:2,date:[0,1,12],db:[0,1,2,3,5,8,14],db_file:2,dbdir_local_expect:13,dbfile:[1,5],ddg:0,debian:0,debug:0,decis:10,decod:1,decrypt:[0,1],decrypt_fil:[1,5],deep:[0,1,2,10],def:2,default_valu:2,defin:[1,10,15],delai:1,delay_commit:1,delet:[0,1,2,3,8],delete_model:2,delete_rec:1,delete_rec_al:1,delete_resultset:1,delete_tag_at_index:1,delete_view:2,delim:1,delim_wrap:1,delimit:[1,10],denot:10,depend:[3,11,14],desc:[0,1,5],descend:[1,2,10],descript:[0,1,2,5,6,10,11,16],design:[5,11],destin:1,detail:[0,1,2,7,10],details_mod:2,details_view:2,detect:[1,6],determin:1,develop:[0,5,11,15],deviat:11,diabl:1,dialog:2,dict:[1,2],dictionari:[1,2],differ:[0,10],digest:1,digit:1,diigo:0,diigoku:0,direct:1,directli:14,directori:[0,1,10,14],disabl:[0,1,6],disable_sigint_handl:1,disk:10,displai:[1,2],dist:16,distinguish:[6,10],distribut:16,distutil:16,dmenu:0,document:[0,5,11],doe:1,doesn:[1,6,10,14],domain:1,don:[1,5,8],done:[1,15],doubl:[0,10],download:0,downstream:12,draw:6,drop:1,dropbox:14,dropdown:2,duckduckgo:0,duplic:1,dure:[0,10],dustingram:16,e:[0,6,10,13,14,16],each:[1,10,15],earlier:[1,10,12],easier:0,easili:10,easter:0,ebuku:0,echo:[0,15],edb:1,edit:[0,1,2,10,14],edit_at_prompt:1,edit_mod:2,edit_modal_templ:2,edit_rec:1,edit_templ:2,edit_update_rec:1,edit_view:2,editor:[1,3],effect:[1,11],egg:0,either:[1,2,6],elabor:11,element:1,els:[0,1],emac:0,email:2,empti:[0,1],emul:[0,6,8],enabl:[1,2,6],enable_sigint_handl:1,enc:1,enclos:1,encod:1,encount:0,encrypt:[0,1,3],encrypt_fil:[1,5],end:[0,1],ending_id:2,endmacro:2,endpoint:2,engin:0,ensur:0,enter:[0,15],entiti:1,entri:[0,1,2,14],enumer:[2,16],env:[0,2,8],environ:[0,6,8,10,11,14],epilog:1,equal:2,equal_func:2,error:[1,8,10,13],escap:6,etc:11,even:10,everyth:11,everytim:16,everywher:0,exampl:[1,2,3,5,11,14,15,16],except:[0,1,11],exclud:[0,1,10],exclude_results_from_search:1,execut:[1,14,16],exist:[0,1,2,10,14,15,16],exit:[0,1],exit_on_error:1,exitv:1,expand:[0,1],expect:[0,1,2],explicitli:[10,15],explor:14,export_typ:[1,2],exportdb:1,expos:[0,5],expr:[0,1],express:[0,1,10],extend:[1,11],extendedargumentpars:1,extens:[0,1],extra:10,f1:0,f2:0,f4:0,f:[0,6,15,16],failur:[0,1],fals:[1,2],favourit:0,fb:15,featur:[3,11],fedora:0,feel:5,fetch:[0,1,10,14],few:14,fi:0,field:[0,1,2,10],field_filt:1,fieldlist:2,file:[0,1,3,5,14],filenam:1,filepath:1,fill:16,filter:[1,3,4,10],filter_typ:2,filtertyp:2,find:[0,1,7],firefox:[0,1,14],first:[0,1,2,8,10,11,16],first_nam:2,fish:[0,11],five:[0,6],fix:[1,10,16],fixtag:[1,10],flag:[1,5],flake8:11,flask:2,flask_admin:2,flask_wtf:2,flaskform:2,flaskgroup:2,flexibl:[0,5],fly:0,folder:[1,10],folder_nam:1,follow:[0,1,5,6,8,10,14,15,16],forc:1,form:[1,3,4],form_arg:2,format:[0,1,2,8,10,14,16],format_json:1,formatt:2,formatter_class:1,found:[0,1],frame:1,free:5,from:[1,2,3,8,10,16],fromfile_prefix_char:1,front:0,full:[0,1],fun:7,func:2,fuzzi:[0,3],fzf:[0,15],g:[0,6,10,16],gedit:0,gen_auto_tag:1,gen_head:1,genbm:11,gener:[0,1,2,3,11,16],get:[0,1,2,8],get_bool_from_env_var:2,get_bukudb:2,get_custom_vers:2,get_data_from_pag:1,get_default_dbdir:[1,13],get_filehash:1,get_firefox_profile_nam:1,get_list:2,get_max_id:1,get_on:2,get_pk_valu:2,get_poolmanag:1,get_rec_al:[1,5],get_rec_by_id:1,get_rec_id:1,get_system_editor:1,get_tag:2,get_tag_al:1,get_tagstr_from_taglist:1,get_tiny_url:2,gg:0,git:0,github:12,given:[0,1,2,10],gnu:0,go:[0,1,11,16],good:[5,10],googl:[0,1,14],great:0,greater:2,greater_func:2,green:6,group:11,gsub:9,gui:[0,1,7,14],guid:16,guidelin:[0,3,16],gz:16,h:[0,6],ha:[0,1,2,5,14],hacker:0,hand:[0,10],handi:0,handl:[1,2],handle_network:2,handler:1,hang:15,haryono:0,hash:1,have:[0,1,2,5,7,8,10,11],head:1,header:1,hello:0,help:[0,1,3,12],helpformatt:1,henc:0,hidden:0,high:1,higher:1,histori:[0,12],home:[0,1,10,13,14,15],homeform:2,hope:1,host:[0,8,15],how:[0,7],howev:[1,6,11,14],html5lib:0,html:[0,1,2,10,14],html_soup:1,http:[0,1,5,10,16],http_head:1,https_proxi:[1,10],human:[1,2,10],hyphen:10,i:[0,6,14,15],id:[0,1,2,5],id_list:1,idea:10,identifi:[0,1],idx:1,ie:1,ignor:[1,10],im:0,immedi:0,immut:[0,1,10],implement:[2,6],import_firefox_json:1,import_html:1,import_md:1,import_org:1,importdb:1,in_list:2,in_list_func:2,includ:[0,1],increment:10,inde:14,independ:10,index:[0,1,2,3,6,10,15,16],index_view:2,indic:[0,1,10],individu:1,info:1,inform:[0,1],inherit:2,init:15,initdb:[1,5],initi:1,input:[0,1,3,14],insensit:10,instal:[3,10,11,13,14,15,16],instanc:[0,1,2],instanti:2,instantli:0,instead:[2,6,10,14],instruct:[0,1],intact:10,integ:[1,2],integr:[3,7,11,14],intend:[15,16],intent:10,interact:0,interfac:0,intern:[0,7],internet:14,interpret:10,interrupt:1,intersect:10,introduc:10,introduct:3,intsal:8,invok:1,involv:1,ioerror:1,is_bad_url:1,is_colorstr:1,is_editor_valid:1,is_ignored_mim:1,is_int:1,is_nongeneric_url:1,is_rang:1,is_unusual_tag:1,issu:[0,10,14],item:1,iter:[0,1,5],its:[0,1,2,15],itself:8,j:[0,6],jana:0,jenkin:0,jinja2:2,johnathan:0,jpg:5,json:[0,1],jump:0,just:1,k:[0,6,10],kb:1,keep:[0,10,14],kei:[0,1,2,10],kernel:0,key_nam:2,keyboard:[14,15],keyword:[0,1,2,10],know:11,kwarg:[1,2],l:[0,6,10],lambda:2,lang:0,last:[0,1,10,12,14],last_nam:2,last_visit_d:14,late:1,later:14,latest:[0,1],latter:10,leap:0,leav:1,left:[0,10],legaci:16,length:11,less:11,lesser:1,let:[1,11],letter:[0,6],li:10,libcrypt:8,libffi:8,librari:[0,5,7],life:0,lightweight:0,like:[0,1,2,3,10,15],limit:[0,2],lin:0,line:[1,3,10,11],link:[0,1,11,14],linoxid:0,lint:11,linux:[0,8,14],linuxus:0,list:[0,1,2,8,9,10,11,16],list_using_id:1,list_view:2,listtag:1,llvm:8,ln:14,load_chrome_databas:1,load_firefox_databas:1,local:[0,7,8,10,13,14],locat:[0,10,14],lock:[0,10],log:[0,1],logger:[1,11],logic:10,long_descript:16,look:[0,10,11,14],low:1,lower:[1,10],lowercas:[6,10],lscolor:6,m:[0,2,6,11],machin:[0,1],macro:2,macvim:0,made:1,magazin:0,magenta:6,mai:[0,6,8,10,14],main:[1,3,5],maintain:[0,12],make:[0,1,12,14,16],malform:1,man:[0,11],manag:[1,3,5,8,13,14],mani:[2,14],manual:[0,1,6,8,10,14],mapfil:15,mark:10,markdown:[0,1,16],mass:2,match:[0,1,2,10],max:[0,14],mayb:16,md:[0,1,3,11,12],mechan:10,memori:10,menu_class_nam:2,menu_icon_typ:2,menu_icon_valu:2,merg:[0,1,10],mergedb:1,messag:1,messi:1,metadata:16,method:[0,2],methodview:2,might:[8,11,14],milk:0,mime:1,min:0,min_entri:2,mini:[0,3],miss:0,modal:2,mode:[0,1,14],model:2,modelview:2,modif:0,modifi:10,modul:[3,4],monkeypatch:1,monkeypatch_textwrap_for_cjk:1,month:1,more:[0,7,10,11],most:1,mous:14,mousepad:14,move:[0,1,10],moz_plac:14,mozilla:14,msg:1,much:7,multi:[0,5,15],multipl:[0,1,10,14,15],multipli:2,must:[0,1,2,8,10],mutabl:0,mv:14,mymodelview:2,n0:0,n:[0,1,2,6],name:[1,2,10],named_filter_url:2,namedtemporaryfil:1,namespac:2,nav:1,navig:[1,8],nc:0,need:[1,5,8,11,14],neg:1,neither:1,net:0,network:[0,1],network_handl:1,newer:3,newlin:[1,15,16],newtag:1,next:[0,8,11],nf:9,node:1,non:[0,1,15],none:[1,2,5],nonempti:1,noninteract:1,nor:1,normal:6,nostdin:0,not_equ:2,not_equal_func:2,not_in_list:2,not_in_list_func:2,note:[0,1,5,6,10,11,12,16],notifi:12,nov:7,np:[0,9],nr:9,num:1,number:[0,1,2,10,16],o:[0,6,14,15],oa:0,obj:[1,2],object:[1,2],obsolet:0,occur:2,off:6,offer:6,oil:0,oklxm:[0,6],old:0,older:[3,10],omit:[0,1,10],onc:[10,14],one:[0,1,2,10,11,15],onli:[0,1,2,6,10],op:1,open:[0,1,8,14,15,16],openssl:8,opensus:0,oper:[0,1,2,10,11],operand:10,operation_text:2,opt:0,option:[1,2,3,5,6,8,10,11,13,14],order:[1,2,10],org:[0,1,16],orgfil:0,orig:1,origin:[1,16],os:[0,11,14],other:[0,10,11],otherwis:[0,1,8,14],out:[1,5],output:[0,1],outrag:1,over:[0,1],overrid:2,override_text_brows:1,overriden:2,overwrit:[1,10],own:10,p:[0,2,6,13,14,15],packag:[3,4,12],page:[0,1,2,3,10,11],page_s:2,pagin:2,pandoc:16,parallel:13,param:2,paramat:1,paramet:[1,2],parent:[1,10],pars:[0,1,2,10],parse_decoded_pag:1,parse_tag:1,parse_temp_file_cont:1,parser:1,parti:15,pass:[1,2,6,10],password:[10,16],past:0,path:[1,10,14,15],path_to_bookmark:14,pattern:1,pbcopi:0,pbpast:14,pen:0,per:[0,1],perform:1,perk:0,person:0,pgk:8,pick:0,pinboard:[0,14],pinku:[0,14],pip3:0,pip:[8,13,16],pipe:[1,3,14],pipearg:1,piped_input:1,pk:2,pkg:8,place:[1,7,10,14,15],plaintext:1,platform:[1,14],pleas:[0,6,11],plu:14,plug:0,pocket:0,point:0,poku:0,pool:1,poolmanag:1,popul:[0,10,12],port:8,portabl:0,posit:[0,2],posix:[0,6],possibl:[5,10,11,14,16],post:2,postn:16,power:[0,5],pr:[0,3],prakash:0,preced:0,prefer:[0,3,10],prefix:[0,1],prefix_char:1,prep_tag_search:1,prepar:1,presenc:15,press:[3,14],prevent:10,preview:0,price:2,primari:[14,15],print:[0,1,8,9,11,15],print_help:1,print_json_saf:1,print_rec:1,print_rec_with_filt:1,print_single_rec:1,prior:10,privaci:0,privat:0,probabl:14,problem:11,procedur:14,produc:16,profil:[1,10],prog:1,program:[0,1,3,5,16],program_info:1,project:[3,13,15],prompt:[0,1,10],prompt_help:1,prone:10,properti:2,prototyp:2,provid:[1,10,11],proxi:[1,3],proxyhost:10,proxymanag:1,proxyport:10,push:12,put:2,py:[11,16],pylint:11,pypandoc:16,pypi:[0,16],pypirc:16,pypitest:16,python3:[0,11,16],python:[0,2,5,8,16],q:0,queri:[1,2,10],question:1,quick:0,quickstart:3,quit:0,quot:[10,11],r:[0,16],rachmadani:0,rachmadaniharyono:16,rais:[1,2],random:[0,1],rang:[0,1,10],rank:10,rather:10,ratio:[1,10],read:[1,10],read_in:1,readabl:[1,2],readm:[3,11,12],real:0,reason:[11,15],rec_id:2,receiv:8,recent:1,recogn:[0,1,14,16],recommend:2,record:[0,1,2,5,10,14],recurs:1,red:6,redirect:[0,1,2],reduc:0,refer:[0,2,10,14],reflect:14,refresh:[0,1],refresh_bookmark:2,refreshdb:1,regardless:10,regex:[0,1,2],regexp:1,regist:16,regular:[1,10],relat:[2,3,15],relationship:2,releas:[1,3,7,10,12],relev:0,reli:15,remain:[0,8,10],rematch:10,reminisc:6,remov:[0,1,2,10,16],render_pric:2,replac:[0,1,10],replace_tag:1,repo:[0,16],report:1,repositori:[0,16],repres:[1,6],represent:1,request:[1,14],requir:[1,2,11,14,15,16],resp:1,respect:[0,1,6],respons:[1,3,4],rest:10,result:[0,1,2,10,16],resultset:[1,10],retriev:1,revers:[0,6],review:12,revisit:0,right:[0,10],riski:0,robust:2,rofi:0,roll:[0,16],root:1,row:1,rst:3,run:[1,3,7,8,9,10,11,13,14],runtim:2,rust:8,rustc:8,s:[0,1,2,5,10,14,15],sall:[0,10],salt_siz:1,same:[0,1,10,11],sani:[0,10],save:[1,15],scaffold_filt:2,scaffold_form:2,scaffold_list_column:2,scaffold_list_form:2,scaffold_sortable_column:2,scan:[0,1],scenario:[5,11],schema:1,scheme:6,score:10,screen:0,script:[0,11,14,15],sdb:1,sdist:16,seamless:0,search:[0,1,2,3],search_bookmark:2,search_by_tag:1,search_keywords_and_filter_by_tag:1,search_result:1,search_tag:2,searchbookmarksform:2,searchdb:1,second:[0,2,10,14],section:[0,11,12,16],see:[0,14],seek:1,seem:1,select:[0,2,14,15],self:[2,13],send:[1,14],separ:[0,1,10,15],sequenc:6,server:[0,1,3,4,8,16],servic:[0,3],set:[0,1,2,3,6,8,10,13,15],set_tag:1,setcolor:1,setup:[1,8,16],setup_logg:1,setuptool:16,sever:[0,5,8],sh:[0,11],sha256:1,share:[8,10,13,14],shell:[3,10],shift:14,shortcut:[0,14,15],shorten:[0,1],should:[1,8,10,11,15],show:[0,1,2,6],show_taglist:1,shown:10,side:[10,11],sigint:1,sigint_handl:1,sign:12,signal:1,signint:1,signum:1,similar:[0,1],simpl:[0,8,14],simplenamespac:2,sinc:[10,12],singl:[0,1,2,10,11],single_record:1,site:8,size:2,skip:[0,1,10],smaller:2,smaller_func:2,smart:[0,1],smartbookmark:1,so:2,solut:0,solv:11,some:[0,3,6,10,14],someth:2,somewher:14,sort:[1,2,9,10],sort_desc:2,sort_field:2,sortabl:2,sourc:[1,2,3,16],space:[8,10],special:[0,10],specif:[0,11,14],specifi:[0,1,10],speed:14,sql3:8,sqlalchemi:2,sqlite3:[1,14],sqlite:[0,1,14],squash:11,sreg:[0,10],stabl:0,stag:[0,1,2,10],stand:6,standalon:3,standard:[14,15],start:[0,1,3,10,15],starting_id:2,statisticview:2,statu:[0,1],stdin:1,stdout:[0,1],step:[8,14],still:10,storag:8,store:[0,1,10,14],str:[1,2],stream:15,string:[0,1,2,6,11,15],stringfield:2,strip:10,style:6,subdirectori:0,subfold:[1,10],sublist:1,subprompt:0,substitut:11,substr:[0,1,10],succeed:2,success:[1,16],sucsess:16,sudo:[0,14],suffix:[1,16],suggest:[0,1,15],suggest_similar_tag:1,support:[0,1,3,10,14,15],suppress:1,suppress_browser_output:1,sure:[1,12],sweeter:0,sy:1,symbol:[0,1,10,14],symlink:[10,14],sync:[0,3,10],system:[0,1,3,8],sz:0,t:[0,1,5,6,8,9,10,14,15],tab:15,tabl:1,tacit:[0,1,10],tag1:5,tag:[0,1,2,3,5,6,9,12,14],tagbasefilt:2,taglist:[0,1],tagmodelview:2,tags_in:[1,5],tagset:[0,1,10],tagstr:1,tail:[0,1],take:[0,10,14],tar:16,target:8,task:0,team:14,tech:0,technic:14,temp:5,tempfil:1,templat:[0,2,10],temporari:1,termin:[0,1,6],termux:[0,3],test:[7,11,13,16],text:[0,1,2,3,6,12,14,16],textareafield:2,textiowrapp:1,textual:0,textwrap:1,than:[2,10,11],thei:[1,10],them:[2,5,10,11,14],thi:[0,1,2,5,7,10,11,13,14,15,16],thing:0,third:[0,15],those:[0,1],thread:[0,1],through:5,time:[1,10,14],timestamp:1,titl:[0,1,2,5,6,10,14],title_in:[1,5],tmux:0,tny:0,tnyfy_url:1,to_temp_file_cont:1,toc:3,todo:0,togeth:[1,8,10],toggl:0,toi:0,token:1,too:[0,2],top:2,top_x:2,top_x_func:2,tox:13,traceback:1,track:0,trail:11,translat:2,travers:1,traverse_bm_fold:1,travi:11,treat:10,tri:1,troubleshoot:3,ts:15,tty:15,tunnel:10,tupl:[1,2],tweak:14,twice:10,twine:16,two:[2,10],type:[0,1,2,8,15],typecod:1,typeerror:1,u:[0,2,10,14],ubuntu:[0,14,16],ulno:0,unboundfield:2,unconfirm:0,under:11,understand:[6,14],undocu:[1,10],unencrypt:10,unhandl:11,uninstal:[0,8],uniqu:[0,1,2,10],unique_tag:1,unlist:0,unlock:[0,10],until:15,untitl:1,untouch:[0,10],unusu:1,unwrap:1,up:[0,8,12,14],updat:[0,1,2,3,5,11,12],update_model:2,update_rec:1,update_tag:2,upgrad:[8,16],upload:16,uppercas:10,upstream:[0,1],uri:1,url:[0,1,2,5,6,8,10,14,16],urllib3:0,us:[0,1,2,5,7,8,10,11,13,14,15],usag:[1,2,3,5,9,10],usage_count:[1,2],use_nested_folder_structur:1,user:[0,1,2,5,10,11,12,13,14],user_profil:15,usernam:[10,16],usr:0,utf:1,util:[0,14],v1:7,v2:10,v:[0,2],valid:[1,2],valu:[1,2,6],valueerror:2,variabl:[0,1,6,8,10,11,14,15],variou:8,verbatim:11,verbos:[0,1],veri:10,verifi:14,version:[0,1,6,12,16],via:[2,6],video:[3,6],view:[3,4],vim:14,virtualenv:13,visit:[0,14],visual:0,w:[0,1,10,14,16],wa:[1,7,15],wai:[11,14],wait:[0,15],walk:1,want:[0,2,10,14],wayback:[0,1],wayland:0,we:[6,11,13],web:[0,1,3,5,10],webextens:0,websit:15,welcom:[0,11],well:[0,6],went:12,what:12,when:[0,1,2,8,10,15],where:[0,1,2,10,14],whether:1,which:[0,1,5,6,8,10,11,15],white:6,whitespac:11,who:0,wide:1,widget:2,wiki:0,wikipedia:6,win32:1,window:[0,1,3,10],within:10,without:[0,1,10],wl:0,word:[1,10],work:[0,1,7,8,10],workflow:[0,14],world:0,would:14,wrap:[0,1],wrapper:[0,1,5,15],write:[0,1,14,16],write_string_to_fil:1,wtform:2,www:0,x11:0,x1b:6,x:[0,2,6,14],xarg:0,xclip:0,xdg_data_hom:[1,10],xeditablewidget:2,xsel:[0,14],y:[1,6],year:1,yellow:6,you:[0,2,5,6,8,10,11,13,14,15],your:[0,6,8,10,11,14,16],yyyymondd:1,zsh:[0,11]},titles:["Introduction","buku module","bukuserver package","buku","buku","&lt;no title&gt;","Windows support","&lt;no title&gt;","Install Buku on Termux","&lt;no title&gt;","General","PR comment","&lt;no title&gt;","&lt;no title&gt;","ToC","Piped input","Buku 3.8 or newer with readme.md"],titleterms:{"3":16,"600mb":8,"7":16,"8":16,"export":14,"import":[8,10,14],In:0,across:14,altern:10,anywher:14,auto:14,autom:0,backup:8,bookmark:14,browser:14,build:8,buku:[1,3,4,8,16],bukuserv:[2,3,4,8],cleanup:8,cmder:15,code:11,collabor:0,color:0,command:0,comment:11,complet:0,content:0,contribut:0,databas:[8,14],db:10,delet:10,depend:[0,8],document:3,drive:14,editor:[0,10,14],encrypt:10,exampl:0,featur:0,file:10,filter:2,form:2,from:[0,14],fuzzi:15,gener:10,guid:3,guidelin:11,help:11,indic:3,input:15,instal:[0,8],integr:[0,15],introduct:0,line:0,main:8,manag:0,md:16,modul:[1,2],newer:16,older:16,option:0,packag:[0,2,8],pipe:15,pr:11,prefer:14,press:0,program:11,project:0,proxi:10,quickstart:0,readm:16,relat:0,releas:0,respons:2,rst:16,run:0,search:[10,15],server:2,servic:14,set:14,shell:0,some:8,sourc:0,standalon:0,start:8,support:6,sync:14,system:14,tabl:[0,3],tag:10,termux:8,test:14,tip:14,toc:14,troubleshoot:0,updat:10,usag:0,user:3,video:0,view:2,web:14,wiki:3,window:[6,15]}})