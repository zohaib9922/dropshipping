(function(b){function a(){var d=b(document).height(),c=d-65;console.log(d);b("iframe#dropshix-frame").css({height:c})}b(window).resize(function(c){if(b("div#ds-search-panel").length){a()}});b(document).ready(function(){if(b("div#ds-search-panel").length){a()}var j=b(".product_custom_field").find("#_product_url");if(j){var g=j.first().val(),f='<a href="'+g+'" target="_blank" class="btn btn-warning">Click here</a>';j.after(f);j.first().hide()}if(b("input#prepared").length){var i=b("input#prepared").val();if(i==="yes"){b("input#publish")[0].click()}}if(b("#dshixTrackToken").length){b("#saveTrackToken").click(function(m){m.preventDefault();var l=b("#dshixTrackToken").val(),k=b(this).attr("data-post-id");if(l===""){alert("You have not yet put a token. Please put a tracking token from Dropshix.")}else{if(l.length<60){alert("Token is not valid.")}else{b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"saveTrackToken",security:b("input#ajax_nonce").val(),token:l,post_id:k},success:function(o,p,n){if(o.status=="success"){b("#tokenHolder").html("Success!");b('button[name="save"]')[0].click()}else{console.log(o)}},error:function(n,p,o){console.log(o);b("p#priceResult").removeClass("alert-warning");b("p#priceResult").addClass("alert-danger");b("p#priceResult").html(o)}})}}})}if(b("select#dsPriceMode").length){var h=b("select#dsPriceMode");h.on("change",function(){if(b("input#not_sale_product").prop("checked")){b("p#priceResult").slideDown("normal",function(){b(this).html('This feature cannot work on "Disable Sale price mode"! Please enable Sale price first!')});return false}var k=this.value;b("p#priceResult").slideDown("normal",function(){b(this).html("Processing...")});b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"dshixSetPriceMode",security:b("input#ajax_nonce").val(),mode:k,post:b("input#dshix_woo_id").val()},success:function(m,n,l){if(m.status=="success"){b("p#priceResult").removeClass("alert-warning");b("p#priceResult").addClass("alert-success");b("p#priceResult").html("Success!");b("input#publish")[0].click()}else{console.log(m)}},error:function(l,n,m){console.log(m);b("p#priceResult").removeClass("alert-warning");b("p#priceResult").addClass("alert-danger");b("p#priceResult").html(m)}})})}if(b("select#dsStockMode").length){var e=b("select#dsStockMode");e.on("change",function(){var k=this.value;b("p#stockResult").slideDown("normal",function(){b(this).html("Processing...")});b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"dshixSetStockMode",security:b("input#ajax_nonce").val(),mode:k,post:b("input#dshix_woo_id").val()},success:function(m,n,l){if(m.status=="success"){b("p#stockResult").removeClass("alert-warning");b("p#stockResult").addClass("alert-success");b("p#stockResult").html("Success!");b("input#publish")[0].click()}else{console.log(m)}},error:function(l,n,m){console.log(m);b("p#stockResult").removeClass("alert-warning");b("p#stockResult").addClass("alert-danger");b("p#stockResult").html(m)}})})}if(b("input#not_sale_product").length){var d=b("input#not_sale_product");d.on("change",function(){if(b("select#dsPriceMode").val()=="manual"){b("p#saleResult").slideDown("normal",function(){b(this).html('This feature will have no effect on Price Mode set to "manual".')});d.prop("checked",false);return false}b("p#saleResult").slideDown("normal",function(){b(this).html("Processing...")});if(d.prop("checked")){var k="no"}else{var k="yes"}b.ajax({url:ajaxurl,type:"post",data:{action:"dshixDisableSale",security:b("input#ajax_nonce").val(),sale:k,post:b("input#dshix_woo_id").val()},success:function(m,n,l){console.log(m);b("p#saleResult").removeClass("alert-warning");b("p#saleResult").addClass("alert-success");b("p#saleResult").html("Success!");b("input#publish")[0].click()},error:function(l,n,m){console.log(m);b("p#saleResult").removeClass("alert-warning");b("p#saleResult").addClass("alert-danger");b("p#saleResult").html("Error!")}})})}if(b("div.nav-to-dropshix").length){b(".loading-layer").fadeIn("fast");b("#dropshix-frame").on("load",function(){b(".loading-layer").fadeOut("slow")});b("a.changeSupplier").each(function(){b(this).click(function(l){l.preventDefault();b(".loading-layer").fadeIn("fast");var k=b(this).attr("data-source");console.log(k);b.ajax({url:ajaxurl,type:"post",data:{action:"Xox_Switch_URL",source:k}}).fail(function(o,m,n){console.log(n)}).done(function(o,m,n){b("#dropshix-frame").attr("src",o);b("#dropshix-frame").on("load",function(){b(".loading-layer").fadeOut("slow")})})})})}if(b("#tblInActive").length){b("#tblInActive").DataTable({dom:'<"top"<"clear">fl<"clear">>rt<"bottom"ip<"clear">>',fixedHeader:{header:true,headerOffset:b("#wpadminbar").height()}});b("#tblInActive").on("click",".xox-archivethisfa",function(l){var m=b(this).attr("data-id"),k=b(this).attr("data-source");b(this).html("Loading . . .");b(".xox-archivethisfa-"+m).attr("disabled","disabled");b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"Xox_Archive_Item",id:m,source:k}}).fail(function(q,n,p){var o='<div class="alert alert-danger"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Error!</strong>Failed Archiving Data. </div>';b(".action-"+m).prepend(o);b(".xox-archivethisfa-"+m).html("Archive");b(".xox-archivethisfa-"+m).removeAttr("disabled")}).done(function(q,n,p){if(q.status==true){alert("Item Successfully Archived");b("tr#ic-"+m).remove()}else{var o='<div class="alert alert-danger"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Error!</strong>Failed Archiving Data. </div>';b("td#action-"+m).prepend(o);b(".xox-archivethisfa-"+m).html("Archive");b(".xox-archivethisfa-"+m).removeAttr("disabled")}})})}if(b("#tblActive").length){b("#tblActive").DataTable({processing:true,serverSide:true,ajax:b("#dshixajaxurl").val(),columns:[{data:"source_id",name:"source_id"},{data:"post_id",name:"post_id","class":"text-center"},{data:"date",name:"date"},{data:"title",name:"title"},{data:"img",name:"img","class":"text-center"},{data:"original_price",name:"original_price","class":"text-center"},{data:"original_sale_price",name:"original_sale_price","class":"text-center"},{data:"price",name:"price","class":"text-center"},{data:"sale_price",name:"sale_price","class":"text-center"},{data:"action",name:"action","class":"text-center"}],filter:true,order:[[1,"desc"]],ordering:true,lengthMenu:[[10,25,50],[10,25,50]],dom:'<"top"ip<"clear">l<"clear">>rt<"bottom"ip<"clear">>',fixedHeader:{header:true,headerOffset:b("#wpadminbar").height()},createdRow:function(m,l,k){b(m).find("td:eq(8)").attr("id","action-"+l.id)},language:{processing:'<span style="width:100%;"><img src="'+b("input#dshix_url").val()+'/dshixloading3.gif"> Processing...</span>'},initComplete:function(){this.api().columns().every(function(){var m=this,l=m.index();var k=document.createElement("input");b(k).appendTo(b(m.footer()).empty()).on("change",function(){m.search(b(this).val(),false,false,true).draw()})})}});b("#tblActive").on("click",".xox-cat-import",function(m){var n=b(this).attr("data-id"),l=b(this).attr("data-source"),k=b("input#dshix_url").val();b("div#result"+n).show();b("div#result"+n+" p").html('The feature only available from <a href="/wp-admin/admin.php?page=dropshix-web-app">"Web Application"</a>')});b("#tblActive").on("click",".xox-re-queue",function(m){var n=b(this).attr("data-id"),l=b(this).attr("data-source"),k=b("input#dshix_url").val();b("div#result"+n).show();b("div#result"+n+" p").html('<img src="'+k+'/dshixloading3.gif" style="width: 16px; height: 16px;"><br>Processing...');b(this).attr("disabled","disabled");b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"DshixResetItem",security:b("input#ajax_nonce").val(),id:n,source:l}}).fail(function(q,o,p){var s="Failed Import Data. ";if(typeof q.msg!=="undefined"){s=q.msg}b("div#result"+n).removeClass("alert-info");b("div#result"+n).addClass("alert-danger");b("div#result"+n+" p").html(s);b(".xox-re-queue-"+n).removeAttr("disabled")}).done(function(s,p,q){if(s.status==true){var t=parseInt(b("span#itemActive").html()),o=t-1;b("span#itemActive").html(o);alert("Item Successfully Reset to Queue list!");b("#tblActive").DataTable().ajax.reload()}else{var u="Failed Import Data. ";if(typeof s.msg!=="undefined"){u=s.msg}b("div#result"+n).removeClass("alert-info");b("div#result"+n).addClass("alert-danger");b("div#result"+n+" p").html(u);b(".xox-re-queue-"+n).removeAttr("disabled")}})});b("#tblActive").on("click",".xox-deletethisfa",function(m){var n=b(this).attr("data-id"),l=b(this).attr("data-source"),k=b("input#dshix_url").val();b("div#result"+n).show();b("div#result"+n+" p").html('<img src="'+k+'/dshixloading3.gif" style="width: 16px; height: 16px;"><br>Processing...');b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"Xox_Delete_Item",security:b("input#ajax_nonce").val(),id:n,source:l}}).fail(function(q,o,p){var s="Failed Import Data. ";if(typeof q.msg!=="undefined"){s=q.msg}b("div#result"+n).removeClass("alert-info");b("div#result"+n).addClass("alert-danger");b("div#result"+n+" p").html(s);b(".xox-importthisfa-"+n).removeAttr("disabled")}).done(function(q,o,p){if(q.status==true){alert("Item Successfully Removed");b("#tblActive").DataTable().ajax.reload()}else{var s="Failed Import Data. ";if(typeof q.msg!=="undefined"){s=q.msg}b("div#result"+n).removeClass("alert-info");b("div#result"+n).addClass("alert-danger");b("div#result"+n+" p").html(s);b(".xox-importthisfa-"+n).removeAttr("disabled")}})})}if(b("#tblPending").length){b("#tblPending").DataTable({processing:true,serverSide:true,ajax:b("#dshixajaxurl").val(),columns:[{data:"source_id",name:"source_id"},{data:"date",name:"date"},{data:"title",name:"title"},{data:"store_name",name:"store_name"},{data:"img",name:"img"},{data:"price",name:"price"},{data:"sale_price",name:"sale_price"},{data:"vol",name:"vol"},{"class":"text-center ",data:"action",orderable:false,name:"action"}],filter:true,order:[[1,"desc"]],ordering:true,lengthMenu:[[10,25,50],[10,25,50]],dom:'<"top"ip<"clear">l<"clear">>rt<"bottom"ip<"clear">>',fixedHeader:{header:true,headerOffset:b("#wpadminbar").height()},createdRow:function(m,l,k){b(m).find("td:eq(8)").attr("id","action-"+l.id)},language:{processing:'<span style="width:100%;"><img src="'+b("input#dshix_url").val()+'/dshixloading3.gif"> Processing...</span>'},initComplete:function(){this.api().columns().every(function(){var m=this,l=m.index();var k=document.createElement("input");if(l!==7&&l!==8){b(k).appendTo(b(m.footer()).empty()).on("change",function(){m.search(b(this).val(),false,false,true).draw()})}})}});var c=b("input#dlevel").val();b("#tblPending").on("click","p .xox-import",function(n){var q=b(this).attr("data-id");var l=b("#desc-"+q).val();var p=b(this).attr("data-title"),m=b(this).attr("data-source"),k=b("input#dshix_url").val();var o="";b(this).hide("fast");b(this).parent("p").html('<img src="'+k+'/dshixloading3.gif" style="width: 32px; height: 32px;"><br>Importing product.');b(".xox-deletethis-"+q).hide();b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"Xox_Import_Item",security:b("input#ajax_nonce").val(),id:q,description:l,title:p,source:m}}).fail(function(v,s,u){if(typeof v.msg!=="undefined"){o=v.msg}if(typeof v.msg=="undefined"){o=u}var t='<div id="result-'+q+'" class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>ERROR [Item ID: #'+q+"]:</h4><p>"+o+"</p></div>";b("#result").prepend(t);b("#tblPending").DataTable().ajax.reload()}).done(function(s,v,A){console.log(s);if(s.status==true){var x='<p><a href="'+s.url+'&dsprepared=yes" target="_blank" class="btn btn-warning">Edit item.</a></p>';var t=s.url.replace(/&amp;/g,"&")+"&dsprepared=yes";var u='<p><a href="'+s.view+'" target="_blank" class="btn btn-primary">View item.</a></p>';var z=parseInt(b("span#itemActive").html()),w=z+1;b("span#itemActive").html(w);var y='<div id="result-'+q+'" class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>SUCCESS [item #'+q+"]</h4><p>Product imported successfully!</p>"+x+u+"</div>";b("div#result").prepend(y);if(m=="ae"){b("td#action-"+q).empty();b("td#action-"+q).html('<p><img src="'+k+'/dshixloading3.gif" style="width: 32px; height: 32px;"><br>Importing variations.<br><span class="text-warning">This can took a while, depending on the number of the variations.</span></p>');var B=s.wooid;b.ajax({url:ajaxurl,type:"post",data:{action:"importAtrrVar",security:b("input#ajax_nonce").val(),wooid:B},success:function(D,E,C){console.log(D);var r='<div id="variations-'+q+'" class="alert alert-success"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>SUCCESS [item #'+q+"]</h4><p>Variations imported successfully!</p></div>";b("div#result").prepend(r);b("#tblPending").DataTable().ajax.reload()},error:function(C,E,D){console.log(C);var r='<div id="variations-'+q+'" class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>ERROR [item #'+q+"]</h4><p>"+C+"</p><p>"+D+"</p></div>";b("div#result").prepend(r);b("#tblPending").DataTable().ajax.reload()},timeout:0})}else{if(m=="amus"){var y='<div id="variations-'+q+'" class="alert alert-warning"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>ERROR [item #'+q+"]</h4><p><strong>Error!</strong> The source store (AMAZON) does not support auto import for variations.</p></div>";b("div#result").prepend(y);b("#tblPending").DataTable().ajax.reload()}else{var y='<div class="alert alert-warning"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Error!</strong> Your current package does not support auto import for attributes, please import attributes manually or upgrade your package.</div>';b("div#result").prepend(y);b("#tblPending").DataTable().ajax.reload()}}}else{if(typeof s.msg!=="undefined"){o=s.msg}if(typeof s.msg=="undefined"){o=A}var y='<div id="result-'+q+'" class="alert alert-danger"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="font-size: 14px;">&times; [close]</a><h4>ERROR [Item ID: #'+q+"]:</h4><p>"+o+"</p></div>";b("#result").prepend(y);b("#tblPending").DataTable().ajax.reload()}})});b("#tblPending").on("click",".xox-remove",function(){var m=b(this).attr("data-id"),l=b(this).attr("data-source"),k=b("input#dshix_url").val();b(this).html('<img src="'+k+'/dshixloading3.gif" style="width: 32px; height: 32px;"> <span style="font-size: 10px;">Removing product</span>');b("#xox-importthis-"+m).attr("disabled","disabled");b.ajax({url:ajaxurl,type:"post",dataType:"json",data:{action:"Xox_Delete_Item",security:b("input#ajax_nonce").val(),id:m,source:l}}).fail(function(q,n,p){var o='<div class="alert alert-danger"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Error!</strong>Failed Delete Data. </div>';b("#result").prepend(o);b("#tblPending").DataTable().ajax.reload()}).done(function(q,n,p){if(q.status==true){alert("Item Successfully Removed");b("#tblPending").DataTable().ajax.reload()}else{var o='<div class="alert alert-danger"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Error!</strong>Failed Delete Data. </div>';b("#result").prepend(o);b("#tblPending").DataTable().ajax.reload()}})})}})})(jQuery);